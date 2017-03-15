var $ = require('jquery');

module.exports = {
    save: function(favArtId) {
        if (localStorage.getItem("favoritos") == null) {
            localStorage.setItem("favoritos", favArtId);
        } else {
            var totalFav = localStorage.getItem("favoritos");
            totalFav += ',' + favArtId;
            localStorage.setItem("favoritos", totalFav);
        }
    },

    delete: function(favArtId) {
        if (localStorage.getItem("favoritos") != null) {
            var totalFav = localStorage.getItem("favoritos");
            arrayFav = totalFav.split(',');

            arrayFav = $.grep(arrayFav, function(value) {
                return value != favArtId;
            });

            totalFav = arrayFav.toString();
            localStorage.setItem("favoritos", totalFav);
            if (totalFav == "") {
                localStorage.removeItem("favoritos");
            }
        }
    },
    list: function() {
        if (localStorage.getItem("favoritos") != null) {
            var totalFav = localStorage.getItem("favoritos");
            arrayFav = totalFav.split(',');

            return arrayFav;
        }
    }
}