document.addEventListener('DOMContentLoaded', () => {
	const sliders = document.querySelectorAll('.testimonial-carousel.swiper');

	sliders.forEach((slider) => {
		new Swiper(slider, {
			slidesPerView: 1,
			spaceBetween: 20,
			loop: true,
			pagination: {
				el: slider.querySelector('.swiper-pagination'),
				clickable: true,
			},
			navigation: {
				nextEl: slider.querySelector('.swiper-button-next'),
				prevEl: slider.querySelector('.swiper-button-prev'),
			},
		});
	});
});
