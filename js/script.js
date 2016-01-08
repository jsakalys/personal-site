$(document).ready(function(){

	$('.card').flip({
		trigger: 'manual'
	});

	$('.profile-pane.click-button').on('click', function(){
		$('#tabs-1.card').flip('toggle');
	});

	$('.contact-pane.click-button').on('click', function(){
		$('#tabs-4.card').flip('toggle');
	});

});