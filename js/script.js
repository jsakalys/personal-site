$(document).ready(function(){

	$(window).on('load resize', function () {
		if (document.documentElement.clientWidth < 767) {
	    	$('.content').height($(this).height()-125 + 'px');
	    	console.log($('.content').height())
		} else {
			$('.content').height($(this).height()-75 + 'px');
		}
	});

	$('.card').flip({
		trigger: 'manual'
	});

	$('.profile-pane.click-button').on('click', function(){
		$('#tabs-1.card').flip('toggle');
	});

	$('.projects-pane.click-button').on('click', function(){
		$('#tabs-2.card').flip('toggle');
	});

	$('.resume-pane.click-button').on('click', function(){
		$('#tabs-3.card').flip('toggle');
	});

	$('.contact-pane.click-button').on('click', function(){
		$('#tabs-4.card').flip('toggle');
	});

});