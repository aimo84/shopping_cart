<?php
function get_data_from_redis_berfuntong()
{
  $tmp_str             = '';
  $is_disabled_lowtier = \Redis::get('truestore:is_disabled:lowtier');

  if (empty($is_disabled_lowtier)) {
    $tmp_str .= "LOWTIER: '1',\n";
  }

  return $tmp_str;
}

function get_data_from_redis_no_ekyc_device_bundle()
{
  $no_ekyc_device_bundle = \Redis::get('no_ekyc_device_bundle');

  return $no_ekyc_device_bundle;
}

function get_data_from_redis_no_ekyc_sim_only()
{
  $no_ekyc_device_bundle = \Redis::get('no_ekyc_sim_only');

  return $no_ekyc_device_bundle;
}

function get_data_from_redis_is_f_and_f_remove_ekyc()
{
  $no_ekyc_device_bundle = \Redis::get('truestore:is_enable_by_string_true:disable_by_other_or_del_key:is_f_and_f_remove_ekyc:frontend:redis_data');

  return $no_ekyc_device_bundle;
}

function get_is_2c2p_v2_pattern()
{
  $is_2c2p = \Redis::get('truestore:is_enable_by_string_true:disable_by_other_or_del_key:is_2c2p_v2_pattern:frontend:redis_data');

  return $is_2c2p;
}

function get_popup_live_chat_config()
{
  $service = new \App\Services\ConfigService();
  $response = $service->getPopupLiveChatConfig();
  return json_encode($response);
}

?>
<!doctype html>
<html lang='th'>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="csrf-token" content="<?php echo csrf_token(); ?>">
  <meta name="google-site-verification" content="<?php echo env('GOOGLE_SITE_VERIFICATION', '6dE2HTLV6tenBBAnYaFuluXb-lyO7eOKYwtLe9LOIxs'); ?>" />

  <?php if (strpos(Request::url(), 'berfuntong') !== false) : ?>
    <title>เบอร์มงคล เลขมงคล ตามลัคนาราศี ฟันธง โดย อ.ลักษณ์ ราชสีห์</title>
    <meta name="description" content="เช็คเบอร์มงคลตามดวงวันเกิด เสริมดวง ทั้งเรื่องการงาน การเงิน ความรัก โชคลาภ พร้อมรับคำทำนายดวงชะตา อยากได้เบอร์ไหน เลือกเลย">
  <?php else : ?>
    <title>TrueMove H</title>
  <?php endif; ?>

  <link rel='icon' href='/favicon.png'>
  <link rel="preload" href="<?php echo env('APP_ENV') != 'local' ? env('CDN_ASSETS') : '' ?>/fonts/TrueLight/true_light-webfont.woff2" as="font" type="font/woff2">
  <link rel="preload" href="<?php echo env('APP_ENV') != 'local' ? env('CDN_ASSETS') : '' ?>/fonts/TrueBold/true_bold-webfont.woff2" as="font" type="font/woff2">
  <link rel="preload" href="<?php echo env('APP_ENV') != 'local' ? env('CDN_ASSETS') : '' ?>/fonts/TrueMedium/true_medium-webfont.woff2" as="font" type="font/woff2">
  <link rel="stylesheet" type="text/css" href="<?php echo env('APP_ENV') != 'local' ? env('CDN_ASSETS') : '' ?>/css/chat-and-shop.css">
  <link rel="stylesheet" type="text/css" href="<?php echo env('APP_ENV') != 'local' ? env('CDN_ASSETS') : '' ?>/css/cookies.css">
  <link rel="stylesheet" type="text/css" href="<?php echo env('APP_ENV') != 'local' ? env('CDN_ASSETS') : '' ?>/css/tool-tip-chat-and-shop.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.css" />

  <script>
    (function(w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
      });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != 'dataLayer' ? '&l=' + l : '';
      j.async = true;
      j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', '<?php echo env('GA_CODE_2', 'GTM-T7P7P7R'); ?>');
    (function(w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
      });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != 'dataLayer' ? '&l=' + l : '';
      j.async = true;
      j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', '<?php echo env('GA_CODE', 'GTM-KKHHM7B'); ?>');
  </script>
</head>

<body>
  <div id="app"></div>

  <!-- cookie consent start -->
  <div id="floater-bnr-box" class="floater-block">
    <div class="floater-block-inner">
      <div id="float-close-btn" class="floater-close-btn"><span class="custom-x-icon"></span></div>
      <p class="floater-prg cookies-text"><strong>เว็บไซต์นี้ใช้คุกกี้</strong><br>เราต้องการให้คุณได้รับประสบการณ์ที่ดีในการใช้งานเว็บไซต์ เราจึงนำคุกกี้ที่บันทึกการเข้าชม และการใช้งานบนหน้าเว็บไซต์จากเครื่องของคุณมาวิเคราะห์ เพื่อเพิ่มประสิทธิภาพต่างๆ รวมทั้งนำเสนอดีล และคอนเทนต์ที่ตรงใจคุณยิ่งขึ้น</p>

      <button id="floater-accept-btn" type="button" class="floater-button-panel -pinkgrad">ยอมรับ</button>
    </div>
  </div>
  <!-- cookie consent end -->

  <!-- Chat & Shop  -->
  <div class="chat-shop">
    <div class="fixed-chatshop">
      <div class="tooltiptext">
        <img class="icon-cross" alt="IconCross" onclick="CloseToolTip()" />
        <div class="tooltip-title-text">
          <span class="title-text" id="title-1">มีอะไร</span><br>
          <span class="title-text" id="title-2">ให้ช่วยมั้ย?</span>
        </div>
        <div class="not-show" onclick="notShowPopup()">
          <div class="check-true">
            <svg width="9" height="8" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path id="check-path" d="M8.56973 1.8093L4.43973 5.8693C4.29973 6.0793 4.01973 6.1493 3.80973 6.1493C3.59973 6.1493 3.31973 6.0793 3.10973 5.8693L1.07973 3.8393C0.72973 3.4893 0.72973 2.8593 1.07973 2.5093C1.42973 2.1593 2.05973 2.1593 2.40973 2.5093L3.80973 3.9093L7.23973 0.479297C7.58973 0.129297 8.21973 0.129297 8.56973 0.479297C8.91973 0.829297 8.91973 1.4593 8.56973 1.8093Z" fill="white" />
            </svg>
          </div>
          <span class="not-show-text">ไม่ต้องแสดงอีก</span>
        </div>
      </div>
      <div class='assist-modal-box'>
        <div class='header assist'>
          <div class='text-header'>
            <span class='expand'>Chat &amp; shop</span>
          </div>
          <div class='expand icon-close'>
            <div class='icon'>
              <svg width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="1" x2="10" y2="1" stroke="white" stroke-width="2" />
              </svg>
            </div>
          </div>
        </div>
        <div class='content'>
          <a href='javascript:void(0);' onclick='openWidget()' id='chat-shop-livechat' class='chat-shop-icon'><i class='icon live'></i></a>
          <a id='chat-shop-line' href='https://page.line.me/386rcdld?openQrModal=true'><i class='icon line'></i></a>
          <!-- <a id='chat-shop-assist' href='#'><i class='icon assist'></i></a>-->
          <a id='chat-shop-call' href='tel:027008000'><i class='icon call'></i></a>
          <!-- <a id='chat-shop-video' href='https://truevdocall-1242.truecorp.co.th'><i class='icon vdo-call'></i></a>-->
          <!-- <a id='chat-shop-facebook' href='http://m.me/TrueMoveH'><i class='icon facebook'></i></a> -->
          <a id='chat-shop-callmeback' href='#callback' data-modal='#callback'><i class='icon callback'></i></a>
        </div>
      </div>
      <div class='circle assist-box'>
        <div class='text-header'>
          <div class='title-header change-font-size'><span class='me-1'>แชท</span><svg class='icon-svg' width="100%" height="100%" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.55172 15.1578C4.45057 16.3962 4.14713 17.7336 3.38851 19.1701C2.98391 19.9627 3.18621 20.2104 3.9954 19.8141C6.17012 18.7243 7.78851 17.6346 9.05287 16.6438C9.71034 16.7429 10.3678 16.7925 11.0253 16.7925C17.0943 16.7925 22 13.0278 22 8.421C22 3.76468 17.0437 0 10.9747 0C4.90575 0 0 3.76468 0 8.37146C0 11.1454 1.82069 13.6222 4.55172 15.1578Z" fill="white" />
              <circle cx="11" cy="8" r="1" fill="#E62627" />
              <circle cx="7" cy="8" r="1" fill="#E62627" />
              <circle cx="15" cy="8" r="1" fill="#E62627" />
            </svg><br> <span class="text-header-small">& ช้อป</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal Chat&shop Call me back -->
  <div id="callback" class="modal callback">
    <img src="images/chatandshop/call-center.png" class="img-fluid w-100" style="margin-bottom: -5px;" alt="กดรับสิทธิ์ที่แอป ทรู ไอดี">
    <div class="modal-content">
      <h5 class="title-text -bold">กรุณากรอกข้อมูลสำหรับการติดต่อกลับ</h5>
      <form>
        <input type="text" class="input-string" id="fname" name="fname" placeholder="ชื่อ">
        <span id="error_fname"></span>
        <input type="text" class="input-string" id="lname" name="lname" placeholder="นามสกุล">
        <span id="error_lname"></span>
        <input type="tel" class="input-numric" id="phone_number" name="phone_number" placeholder="08xxxxxxxx" maxlength="10">
        <span id="error_phone_number"></span>
        <select name="select-product" id="select-product">
          <option value="">สินค้าที่ท่านสนใจ</option>
          <option value="1">ซิมรายเดือน</option>
          <option value="2">เครื่องพร้อมซิมรายเดือน</option>
        </select>
        <span id="error_product"></span>
      </form>
      <p class="text-box">"สวัสดีค่ะ ช่องทางนี้เป็นช่องทางสำหรับการให้ทางเจ้าหน้าที่
        Chat & Shop โทรกลับเพื่อติดต่อท่านลูกค้า
        โดยเปิดให้บริการทุกวัน ตั้งแต่ 9.00 - 19:00 น.
        โปรดกรุณารับสายในอีกประมาณ 30 นาที
        เพื่อให้เจ้าหน้าที่ติดต่อกลับนะคะ"</p>
      <br>
      <a href="#" class="title-text -bold align-center btn-modal-submit" id="modal-submit">ยืนยัน</a>

    </div>

  </div>
  <!-- End Modal Term -->
  <!-- Modal Chat&shop Call me back -->
  <div id="submit-form" class="modal callback">
    <img src="images/chatandshop/call-center.png" class="img-fluid w-100" style="margin-bottom: -5px;" alt="">
    <div class="modal-content">
      <img src="images/chatandshop/success.png" class="img-fluid success-modal" alt="">
      <h5 class="title-text -bold text-success mb-0">ขอบคุณค่ะ</h5>
      <p class="title-text">เจ้าหน้าที่จะทำการ <br>
        ติดต่อท่านกลับไปโดยเร็วที่สุดค่ะ</p>
      <a href="#" class="title-text -bold align-center btn-modal-submit" rel="modal:close">ยืนยัน</a>
    </div>
  </div>
  <!-- End Modal Term -->

  <noscript>
    <iframe src="https://www.googletagmanager.com/ns.html?id=<?php echo env('GA_CODE_2', 'GTM-T7P7P7R'); ?>" height="0" width="0" style="display:none;visibility:hidden"></iframe>
    <iframe src="https://www.googletagmanager.com/ns.html?id=<?php echo env('GA_CODE', 'GTM-KKHHM7B'); ?>" height="0" width="0" style="display:none;visibility:hidden"></iframe>
  </noscript>
  <script src="<?php echo env('SSO_URL'); ?>"></script>
  <script>
    window.url = {
      MIX_LOGIN_URL: '<?php echo env('MIX_LOGIN_URL'); ?>',
      MIX_SIGNUP_URL: '<?php echo env('MIX_SIGNUP_URL'); ?>',
      MIX_APP_URL: '<?php echo env('MIX_APP_URL'); ?>',
      MIX_LOGOUT_URL: '<?php echo env('MIX_LOGOUT_URL'); ?>',
      MIX_TMN_PAY_LATER_DEEP_LINK: '<?php echo env('MIX_TMN_PAY_LATER_DEEP_LINK'); ?>',
      CDN_ASSETS: '<?php echo env('CDN_ASSETS'); ?>',
      APP_ENV: '<?php echo env('APP_ENV'); ?>',
      EPP_CAT: '<?php echo \Redis::get('epp-cat'); ?>'
    }
    window.clm_preview = {
      DEVICE: '<?php echo env('CLM_PREVIEW_PRODUCT_DEVICE'); ?>',
      MNP_SIM: '<?php echo env('CLM_PREVIEW_PRODUCT_MNP_SIM'); ?>',
      TMVH_SIM: '<?php echo env('CLM_PREVIEW_PRODUCT_TMVH_SIM'); ?>',
      TOLCVG: '<?php echo env('CLM_PREVIEW_PRODUCT_TOLCVG'); ?>',
    }
    window.berfuntong = {
      <?php echo get_data_from_redis_berfuntong(); ?>

    }
    window.no_ekyc_device_bundle = '<?php echo get_data_from_redis_no_ekyc_device_bundle(); ?>' === 'true'
    window.no_ekyc_sim_only = '<?php echo get_data_from_redis_no_ekyc_sim_only(); ?>' === 'true'
    window.is_f_and_f_remove_ekyc = '<?php echo get_data_from_redis_is_f_and_f_remove_ekyc(); ?>' === 'true'
    window.is_2c2p_v2_pattern = '<?php echo get_is_2c2p_v2_pattern(); ?>' === 'true'
    window.recaptcha_sitekey = '<?php echo env('NOCAPTCHA_SITEKEY'); ?>'

    popup_live_chat_config = JSON.parse('<?php echo get_popup_live_chat_config(); ?>')
  </script>
  <?php
  $jsonString = file_get_contents(public_path('version.json'));
  $data       = json_decode($jsonString, true);
  $version    = $data['version'];
  ?>

  <script type="text/javascript" src="/v/<?php echo $version; ?>/js/app.js"></script>
  <script type="text/javascript" src="<?php echo env('APP_ENV') != 'local' ? env('CDN_ASSETS') : '' ?>/js/jquery-3.3.1.min.js"></script>
  <script src="https://www.google.com/recaptcha/api.js?render=6LfI2lEcAAAAACpayvUVq0s5TmnDROtA__8VD6QS"></script>
  <script type="text/javascript" src="/js/script-custom.js"></script>
  <script type="text/javascript" src="/js/check-cookies.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.js"></script>

  <script>
    $('a[data-modal]').click(function(event) {
      $(this).modal({
        fadeDuration: 250
      });
      return false;
    });
  </script>

  <!-- Chat and Shop Script -->
  <script>
    $(".fixed-chatshop .circle").click(function() {
      $('.assist-modal-box').css({
        'opacity': '1',
        'visibility': 'visible'
      });
      $content = $('.assist-modal-box .content');
      $content.slideToggle(100, function() {
        if ($content.is(':visible')) {
          $('.expand').show();
          $('.content').show();
        } else {
          $('.expand').hide();
          $('.content').hide();
          $('.assist-modal-box').css({
            'visibility': 'hidden'
          });
        }
      });
    });
    $('.icon-close').click(function() {
      $('.expand').hide();
      $('.content').hide();
      $('.assist-modal-box').css({
        'visibility': 'hidden'
      });
    });
  </script>
  <script>
    var idle_time = popup_live_chat_config.idle_time
    window.setTimeShowPopUp = idle_time * 1000 // delay popup

    // calculate open time
    var open_time = popup_live_chat_config.open_time
    open_time = open_time.split(':')
    open_time = parseInt(open_time[0]) * 60 + parseInt(open_time[1])
    // calculate close time
    var close_time = popup_live_chat_config.close_time
    close_time = close_time.split(':')
    close_time = parseInt(close_time[0]) * 60 + parseInt(close_time[1])
    // calculate current time
    function resetOfficeHours() {
      var date = new Date()
      var current_time = date.getHours() * 60 + date.getMinutes()
      window.checkofficehours = (open_time <= current_time) && (current_time <= close_time) // check office hours
    }

    resetOfficeHours()

    window.setTimeSwitchText = 5000 // set time switch text
    window.indextext = 0
    var time = 0
    var isfirstshowpopup = true
    var popupshow = null
    var switchtext = null
    var timeout = null
    var currenttext = ''
    var pushState = history.pushState;
    var replaceState = history.replaceState;
    var isPopupCheck = false
    var notShowPopupPath = ['/cart', '/tracking', '/address', '/payment']

    var tooltipText = {
      'hours': [{
          'th': {
            'title-1': 'มีอะไร',
            'title-2': 'ให้ช่วยมั้ย?'
          },
          'en': {
            'title-1': 'Do you',
            'title-2': 'need help?'
          },
          'currenttext': 'first'
        },
        {
          'th': {
            'title-1': 'พูดคุยกับเรา',
            'title-2': 'ได้ที่นี่'
          },
          'en': {
            'title-1': 'Chat with',
            'title-2': 'us here!'
          },
          'currenttext': 'second'
        }
      ],
      'nonhours': [{
          'th': {
            'title-1': 'มีอะไร',
            'title-2': 'ให้ช่วยมั้ย?'
          },
          'en': {
            'title-1': 'Do you',
            'title-2': 'need help?'
          },
          'currenttext': 'first',
          'titleFontSize': 26
        },
        {
          'th': {
            'title-1': 'ขณะนี้เป็นเวลา',
            'title-2': 'นอกทำการ'
          },
          'en': {
            'title-1': 'We are offline',
            'title-2': 'at the moment.'
          },
          'currenttext': 'second',
          'titleFontSize': 24
        },
        {
          'th': {
            'title-1': 'ฝากข้อมูลไว้',
            'title-2': 'ให้เราติดต่อกลับ'
          },
          'en': {
            'title-1': 'Leave your contact',
            'title-2': "we'll call back",
            'title1FontSize': 20,
            'title2FontSize': 26
          },
          'currenttext': 'third',
          'titleFontSize': 24
        }
      ]
    }

    history.pushState = function() {
      pushState.apply(history, arguments)
      window.dispatchEvent(new Event('pushstate'))
      window.dispatchEvent(new Event('locationchange'))
    }
    history.replaceState = function() {
      replaceState.apply(history, arguments)
      window.dispatchEvent(new Event('replacestate'))
      window.dispatchEvent(new Event('locationchange'))
    }
    window.addEventListener('popstate', function() {
      window.dispatchEvent(new Event('locationchange'))
    });
    window.addEventListener('locationchange', function() {
      isfirstshowpopup = true
      clearInterval(switchtext)
      clearTimeout(timeout)
      $('.tooltiptext').css("display", "none")
      if (notShowPopupPath.includes(window.location.pathname)) return
      firstShowPopUp()
    })

    function firstShowPopUp() {
      if (!window.setTimeShowPopUp) return // disable popup
      setTimeout(() => {
        if (sessionStorage.getItem("isnotshow") === null) {
          if (isfirstshowpopup) {
            isfirstshowpopup = false
            window.indextext = 0 // initial data
            resetOfficeHours()
            var officehours = window.checkofficehours ? 'hours' : 'nonhours'

            timeout = setTimeout(() => {
              changeTooltipText(tooltipText[officehours])
            }, window.setTimeShowPopUp);
          }
        }
      }, 200);
    }

    function switchText() {
      clearInterval(switchtext)
      clearTimeout(timeout)
      if (sessionStorage.getItem("isnotshow") === null) {
        var officehours = window.checkofficehours ? 'hours' : 'nonhours'
        switchtext = setInterval(() => {
          changeTooltipText(tooltipText[officehours])
        }, window.setTimeSwitchText);
      }
    }

    function changeTooltipText(tooltipText) {
      switchText()

      var lang = window.ischeckth ? 'th' : 'en'

      $('.tooltiptext').show("fast", function() {
        $(".title-text").css("font-size", tooltipText[window.indextext].titleFontSize || 26)
        $("#title-1").css("font-size", tooltipText[window.indextext][lang].title1FontSize)
        $("#title-2").css("font-size", tooltipText[window.indextext][lang].title2FontSize)

        document.getElementById("title-1").innerHTML = tooltipText[window.indextext][lang]['title-1']
        document.getElementById("title-2").innerHTML = tooltipText[window.indextext][lang]['title-2']
        currenttext = tooltipText[window.indextext].currenttext
        window.indextext = (window.indextext + 1) % tooltipText.length
      })
    }

    function CloseToolTip() {
      $('.tooltiptext').css("display", "none")
      isfirstshowpopup = true
      window.indextext = 0
      clearInterval(switchtext)
      clearTimeout(timeout)
      if (isPopupCheck) sessionStorage.setItem('isnotshow', 'true')
      firstShowPopUp()
    }

    function notShowPopup() {
      if (isPopupCheck) {
        $('.check-true').css('opacity', 0.7)
        $('.check-true').css('background-color', 'unset')
        $('#check-path').css('fill', 'white')
      } else {
        $('.check-true').css('opacity', 1)
        $('.check-true').css('background-color', 'white')
        $('#check-path').css('fill', 'red')
      }
      isPopupCheck = !isPopupCheck
    }
  </script>

  <!-- Start of unboxandco Zendesk Widget script -->
  <script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=e72c9848-7d30-4243-8757-6e9b0d8d1664"> </script>
  <!-- End of unboxandco Zendesk Widget script -->

  <script type="text/javascript">
    zE("webWidget", "hide")

    function openWidget() {
      zE("webWidget", "show")
      zE("webWidget", "open")
    }

    zE('webWidget:on', 'close', function() {
      zE('webWidget', 'hide')
    })

    zE('webWidget:on', 'userEvent', function(event) {
      if (event.action === 'Web Widget Minimised') {
        zE('webWidget', 'hide')
      }
    })
  </script>

  <!-- add event check change language to chat & shop and cookies consent (for truestore) -->
  <script>
    function changeChatLanguage(lang) {
      var circleTitle = document.querySelector('.circle > .text-header')
      var chatSubTitle = document.querySelector('.text-header > .expand')

      // cookie consent content
      var cookiesText = document.querySelector('.cookies-text')
      var acceptButton = document.querySelector('#floater-accept-btn')

      // tooltip text
      var notShow = document.querySelector('.not-show-text')
      var tooltiptext_1 = document.querySelector('#title-1')
      var tooltiptext_2 = document.querySelector('#title-2')
      if (lang === 'th') {
        // chat & shop thai text
        circleTitle.innerHTML = `<div class="title-header"><span class='me-1'>แชท</span><svg class='icon-svg' width="100%" height="100%" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55172 15.1578C4.45057 16.3962 4.14713 17.7336 3.38851 19.1701C2.98391 19.9627 3.18621 20.2104 3.9954 19.8141C6.17012 18.7243 7.78851 17.6346 9.05287 16.6438C9.71034 16.7429 10.3678 16.7925 11.0253 16.7925C17.0943 16.7925 22 13.0278 22 8.421C22 3.76468 17.0437 0 10.9747 0C4.90575 0 0 3.76468 0 8.37146C0 11.1454 1.82069 13.6222 4.55172 15.1578Z" fill="white"/><circle cx="11" cy="8" r="1" fill="#E62627"/><circle cx="7" cy="8" r="1" fill="#E62627"/><circle cx="15" cy="8" r="1" fill="#E62627"/></svg><br> <span class="text-header-small">& ช้อป</span></div>`
        chatSubTitle.innerText = 'ทักมา เราช้อปให้'

        // cookies consent thai text
        cookiesText.innerHTML = '<strong>เว็บไซต์นี้ใช้คุกกี้</strong><br>เราต้องการให้คุณได้รับประสบการณ์ที่ดีในการใช้งานเว็บไซต์ เราจึงนำคุกกี้ที่บันทึกการเข้าชม และการใช้งานบนหน้าเว็บไซต์จากเครื่องของคุณมาวิเคราะห์ เพื่อเพิ่มประสิทธิภาพต่างๆ รวมทั้งนำเสนอดีล และคอนเทนต์ที่ตรงใจคุณยิ่งขึ้น'
        acceptButton.innerText = 'ยอมรับ'

        //tooltip thai text
        notShow.innerHTML = 'ไม่ต้องแสดงอีก'
        window.ischeckth = true
        if (window.checkofficehours) {
          if (currenttext === 'first') {
            $(".title-text").css("font-size", 26)
            tooltiptext_1.innerHTML = "มีอะไร"
            tooltiptext_2.innerHTML = "ให้ช่วยมั้ย?"
          } else {
            $(".title-text").css("font-size", 26)
            tooltiptext_1.innerHTML = "พูดคุยกับเรา"
            tooltiptext_2.innerHTML = "ได้ที่นี่"
          }
        } else {
          if (currenttext === 'first') {
            $(".title-text").css("font-size", 26)
            tooltiptext_1.innerHTML = "มีอะไร"
            tooltiptext_2.innerHTML = "ให้ช่วยมั้ย?"
          } else if (currenttext === 'second') {
            $(".title-text").css("font-size", 24)
            tooltiptext_1.innerHTML = "ขณะนี้เป็นเวลา"
            tooltiptext_2.innerHTML = "นอกทำการ"
          } else {
            $(".title-text").css("font-size", 24)
            tooltiptext_1.innerHTML = "ฝากข้อมูลไว้"
            tooltiptext_2.innerHTML = "ให้เราติดต่อกลับ"
          }
        }
      } else {
        circleTitle.innerHTML = `<div class="title-header change-font-size"><span class='me-1'>Chat</span><svg class='icon-svg' width="100%" height="100%" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.55172 15.1578C4.45057 16.3962 4.14713 17.7336 3.38851 19.1701C2.98391 19.9627 3.18621 20.2104 3.9954 19.8141C6.17012 18.7243 7.78851 17.6346 9.05287 16.6438C9.71034 16.7429 10.3678 16.7925 11.0253 16.7925C17.0943 16.7925 22 13.0278 22 8.421C22 3.76468 17.0437 0 10.9747 0C4.90575 0 0 3.76468 0 8.37146C0 11.1454 1.82069 13.6222 4.55172 15.1578Z" fill="white"/><circle cx="11" cy="8" r="1" fill="#E62627"/><circle cx="7" cy="8" r="1" fill="#E62627"/><circle cx="15" cy="8" r="1" fill="#E62627"/></svg><br> <span class="text-header-small">& shop</span></div>`
        chatSubTitle.innerText = 'Chat & shop'

        // cookies consent english text
        cookiesText.innerHTML = '<strong>This website uses cookies</strong><br>To offer you a better experience on our site, we relies on cookies stored on your device for analyzing site usage. Cookies enable you to enjoy certain features like finding deals and content relevant to your interest.'
        acceptButton.innerText = 'Accept'

        //tooltip english text
        notShow.innerHTML = 'Don\'t show again'
        window.ischeckth = false
        if (window.checkofficehours) {
          if (currenttext === 'first') {
            $(".title-text").css("font-size", 26)
            tooltiptext_1.innerHTML = "Do you"
            tooltiptext_2.innerHTML = "need help?"
          } else {
            $(".title-text").css("font-size", 26)
            tooltiptext_1.innerHTML = "Chat with"
            tooltiptext_2.innerHTML = "us here!"
          }
        } else {
          if (currenttext === 'first') {
            $(".title-text").css("font-size", 26)
            tooltiptext_1.innerHTML = "Do you"
            tooltiptext_2.innerHTML = "need help?"
          } else if (currenttext === 'second') {
            $(".title-text").css("font-size", 24)
            tooltiptext_1.innerHTML = "We are offline"
            tooltiptext_2.innerHTML = "at the moment."
          } else {
            $("#title-1").css("font-size", 20)
            $("#title-2").css("font-size", 26)
            tooltiptext_1.innerHTML = "Leave your contact"
            tooltiptext_2.innerHTML = "we'll call back"
          }
        }
      }
    }

    var lang = localStorage.getItem('lang') || 'th'
    changeChatLanguage(lang)

    window.addEventListener('language-changed', () => {
      lang = localStorage.getItem('lang')
      changeChatLanguage(lang)
    })
  </script>
</body>

</html>