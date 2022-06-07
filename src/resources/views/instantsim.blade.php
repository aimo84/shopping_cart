<html lang="th" data-type="postpaid">
  <head>
    <title>TrueMoveH Instant SIM</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/png" href="/favicon.png">

    <style>
      @font-face {
        font-family: 'True';
        src: url('/fonts/TrueMedium/true_medium-webfont.eot');
        src: url('/fonts/TrueMedium/true_medium-webfont.eot?#iefix') format('embedded-opentype'),
          url('/fonts/TrueMedium/true_medium-webfont.woff2') format('woff2'),
          url('/fonts/TrueMedium/true_medium-webfont.woff') format('woff'),
          url('/fonts/TrueMedium/true_medium-webfont.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
      }


      @font-face {
        font-family: 'True';
        src: url('/fonts/TrueBold/true_bold-webfont.eot');
        src: url('/fonts/TrueBold/true_bold-webfont.eot?#iefix') format('embedded-opentype'),
          url('/fonts/TrueBold/true_bold-webfont.woff2') format('woff2'),
          url('/fonts/TrueBold/true_bold-webfont.woff') format('woff'),
          url('/fonts/TrueBold/true_bold-webfont.ttf') format('truetype');
        font-weight: bold;
        font-style: normal;
      }

      * {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
      }

      html {
        background-color: #fff;
        font-family: 'True', sans-serif;
        font-size: 1.5em;
        color: #58595B;
      }

      body {
        margin: auto;
        max-width: 680px;
        text-align: center;
        line-height: 20px;
      }

      header {
        height: 60px;
        display: -ms-grid;
        display: grid;
        place-items: center;
        -ms-grid-columns: 1fr auto 1fr;
        grid-template-columns: 1fr auto 1fr;
      }

      header img {
        height: 24px;
      }

      header .lang {
        justify-self: flex-end;
        padding-right: 8px;
      }

      header .lang .lang-btn {
        display: -ms-grid;
        display: grid;
        -ms-grid-columns: auto 8px auto;
        grid-template-columns: auto auto;
        grid-gap: 8px;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        color: #DA1E32;
        font-size: 22px;
        font-weight: 600;
        padding: 6px;
        cursor: pointer;
      }

      header .lang .lang-btn img {
        height: 18px;
      }

      .loading {
        padding: 16px;
        position: absolute;
        width: 100%;
        max-width: 680px;
        min-height: 50vh;
        display: -ms-grid;
        display: grid;
        place-items: center;
      }

      .loading .loading-icon {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        border: 4px solid #D0021B;
        border-left: 4px solid transparent;
        -webkit-animation: loading 1s linear infinite;
        animation: loading 1s linear infinite;
      }

      .dialog {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 3;
      }

      .dialog .backdrop {
        width: 100%;
        height: 100%;
        background-color: #0000008a;
      }

      .dialog .dialog-content {
        background: #fff;
        position: fixed;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        padding: 36px 24px;
        border-radius: 8px;
        max-width: 400px;
        width: 80%;
      }

      .dialog .dialog-content button {
        margin-top: 24px;
      }

      .tabs {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: distribute;
        justify-content: space-around;
        padding: 16px 0;
        font-size: 22px;
      }

      .tabs .tab {
        cursor: pointer;
      }

      .tabs .tab[active] {
        font-weight: bold;
      }

      .page {
        padding-bottom: 24px;
      }

      .instruction {
        padding: 12px 16px;
        background-color: #fff;
        position: relative;
        z-index: 2;
        border-bottom-left-radius: 16px;
        border-bottom-right-radius: 16px;
      }

      .instruction {
        width: 100%;
      }

      .instruction .scan {
        margin-top: 12px;
        max-width: 160px;
      }

      .instruction .sim {
        margin-bottom: 36px;
        max-width: 240px;
      }

      .video {
        position: relative;
        margin-top: -16px;
      }

      .video .drawingBuffer {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
      }

      .video video {
        width: 100%;
        background-color: #fff;
      }

      input,
      button {
        font-size: 24px;
        max-width: 360px;
        width: 100%;
        border-radius: 8px;
        min-height: 48px;
        border: none;
        text-align: center;
        padding: 0 16px;
        font-family: 'True', sans-serif;
      }

      button {
        font-weight: bold;
        color: #fff;
        cursor: pointer;
        background-color: #D0021B;
        margin-top: 16px;
      }

      button.switch-camera {
        background-color: #6a6a6a;
      }

      button[disabled] {
        background-color: #DBDBDB;
        cursor: default;
        pointer-events: none;
      }

      input {
        margin-top: 16px;
        border: 1px solid #DBDBDB;
      }

      @-webkit-keyframes loading {
        from {
          -webkit-transform: rotate(0);
          transform: rotate(0);
        }

        to {
          -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }

      @keyframes loading {
        from {
          -webkit-transform: rotate(0);
          transform: rotate(0);
        }

        to {
          -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }

      html[lang="en"] *[data-lang="th"],
      html[lang="th"] *[data-lang="en"],
      html[data-type="postpaid"] *[data-type="prepaid"],
      html[data-type="prepaid"] *[data-type="postpaid"],
      *[hidden] {
        display: none
      }
    </style>

    <script>
      (function (w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
        var f = d.getElementsByTagName(s)[0], j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
        j.async = true;
        j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
        f.parentNode.insertBefore(j, f);
      })(window, document, 'script', 'dataLayer', '<?php echo env('GA_CODE_2', 'GTM-T7P7P7R'); ?>');
      (function (w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
        var f = d.getElementsByTagName(s)[0], j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
        j.async = true;
        j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
        f.parentNode.insertBefore(j, f);
      })(window, document, 'script', 'dataLayer', '<?php echo env('GA_CODE', 'GTM-KKHHM7B'); ?>');
    </script>
  </head>

  <body>
    <!-- GA Code -->
    <noscript>
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=<?php echo env('GA_CODE_2', 'GTM-T7P7P7R'); ?>"
        height="0" width="0" style="display:none;visibility:hidden"
      ></iframe>
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=<?php echo env('GA_CODE', 'GTM-KKHHM7B'); ?>"
        height="0" width="0" style="display:none;visibility:hidden"
      ></iframe>
    </noscript>
    <!-- end of GA Code -->
    <header>
      <div></div>
      <img src="/images/instantsim/logo.png" />
      <div class="lang">
        <div class="lang-btn" data-lang="th" onclick="changeLanguage('en')">
          <img src="/images/instantsim/lang-th.png" />
          <span>TH</span>
        </div>
        <div class="lang-btn" data-lang="en" onclick="changeLanguage('th')">
          <img src="/images/instantsim/lang-en.png" />
          <span>EN</span>
        </div>
      </div>
    </header>
    <div class="dialog desktop" hidden>
      <div class="backdrop"></div>
      <div class="dialog-content">
        <div>
          <span data-lang="th">ขออภัย<br />โปรดสแกนคิวอาร์โค้ด<br />ผ่านโทรศัพท์มือถือ</span>
          <span data-lang="en">Please use mobile phone to scan barcode.</span>
        </div>
        <a href="https://truemoveh.truecorp.co.th/">
          <button>
            <span data-lang="th">ตกลง</span>
            <span data-lang="en">OK</span>
          </button>
        </a>
      </div>
    </div>
    <div class="dialog error" hidden>
      <div class="backdrop"></div>
      <div class="dialog-content">
        <div class="text"></div>
        <button id="invalid_barcode" onclick="closeErrorDialog()">
          <span data-lang="th">ตกลง</span>
          <span data-lang="en">OK</span>
        </button>
      </div>
    </div>
    <div class="loading" hidden>
      <div class="loading-icon"></div>
    </div>
    <content class="content">
      <div class="tabs">
        <div class="tab" id="scan" onclick="changePage('scan')" active>
          <span data-lang="th">สแกนบาร์โค้ด</span>
          <span data-lang="en">Scan barcode</span>
        </div>
        <div class="tab" id="manual" onclick="changePage('manual')">
          <span data-lang="th">กรอกตัวเลข</span>
          <span data-lang="en">Fill in number</span>
        </div>
      </div>
      <div class="page" id="scan">
        <div class="instruction">
          <div>
            <span data-lang="th" data-type="postpaid">สแกนแถบบาร์โค้ด เพื่อเลือกเบอร์ และค่าบริการรายเดือนที่ต้องการ</span>
            <span data-lang="th" data-type="prepaid">สแกนแถบบาร์โค้ด เพื่อเลือกเบอร์ และบริการที่ต้องการ</span>
            <span data-lang="en">Scan barcode to select mobile number and price plan.</span>
          </div>
          <img class="scan" src="/images/instantsim/scan.png" />
        </div>
        <div class="video"></div>
      </div>
      <div class="page" id="manual" hidden>
        <div class="instruction">
          <img class="sim" src="/images/instantsim/sim.jpg" />
          <div>
            <span data-lang="th"><b>กรุณากรอกตัวเลขใต้แถบบาร์โค้ด (18หลัก)</b></span>
            <span data-lang="en"><b>Please make sure you enter the 18-digit number under the barcode.</b></span>
          </div>
          <input
            class="sim-serial-input"
            type="text"
            inputmode="numeric"
            placeholder="xxxx xxxx xxxx  xxxx xx"
            oninput="simSerialInputChanged(this)"
          />
          <button class="submit-sim-serial" id="check_serial_number" primary disabled onclick="submitSimSerial()">
            <span data-lang="th" id="submit_serial"><b>ดำเนินการต่อ</b></span>
            <span data-lang="en" id="submit_serial"><b>Continue</b></span>
          </button>
        </div>
      </div>
    </content>
  </body>

  <script type="text/javascript" src="/js/quagga.min.js"></script>
  <script>
    const trackAnalytics = (action, label) => {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'scanInstantSim',
        event_category: 'instant_sim',    
        event_action: action,
        event_label: label,
      });
    }

    const checkUA = () => {
      const userAgent = navigator.userAgent || navigator.vendor
      if (/android/i.test(userAgent)) return true
      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) return true
    }

    const changeLanguage = (lang) => {
      document.documentElement.setAttribute('lang', lang)
    }

    const changePage = (page) => {
      if (document.querySelector(`.tabs .tab#${page}`).getAttribute('active') === '') return
      const tabs = document.querySelectorAll('.tabs .tab')
      tabs.forEach((tab) => {
        if (tab.id === page) {
          tab.setAttribute('active', '')
          document.querySelector(`.page#${tab.id}`).removeAttribute('hidden')
        } else {
          tab.removeAttribute('active')
          document.querySelector(`.page#${tab.id}`).setAttribute('hidden', '')
        }
      })
      if (page === 'manual') {
        Quagga.offDetected()
        Quagga.stop()
      } else {
        load()
      }
    }

    const init = () => {
      const isMobile = checkUA()
      if (!isMobile) return document.querySelector('.dialog.desktop').removeAttribute('hidden')
      const searchParams = new URLSearchParams(location.search)
      if (searchParams.get('type') === 'prepaid') document.documentElement.setAttribute('data-type', 'prepaid')
      if (searchParams.get('lang') === 'en') document.documentElement.setAttribute('lang', 'en')
      load()
    }

    const closeErrorDialog = () => {
      document.querySelector('.dialog.error').setAttribute('hidden', '')
      if (document.querySelector('.tabs .tab#scan').getAttribute('active') === '') load()
    }

    const hideCameraPage = () => {
      document.querySelector('.tabs .tab#scan').setAttribute('hidden', '')
      changePage('manual')
    }

    const load = async () => {
      try {
        const config = {
          inputStream: {
            name: 'Live',
            type: 'LiveStream',
            constraints: {
              facingMode: 'environment'
            },
            target: document.querySelector('.video')
          },
          decoder: {
            readers: ['code_128_reader']
          }
        }
        Quagga.init(config, (err) => {
          if (err) return hideCameraPage()
          Quagga.start()
          trackAnalytics('scan_barcode', '')
          Quagga.onDetected((e) => {
            const code = e.codeResult.code
            const validCode = code && /^[0-9]{18}$/.test(code)
            trackAnalytics('scan_barcode_result', validCode ? 'success' : 'fail')
            if (validCode) {
              Quagga.offDetected()
              Quagga.stop()
              verifySim(code, 'scan')
            }
          })
        })
      } catch (e) {
        hideCameraPage()
      }
    }

    const simSerialInputChanged = (e) => {
      const submitSimSerialBtn = document.querySelector('button.submit-sim-serial')
      if (/^[0-9]{18}$/.test(e.value)) {
        submitSimSerialBtn.removeAttribute('disabled')
      } else {
        submitSimSerialBtn.setAttribute('disabled', true)
      }
    }

    const submitSimSerial = () => {
      const e = document.querySelector('.sim-serial-input').value
      verifySim(e, 'input')
    }

    const verifySim = (e, method) => {
      const searchParams = new URLSearchParams(location.search)
      let type = searchParams.get('type') === 'prepaid' ? 'prepaid' : 'postpaid'
      const token = searchParams.get('token')
      document.querySelector('.loading').removeAttribute('hidden')
      document.querySelector('.content').setAttribute('hidden', '')
      const req = new XMLHttpRequest()
      req.addEventListener('load', () => {
        try {
          if (req.status !== 200) throw new Error()
          const res = JSON.parse(req.response)
          if (!res.is_pass) throw new Error()
          trackAnalytics('check_number_valid', 'valid_number')
          const lang = document.documentElement.getAttribute('lang')
          let params = `nas_code=${res.nascode}&correlation_id=${res.correlation_id}&type=${type}&lang=${lang}`
          if (token) {
            params += `&token=${token}`
          }

          localStorage.removeItem("saleId");

          if(res.is_enabled_saleId === 'true') {
            window.location.href = `/online-store/saleIdForm/${res.product_id}?${params}`
          } else {
            window.location.href = `/online-store/instantsim/${res.product_id}?${params}`
          }
        } catch (e) {
          trackAnalytics('check_number_valid', 'invalid_number')
          const res = JSON.parse(req.response)
          const lang = document.documentElement.getAttribute('lang')
          document.querySelector('.loading').setAttribute('hidden', '')
          document.querySelector('.content').removeAttribute('hidden')
          document.querySelector('.dialog.error .text').textContent = res.message[lang]
          document.querySelector('.dialog.error').removeAttribute('hidden')
        }
      })
      req.addEventListener('error', () => {
        trackAnalytics('check_number_valid', 'invalid_number')
        document.querySelector('.loading').setAttribute('hidden', '')
        document.querySelector('.content').removeAttribute('hidden')
        document.querySelector('.dialog.error .text').textContent = 'Something went wrong. Please try again.'
        document.querySelector('.dialog.error').removeAttribute('hidden')
      })

      req.open('POST', '/api/true/sim-activation/verify')
      req.setRequestHeader('Content-Type', 'application/json')
      req.setRequestHeader('tmvh-token', token)
      req.send(JSON.stringify({
        sim_serial: e,
        sim_type: type,
        method
      }))
    }

    window.addEventListener('load', init)
  </script>
</html>