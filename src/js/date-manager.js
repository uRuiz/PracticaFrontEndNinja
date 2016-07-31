var $ = require('jquery');


function fechaPublicacion(){
	var d = new Date ();
	var diaSemana = new Array ("Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado");
	var fecha = $("time").attr("datetime");
	var resta = (Date.parse(d) - Date.parse(fecha)) / 1000;
	$(".publication-date").html('');
	if (resta < 60) {
		$(".publication-date").append("Publicado hace: ", resta, " segundos");
	} else if ((resta >= 60) && (resta < 3600)) {
			$(".publication-date").append("Publicado hace: ", Math.floor(resta / 60), " minutos");
	} else if ((resta >= 3600) && (resta < 86400 )) {
			$(".publication-date").append("Publicado hace: ", Math.floor(resta / 3600), " horas");
	} else if ((resta >= 86400) && (resta < 604800)) {
		dia = d.getDay();
		diaPublicado = (Math.floor(resta / 86400));
		haceCuanto = dia - Math.abs(diaPublicado);
		$(".publication-date").append("Publicado el: ", diaSemana[diaSemana.length - Math.abs(haceCuanto) - dia]);

	} else {
		$(".publication-date").append(fecha);
	}

}

setInterval(
	function(){
		fechaPublicacion()
	}, 
	1000
);