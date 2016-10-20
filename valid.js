
		$(document).ready (function () {
			$("#done").click (function () {
				$('#messageShow').hide ();
				var name = $("#name").val ();
				var dr = $("#dr").val ();
				var tel = $("#tel").val ();
				var email = $("#email").val ();
				var text = $("text").val ();
				var fail = "";
				if (name.length < 3) fail = "Имя не меньше 3 символов";
				else if (email.split ('@').length - 1 == 0 || email.split ('.').length - 1 == 0)
					fail = "Вы ввели некоректный  email";
				else if (tel.length < 9)
					fail = "Номер телефона не менее 9 цифр";
				if (fail !="") {
					$('#messageShow').html (fail + "<div class='clear'><br></div>");
					$('#messageShow').show ();
					return false;
				}
				
			});	
		});
