var $ = require('jquery');
var favAPI = require('./favorite-api.js');

// Estado del Fav
$('.icon-heart').on("click", function() {
    var articleId = $(this).parents("article").data("id");

    if ($('#icono-corazon' + articleId).attr('src') == 'src/img/icon-heart.png') {
        favAPI.save(articleId);
        $('#icono-corazon' + articleId).attr('src', 'src/img/icon-heart-ok.png');

    } else {
        favAPI.delete(articleId);
        $('#icono-corazon' + articleId).attr('src', 'src/img/icon-heart.png');
    }
});

module.exports = {
    load: function() {
        var arrayFavs = favAPI.list();
        if (typeof arrayFavs != undefined) {
            var articles = $('.web-article');
            for (i = 0; i < articles.length; i++) {
                for (z = 0; z < arrayFavs.length; z++) {
                    if ($(articles[i]).data("id") == arrayFavs[z]) {
                        console.log('ll');
                        $(articles[i], '.social-block', '#icono-corazon' + i).attr('src', 'src/img/icon-heart.png');
                    }
                }
            }
        }
    }
}