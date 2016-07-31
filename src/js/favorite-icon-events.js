var $ = require('jquery');
var fav, favs = [];

$('.icon-heart').on('click', function(){
	var articleId = $(this).parents(".web-article").data("id");	
	fav = {id: articleId, value:$(this).prop('checked')}
	favs.push(fav);	
	localStorage.setItem("favorites", JSON.stringify(favs));

});