const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//Create a carrousel with the slides

const bannerImg = document.querySelector(".banner-img");
const bannerTxt = document.querySelector("#banner > p")
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dots = document.querySelectorAll(".dot");

let i = 0;
const changeBanner = () => {
	bannerImg.src = `./assets/images/slideshow/${slides[i].image}`;
	bannerTxt.innerHTML = slides[i].tagLine;
	dots.forEach(dot => dot.classList.remove("dot_selected"));
	dots[i].classList.add("dot_selected");
}

