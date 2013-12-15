$(document).ready(function(){
	$('#back').hide(0);
	$('#info').hide(0);
	$('#opaque').slideDown('slow');
	$('opaque').animate({opacity:"0,3"})
	$('#opaque').click(function(){
		$(this).slideUp('slow');
		$('#info').show('slow');
		});

	$('#galaxy').click(function(){
		$(this).animate({width: 4096},{"duration":1000});
		$('#back').show('slow');
		$('#galaxy').draggable();
		$('#galaxy').draggable('enable');
	});
	$('#back').click(function(){
		$(this).hide('fast');
		$('#galaxy').draggable("disable");
		$('#galaxy').animate({width: "100%",
							  top:"0px",
							  left:"0px"},{"duration":1000});
	});
	$('#info').click(function(){
		$(this).hide('slow');
		$('#opaque').slideDown('slow');
	});
});
