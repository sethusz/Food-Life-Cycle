$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
		center: true,
		stagePadding: 10,
		loop:true,
		margin: 15,
        nav: true,
		navText:[
			'<img src="./img/arrow-left-solid.svg" alt="arrow-left">',
            '<img src="./img/arrow-right-solid.svg" alt="arrow-right">'
	],

		// autoplay: true,
		// autoplaySpeed: 3500,
		// autoplayTimeout:4500,
		
		dotsEach: true,
		// dots: false,
		responsive: {
			0: {
				items: 1,
				navText:[]
			},
			650: {
				items: 2
			},
			1000: {
				items: 3
			}
		}
	});
});

const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;

const menu = document.querySelector("#menu").cloneNode(1);


hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
  e.preventDefault();

  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

function renderPopup() {
  popup.appendChild(menu);
}


const links = Array.from(menu.children);

links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});


function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}

const hiddenWord = document.querySelector('.hidden__word');

function updateMarginRight() {
  const width = window.innerWidth;
	if (width > 2000) {
  const diff = Math.floor((width - 2000) / 100); 
  const newMarginRight = diff * 2.5 + 3; 
  hiddenWord.style.marginRight = `${newMarginRight}%`;
	}
}

window.addEventListener('load', updateMarginRight);
window.addEventListener('resize', updateMarginRight);

