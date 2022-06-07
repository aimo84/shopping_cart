<html>

  <head>

  <style>
        @font-face {
            font-family: 'TrueMedium';
            src: url("{{ resource_path('fonts/TrueMedium/true_medium-webfont.ttf') }}") format('truetype');
            font-weight: normal;
            font-style: normal;
        }

        @font-face {
            font-family: 'TrueItalic';
            src: url("{{ resource_path('fonts/TrueMedium/true_medium-webfont.ttf') }}") format('truetype');
            font-weight: normal;
            font-style: italic;
        }

        @font-face {
            font-family: 'TrueBold';
            src: url("{{ resource_path('fonts/TrueBold/true_bold-webfont.ttf') }}") format('truetype');
            font-weight: bold;
            font-style: normal;
        }

        @font-face {
            font-family: 'TrueBoldItalic';
            src: url("{{ resource_path('fonts/TrueBold/true_bold-webfont.ttf') }}") format('truetype');
            font-weight: bold;
            font-style: italic;
        }

        body {
            font-family: 'TrueMedium', 'TrueBold', 'TrueItalic', 'TrueBoldItalic';
            font-size: 24px;
            line-height: 24px;
            color: #37474f;
            margin: 0;
        }
        </style>
  </head>

  <body style='margin: 0; color: #333;'>
    <div id='app'>
      <div style='padding: 24px;'>
        <div>
          <img style='height: 20px;float: right;' src='http://cdn.mcauto-images-production.sendgrid.net/de12df10591dc104/5c6da5b6-a89e-4445-9849-c144a28fc99d/277x45.png'>
        </div>
        <div style='margin-top: 12px; text-align: center'>
          <hr style='margin: 24px auto; border: 0px solid #dbdbdb; max-width: 60%'>
          <div>เบอร์ฟันธงเฉพาะคุณ</div>
          <?php
            $mobile_number = array_get($sim_meta, "0.number");
            if (strlen($mobile_number) > 8) {

                $pos           = 3;
                $mobile_number = substr_replace($mobile_number, "-", $pos, 0);
                $pos           = 7;
                $mobile_number = substr_replace($mobile_number, "-", $pos, 0);
            }
          ?>
          @if(!isset($vhora_icon))
          <div style='margin-top: 8px; color: #000; font-size: 40px; font-weight: bold; text-align: center;'>{{ $mobile_number }}</div>
          @else
          <!-- Start of Grade Box -->
          <div style="border: 1px solid {{$vhora_mobile_color}}; border-radius: 8px; max-width: 420px; margin: 24px auto;">
            <div style="background-color: {{$vhora_mobile_color}}; color: #fff; font-size: 0; height: 40px; line-height: 40px; padding: 8px 0;">
              <div style="display: inline-block; font-size: 24px; width: 35%">
                <img
                  style="margin-right: 2px; margin-left: 10px; margin-top: 8px; float: left;"
                  src="{{ $vhora_icon }}" height="24" />
                <div>{{$vhora_group_title}}</div>
              </div>
              <div style="display: inline-block; font-size: 36px; width: 24%; border-left: 1px solid #fffc; border-right: 1px solid #fffc;">
                {{$vhora_grade}}
              </div>
              <div style="display: inline-block; font-size: 24px; width: 40%">
                {{$vhora_subgroup_title}}
              </div>
            </div>
            <div style="padding: 16px 8px; font-size: 40px">{{ $mobile_number }}</div>
          </div>
          <!-- End of Grade Box -->
          @endif
          <div>ผลคำทำนายดวงชะตาของท่านตามลัคนาราศี</div>
        </div>
      </div>
      <div style='padding: 24px; text-align: center;'>
        <img style='' src="{{ $file_name_2_content  }}" />
        <br>
        <?php
          $raw_birth_date   = strval(array_get($sim_meta, "0.birth_date"));
          $final_birth_date = $raw_birth_date;

          $explode_raw_birth_date = explode("/", $raw_birth_date);
          $a                      = strtotime($explode_raw_birth_date[1] . "/" . $explode_raw_birth_date[0] . "/" . strval(intval($explode_raw_birth_date[2])-543));
          $thai_month             = [
              "มกราคม",
              "กุมภาพันธ์",
              "มีนาคม",
              "เมษายน",
              "พฤษภาคม",
              "มิถุนายน",
              "กรกฎาคม",
              "สิงหาคม",
              "กันยายน",
              "ตุลาคม",
              "พฤศจิกายน",
              "ธันวาคม",
          ];
          $months = [
              'January',
              'February',
              'March',
              'April',
              'May',
              'June',
              'July',
              'August',
              'September',
              'October',
              'November',
              'December',
          ];
          
          $to_be_replace_month = array_map(null, $months, $thai_month);

          $a = date('วันที่ j F Y', $a);

          foreach ($to_be_replace_month as $each_month_key => $each_month_value) {
              $a = str_replace($each_month_value[0], $each_month_value[1], $a);
          }

          $tmp_birth_date_split          = explode(' ', $a);
          $tmp_birth_date_before_implode = [];
          for ($i = 0; $i <= 2; $i++) {
              $tmp_birth_date_before_implode[] = $tmp_birth_date_split[$i];
          }

          $final_birth_date = implode(' ', $tmp_birth_date_before_implode) . ' ' . strval(intval($explode_raw_birth_date[2]));
        ?>
        <br>
        <div>
          <?php
            $first_name     = array_get($sim_meta, "0.berfuntong.first_name", "");
            $last_name      = array_get($sim_meta, "0.berfuntong.last_name", "");
            $len_first_name = strlen($first_name);
            $len_last_name  = strlen($last_name);
          ?>
          ดวงชะตาของคุณ{{$len_first_name > 0 || $len_last_name > 0 ? " ": ""}}<span style="font-family: 'TrueBold';">{{$first_name}}{{strlen($first_name) > 0 ? "  ": ""}}{{$last_name}}</span>
          เกิด{{ $final_birth_date }} เวลา {{array_get($sim_meta, "0.birth_time")}} น.
        </div>
        <div style = "text-align: left;">
          {!! array_get($fortune_funtong, "ascendant.detail1") !!} {!! array_get($fortune_funtong, "ascendant.detail2") !!}
        </div>

        <img style='float:right;width: 307px; height: 110px;' src="{{ $signature  }}" />
        <div style='clear:both'></div>
      </div>
      
    </div>
  </body>

</html>
