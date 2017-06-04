$('.cahee__menu').on('click', 'a', function(event){
	event.preventDefault();
	var link = $(this).attr('href');
	var distanse = $(link).offset().top;
	$('html, body').animate({
		scrollTop: distanse
	}, 500);
});

// анимация на прокрутку менюшки!!!


// $(document).ready(function(){
// 	$('.cahee-info-slide4:has(button)').css('background', 'red' );
// });

//ghbvth: если в даной секцыи есть наличие 'button' , сделать беграунд ред

$(window).scroll(function(){
	var dist = $('#About_Us').offset().top;
	if ($(window).scrollTop() >= dist){
		$('.cahee-navi').css('background', 'rgba(255, 255, 255, 0.7)');

	}else {
		$('.cahee-navi').css('background', 'transparent');
	}
});


$(window).scroll(function(){
	var dista = $('.cahee-slide6-container').offset().top;
	if ($(window).scrollTop() >= dista){
		$('.cahee-slide6-img').css('display', 'block');

	}else {
		$('.cahee-slide6-img').css('display', 'none');
	}
});