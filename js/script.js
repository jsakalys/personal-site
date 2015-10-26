$('.card').flip({
	trigger: 'manual'
});
$('#view-profile').on('click', function(){
	$('.card').flip('toggle');
})