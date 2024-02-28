
import Swiper from 'swiper';
import 'swiper/css';


document.addEventListener("DOMContentLoaded", function () {
	const swiper = new Swiper('.swiper-container', { // Убедитесь, что здесь используется правильный селектор
	  // Optional parameters
	  direction: 'vertical',
	  loop: true,
  
	  // If we need pagination
	  pagination: {
		el: '.swiper-pagination',
	  },
  
	  // Navigation arrows
	  navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	  },
  
	  // And if we need scrollbar
	  scrollbar: {
		el: '.swiper-scrollbar',
	  },
	});
  }); // Убрана лишняя закрывающая скобка и точка с запятой
  





// document.addEventListener("DOMContentLoaded", function() {
// 	console.log(123)
// 	var swiper = new Swiper('.swiper-container', {
// 	  // Параметры Swiper
// 	  loop: true,
// 	  pagination: {
// 		el: '.swiper-pagination',
// 		clickable: true,
// 	  },
// 	  navigation: {
// 		nextEl: '.swiper-button-next',
// 		prevEl: '.swiper-button-prev',
// 	  },
// 	  // Автопрокрутка
// 	  autoplay: {
// 		delay: 5000,
// 	  },
// 	});
//   });

