const slides = document.getElementsByClassName("slide");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const slideNum = document.getElementById("slide-num");
const slideTotal = document.getElementById("slide-total"); 
slideIndex = 0;
totalSlides = slides.length;

if(slideIndex == 0){
    slideShow(0);
    prev.classList.add('display-none')
    slideNum.innerText = slideIndex + 1;
    slideTotal.innerText = totalSlides;
}

function slideShow(n){
    for( let i = 0; i < totalSlides; i++){
        slides[i].classList.remove("active");
    }
    slides[n].classList.add("active");
    slideNum.innerText = slideIndex + 1;
}

function nextSlide(){
    slideIndex += 1;
    if(slideIndex > 0){
        prev.classList.remove('display-none');
    }
    if(slideIndex == (totalSlides - 1)){
        next.classList.add('display-none');
    }
    slideShow(slideIndex);
}

function prevSlide(){
    slideIndex -= 1;
    if(slideIndex != (totalSlides -1)){
        next.classList.remove('display-none');
    }
    if(slideIndex == 0){
        prev.classList.add('display-none');
    }
    slideShow(slideIndex);
}

