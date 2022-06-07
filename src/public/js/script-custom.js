(function($) {
    $.fn.inputFilter = function(inputFilter) {
        return this.on("input keydown keyup mousedown mouseup select contextmenu drop", function() {
            if (inputFilter(this.value)) {
                this.oldValue = this.value;
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd;
            } else if (this.hasOwnProperty("oldValue")) {
                this.value = this.oldValue;
                this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            } else {
                this.value = "";
            }
        });
    };
}(jQuery));

$("#modal-submit").click(function () {
	validate_data();
});


function curldata (first_name, last_name, service_number, interest , token) {

	var sendInfo = {
		first_name: first_name,
		last_name: last_name,
        service_number: service_number,
        interest: interest,
		token: token
      };
	  let tmh_path = '/truemoveh/site';
	  var url = window.location.href;
	  var arr = url.split("/");
	  var result = arr[0] + "//" + arr[2];
	  	if(result == 'https://store.truecorp.co.th'){
			result = 'https://www.true.th';
		  }
	  var url_addcontract = result+tmh_path+"/api/5gcoupon/addcontract";

	  $.ajax({
		type: "POST",
		url: url_addcontract,
		cache: false,
		data: sendInfo,
		dataType: "json",
		contentType: "application/json; charset=utf-8",
		success: function (respone) {
				if(respone){
					$("#fname").val('');
					$("#lname").val('');
					$("#phone_number").val('');
					$("#select-product").val('');
				}
		},
		data: JSON.stringify(sendInfo)
   });

}

function validate_data () {
	const first_name = $('#fname').val();
	const last_name = $('#lname').val();
	const service_number = $('#phone_number').val();
	const interest = $('#select-product').val();
	var check_validate = true;
	if(!first_name){
		check_validate = false;
		$('#error_fname').html('กรุณากรอกชื่อ');
		$('#error_fname').addClass('input-invalid');
		$("#fname").focus();
		return false;
	}else{
		$('#error_fname').empty();
		$('#error_fname').removeClass('input-invalid');
	}

	if(!last_name){
		check_validate = false;
		$('#error_lname').html('กรุณากรอกนามสกุล');
		$('#error_lname').addClass('input-invalid');
		$("#lname").focus();
		return false;
	}else{
		$('#error_lname').empty();
		$('#error_lname').removeClass('input-invalid');
	}

	if(!service_number){
		check_validate = false;
		$('#error_phone_number').html('กรุณากรอกเบอร์โทร');
		$('#error_phone_number').addClass('input-invalid');
		$("#phone_number").focus();
		return false;
	}else{
		$('#error_phone_number').empty();
		$('#error_phone_number').removeClass('input-invalid');
	}

	if(service_number && service_number.length != 10){
		check_validate = false;
		$('#error_phone_number').empty();
		$('#error_phone_number').html('กรุณากรอกเบอร์โทรให้ถูกต้อง');
		$('#error_phone_number').addClass('input-invalid');
		$("#phone_number").focus();
		return false;
	}else{
		$('#error_phone_number').empty();
		$('#error_phone_number').removeClass('input-invalid');
	}

	if(!interest){
		check_validate = false;
		$('#error_product').html('กรุณาเลือกสินค้าที่ท่านสนใจ');
		$('#error_product').addClass('input-invalid');
		$("#select-product").focus();
		return false;
	}else{
		$('#error_product').empty();
		$('#error_product').removeClass('input-invalid');
	}

	if(check_validate === true){
		$('#callback').modal('hide');
		$('#submit-form').modal('show');
		checkCaptcha(first_name, last_name, service_number, interest);
	}

}

$(".input-string").inputFilter(function(value) {
    return /^[a-zA-Zก-๏\s]*$/.test(value);     // สำหรับชื่อภาษาอังกฤษ
});

$(".input-numric").inputFilter(function(value) {
	return /^\d*$/.test(value);    // Allow digits only, using a RegExp
});

function checkCaptcha(first_name, last_name, service_number, interest){
	grecaptcha.ready(function() {
		grecaptcha.execute('6LfI2lEcAAAAACpayvUVq0s5TmnDROtA__8VD6QS', {action: 'hompage'}).then(function(token) {
				var sendInfo = {
						google_response: token,
				};
				let tmh_path = '/truemoveh/site';
				var url = window.location.href;
				var arr = url.split("/");
				var result = arr[0] + "//" + arr[2];
				if(result == 'https://store.truecorp.co.th'){
					result = 'https://www.true.th';
				  }
				var url_confirm = result+tmh_path+"/api/5gcoupon/confirmCaptcha";
					$.ajax({
						type: "POST",
						url: url_confirm,
						cache: false,
						data: sendInfo,
						dataType: "json",
						contentType: "application/json; charset=utf-8",
						success: function (respone) {
							if(respone.code == 200){
								curldata(first_name, last_name, service_number, interest , respone.token);
							}else{
								$('#callback').modal('hide');
								$('#submit-form').modal('show');
								$("#fname").val('');
								$("#lname").val('');
								$("#phone_number").val('');
								$("#select-product").val('');
							}
						},
						data: JSON.stringify(sendInfo)
				});
			});
		});
}

$("#chat-shop-callmeback").click(function () {
	$('#callback').modal('show');
});
