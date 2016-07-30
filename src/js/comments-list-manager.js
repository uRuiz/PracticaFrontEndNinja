var $ = require('jquery');
var apiClient = require("./comments-api-client");
var utils = require("./utils");

module.exports = {

	load: function() {

		commentsLoaded = false;
		// Petición AJAX para cargar la lista de comentarios
		$(window).scroll(function(){
			if (($(window).scrollTop() > $(".comments").offset().top + $(".comments").outerHeight() - $(window).height()) && (!commentsLoaded)){
				apiClient.list(function(response) {
					$('.comments-list').html('');
					for (var i in response) {
						var comment = response[i];

						var nombre = comment.nombre || "";
						var apellido = comment.apellido || "";
						var email = comment.email || "";
						var comentario = comment.comentario || "";

						var html = '<div class="user-full-name"> ' + utils.escapeHTML(nombre) + ' ' + utils.escapeHTML(apellido) + '</div">';
		                html += '<div class="user-email"> ' + utils.escapeHTML(email) + '</div">';
		                html += '<div class="comentario">' + utils.escapeHTML(comentario) + '</div>';
		                html += '</article>';
		                $('.comments-list').append(html);
					}
				}, function(response){
					console.error("ERROR", response);
				});
				commentsLoaded = true;
			}

		});

	}
}

