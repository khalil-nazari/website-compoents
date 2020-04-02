const slides = document.querySelector('.slider').children; 
const prev = document.querySelector('.prev'); 
const next = document.querySelector('.next'); 
const indicator = document.querySelector('.indicator');

let index = 0; 

// prev button
prev.addEventListener('click', () => {
    prevSlide();
    updateCircleIndicator();
    resetTimer()
});

// next button
next.addEventListener('click', () => {
    nextSlide();
    updateCircleIndicator();
    resetTimer()
});

// When the indicator cirecle clicked
function indicateSlide(element) {
    index = element.id; 
    changeSlide();
    updateCircleIndicator(); 
    resetTimer()
}

function prevSlide () {
    // if first slide go to last slide
    if(index == 0) {
        index = slides.length-1; 
    } 
    // if its any slide go to the previous slide
    else {
        index--; 
    }

    // change the slide
    changeSlide()
}

function nextSlide() {
    // if its the last slide then go back /index=0
    if(index === slides.length-1) { 
        index = 0; 
    } 
    // else go to next slide
    else { 
        index++; 
    }

    // change the slide
    changeSlide();
}

function changeSlide() {
    // remove active class from the slide div
    for (let i=0; i<slides.length; i++) {
        slides[i].classList.remove("active");
    }

    // add active class to the slide div
    slides[index].classList.add("active");
}

// Create indicators 
circleIndicateSlide();
function circleIndicateSlide(){
    for(let i=0; i < slides.length; i++) {
        const div=document.createElement("div");
        div.innerHTML=i+1;
        div.setAttribute('onclick', 'indicateSlide(this)');
        div.id=i;
        if(i==0) {
            div.className = "active";
        }

        indicator.appendChild(div);
    }
}

// Update indicators slide.
function updateCircleIndicator () {
    // remove the active class from the indicator div
    for (let i=0; i < indicator.children.length; i++) {
        indicator.children[i].classList.remove('active');
    }
    // add the active class to the indicator div
    indicator.children[index].classList.add('active');
}

// Auto Change slide
let timer = setInterval(autoPlay, 4000);
function autoPlay() {
    nextSlide();
    updateCircleIndicator();
}

function resetTimer() {
    clearInterval(timer);
    timer=setInterval(autoPlay, 4000);
}