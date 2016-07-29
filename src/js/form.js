var $ = require('jquery');

$('.new-comment-form button').on('submit', function(){
	
	var inputs = $(".new-comment-form input");
	for (var i = 0; i < inputs.length; i++) {
		var input = inputs[i];
		if (input.checkValidity() == false) {
            alert(input.validationMessage);
            input.focus();
            return false;
        }		
	}

	// comentario que quiero crear
	var comment = {
		nombre: $('#nombre').val(),
		apellido: $('#apellidos').val(),
		email: $('#email').val(),
		comentario: $('#comentario').val()
	};

	// petición AJAX para guardar la información en el servidor
	$.ajax({
		url: "/api/comments/",
		method: "post",
		data: comment,
		beforeSend: function(){
			$(inputs).attr("disabled", true);
			$("textarea").attr("disabled", true);
			$('.new-comment-form button').text("Saving comment...").attr("disabled", true);
		},
		success: function(response) {
			console.log("SUCCESS", response);
			$("form")[0].reset();
			$("#nombre").focus();
		},
		error: function() {
			console.error("ERROR", response);
		},
		complete: function() {
			$(inputs).attr("disabled", false);
			$("textarea").attr("disabled", false);
			$('.new-comment-form button').text("Save comment").attr("disabled", false);
		}
	});

	return false;
});