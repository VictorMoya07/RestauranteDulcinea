$(document).ready(function(){
	
//Efecto Menu
	$(".menu a").each(function(index , elemento){
		$(this).css({
			"top":"-200px"
		});

		$(this).animate({
			top:'0'
		},2000 + (index*500));// Se aplica en cada uno de los elementos mientra se recorren los elementos.
	});


//Efecto Header

if($(window).width()>800){
	$("header .textos").css({
		opacity:0,
		marginTop:0
	});

	$("header .textos").animate({
		opacity:1,
		marginTop:"-52px"
	},1500)
}	

// Scroll Elementos Menu

var acercaDe= $("#acerca-de").offset().top,
	menucomida= $("#platillos").offset().top,
	galeria= $("#galeria").offset().top,
	ubicacion= $("#ubicacion").offset().top;

$("#btn-acerca").on("click", function(e){
	e.preventDefault(e);
	$("html , body").animate({
		scrollTop:500
	},500);
})


$("#btn-menu").on("click", function(e){
	e.preventDefault(e);
	$("html , body").animate({
		scrollTop:menucomida -40
	},500);
});

$("#btn-galeria").on("click", function(e){
	e.preventDefault(e);
	$("html , body").animate({
		scrollTop:galeria-180
	},500);
});

$("#btn-ubicacion").on("click", function(e){
	e.preventDefault(e);
	$("html , body").animate({
		scrollTop:ubicacion+15
	},500);
});

});