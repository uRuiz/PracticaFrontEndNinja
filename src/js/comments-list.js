var $ = require('jquery');
var loadComments = false;
// Petición AJAX para cargar la lista de comentarios
$(window).scroll(function(){
	if ($(window).scrollTop() == $(document).height() - $(window).height() && !loadComments){
		$.ajax({
			url: "/api/comments/",
			success : function(response) {
					for (var i in response) {
						var comment = response[i];
						var html = '<article class="user-comment" data-id="' + comment.id + '">';
		                html += '<div class="user-full-name"> ' + comment.nombre + ' ' + comment.apellido + '</div">';
		                html += '<div class="user-email"> ' + comment.email + '</div">';
		                html += '<div class="comentario">' + comment.comentario + '</div>';
		                html += '</article>';
		                $('.comments-list').append(html);
					}
					loadComments = true;
			},
			error: function (response) {

			}
		});
	}

});
