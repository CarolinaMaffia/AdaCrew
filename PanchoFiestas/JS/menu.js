
$(document).ready(function(){
	$('.hamburger').click(function() {
		$('.hamburger').toggleClass('is-active');
		$('.menuppal').toggleClass('is_active');
		return false;
	});
});