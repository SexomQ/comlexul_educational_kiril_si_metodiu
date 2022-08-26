//Glide.js

// new Glide('.glide1', {
//   type: 'carousel',
//   startAt: 0,
//   perView: 1,
//   animationDuration: 800,
//   autoplay: 4000
// }).mount()

// new Glide('.glide2', {
//   type: 'carousel',
//   startAt: 0,
//   autoplay: 3000,
//   perView: 5,
//   peek: {
//   	before: 70,
//   	after: 70
//   },
//   breakpoints: {
//   	992: {
//   		perView: 3
//   	},
//   	768: {
//   		perView: 3,
//   		 peek: {
// 		  	before: 30,
// 		  	after: 30
//   		}
//   	},
//   	576: {
//   		perView: 1,
//   		peek: {
// 		  	before: 80,
// 		  	after: 80
//   		}
//   	}
//   }
// }).mount()

new Glide('.glide3', {
  type: 'carousel',
  startAt: 0,
  perView: 3,
  animationDuration: 800,
  autoplay: 4000,
  gap: 30,
  breakpoints: {
  	768: {
  		perView: 2
  	},
  	576: {
  		perView: 1
  	}
  }
}).mount()