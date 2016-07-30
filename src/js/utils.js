var $ = require('jquery');

module.exports = {
	escapeHTML: function (str) {
		return $('<div>').text(str).html();
	}	
}

var d = new Date ();

var fecha = $("time").attr("datetime");

var resta = (Date.parse(d) - Date.parse(fecha)) / 1000;

if (resta < 60) {
	$(".publication-date").append("Publicado hace: ", resta, " segundos");
} else if ((resta >= 60) && (resta < 3600)) {
		$(".publication-date").append("Publicado hace: ", Math.floor(resta / 60), " minutos");
} else if ((resta >= 3600) && (resta < 86400 )) {
		$(".publication-date").append("Publicado hace: ", Math.floor(resta / 3600), " horas");
} else if ((resta >= 86400) && (resta < 604800)) {
		$(".publication-date").append("Publicado hace: ", Math.floor(resta / 86400), " días");
} else {
	$(".publication-date").append(fecha);
}

console.log(d.getDay());



