function showButtonUp(){
	// $(window).height() - высота видимой области в пикселях: number;
	// $(window).scrollTop() - количество пикселей от верха 
	// окна до верха видимой области: number; - изменяется при скролле
	if ($(window).scrollTop() > $(window).height()) {
		$('.up').addClass('active');
	} else {
		$('.up').removeClass('active');
	}
}
$(window).on('scroll', showButtonUp);
showButtonUp();
$('.up').on('click', function() {
	$('html, body').animate({
		scrollTop: 0
	});
});