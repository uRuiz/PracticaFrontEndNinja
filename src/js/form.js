var $ = require('jquery');
var apiClient = require('./comments-api-client');
var commentsListManager = require('./comments-list-manager');
var inputs = $(".new-comment-form input");
var areatext = $(".new-comment-form textarea");
var newCommentsFormButton = $('.new-comment-form button');


// beforeSend
function setLoading(){
	$(inputs).attr("disabled", true);
	areatext.attr("disabled", true);
	newCommentsFormButton.text("Saving comment...").attr("disabled", true);
}

function unsetLoading() {
	$(inputs).attr("disabled", false);
	areatext.attr("disabled", false);
	newCommentsFormButton.text("Save comment").attr("disabled", false);
}


$('.new-comment-form').on('submit', function(){
	
	for (var i = 0; i < inputs.length; i++) {
		var input = inputs[i];
		if (input.checkValidity() == false) {
            alert(input.validationMessage);
            input.focus();
            return false;
        }		
	}

	if(areatext.val().split(" ").length > 10) {
		alert("El número de palabras no puede ser mayor de 120");
		areatext.focus();
		return false;
	}

	// comentario que quiero crear
	var comment = {
		nombre: $('#nombre').val(),
		apellido: $('#apellidos').val(),
		email: $('#email').val(),
		comentario: $('#comentario').val()
	};

	setLoading(); // deshabilito el formulario

	apiClient.save(comment, function (response) {
		$("form")[0].reset();
		$("#nombre").focus();
		commentsListManager.load();
		unsetLoading();
		}, function() {
			console.error("ERROR", response);
			unsetLoading();
		}
	);

	return false;
});