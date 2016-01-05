$(document).ready(function(){

    // $('#tabs').tabs().addClass('ui-tabs-vertical ui-helper-clearfix');
    // $('#tabs li').removeClass('ui-corner-top').addClass('ui-corner-left');

	$('.card').flip({
		trigger: 'manual'
	});

	$('#view-profile').on('click', function(){
		$('.card').flip('toggle');
	});

});