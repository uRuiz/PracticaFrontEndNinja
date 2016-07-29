var $ = require('jquery');

$('.new-comment-form button').on('click', function(){
	console.log('Hola Mundo');

	// comentario que quiero crear

	var comment = {
		nombre: "Urko",
		apellido: "Ruiz",
		email: "esto@es.prueba",
		comentario: "Esto es una prueba de comentario"
	};

	// petición AJAX para guardar la información en el servidor
	$.ajax({
		url: "/api/comments/",
		method: "post",
		data: comment,
		succes: function() {
			console.log("SUCCESS", arguments);
		},
		error: function() {
			console.error("ERROR", arguments);
		}
	});

	return false;
});