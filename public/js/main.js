var url = "http://proyecto-laravel.com.devel";
 window.addEventListener("load", function(){

	$('.btn-like').css('cursor','pointer');
    $('.btn-dislike').css('cursor','pointer');
    //boton like
	$(document).on("click", ".btn-like", function(e){
		$(this).addClass('btn-dislike').removeClass('btn-like');
        $(this).attr('src', 'img/hearts-red.png');



    });

    //boton dislike
	$(document).on("click", ".btn-dislike", function(e){
		$(this).addClass('btn-like').removeClass('btn-dislike');
		$(this).attr('src', 'img/hearts-black.png');
    });



        // BUSCADOR
    $("#buscador").submit(function(e) {
        $(this).attr("action", url + "/gente/" + $("#buscador #search").val());
    });
});


