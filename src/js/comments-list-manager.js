var $ = require('jquery');
var apiClient = require("./comments-api-client");
var utils = require("./utils");

module.exports = {

	load: function() {
		$(document).ready(function(){
			apiClient.list(function(response) {
				$('.comments-count span').html('');				
				$('.comments-count span').append(response.length);
			})
		});
		commentsLoaded = false;
		// Petición AJAX para cargar la lista de comentarios
		$(window).scroll(function(){
			if (($(window).scrollTop() > $(".social-block").offset().top + $(".social-block").outerHeight() - $(window).height()) && (!commentsLoaded)){
				apiClient.list(function(response) {
					$('.comments-list').html('');
					//$('.comments-count span').html('');
					for (var i in response) {
						var comment = response[i];

						var nombre = comment.nombre || "";
						var apellido = comment.apellido || "";
						var email = comment.email || "";
						var comentario = comment.comentario || "";

						var html = '<div class="user-comment">';
						html += '<div class="user-information">';
						html += '<div class="user-full-name"> ' + utils.escapeHTML(nombre) + ' ' + utils.escapeHTML(apellido) + '</div>';
		                html += '<div class="user-email"> ' + utils.escapeHTML(email) + '</div></div>';
		                html += '<div class="comentario">' + utils.escapeHTML(comentario) + '</div>';
		                html += '</div>';
		                $('.comments-list').append(html);
					}
					//$('.comments-count span').append(parseInt(i) + 1);
				}, function(response){
					console.error("ERROR", response);
				}); 
				commentsLoaded = true;
			}

		});

	}
}

