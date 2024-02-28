
import Swiper from 'swiper';
import 'swiper/css';




document.addEventListener("DOMContentLoaded", function() {
	var swiper = new Swiper('.swiper', {
	  // Параметры Swiper
	  loop: true,
	  pagination: {
		el: '.swiper-pagination',
		clickable: true,
	  },
	  navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	  },
	  // Автопрокрутка
	  autoplay: {
		delay: 5000,
	  },
	});
  });
  
  