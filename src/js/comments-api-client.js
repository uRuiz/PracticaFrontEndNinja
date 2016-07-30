var $ = require('jquery');

module.exports = {
	
	save: function(comment, successCallback, errorCallback) {
		
		var formData = new FormData();
		formData.append("nombre", comment.nombre);
		formData.append("apellido", comment.apellido);
		formData.append("email", comment.email);
		formData.append("comentario", comment.comentario);

		$.ajax({
			url: "/api/comments/",
			method: "post",
			data: formData,
			success: successCallback,
			error: errorCallback
		});
	},

	list: function(successCallback, errorCallback) {
        $.ajax({
            url: "/api/comments/?_order=id",
            method: "get",
            success: successCallback,
            error: errorCallback
        });
    }

};