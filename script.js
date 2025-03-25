let index = 0;

function zobrazenieSlide(n, ele) {
    const slides = document.querySelectorAll(`.slide${ele}`);
    
    if (n >= slides.length) index = 0; 
    if (n < 0) index = slides.length - 1; 
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none'; 
    });
}

function posunSlide(n, ele) {
    index += n;
    zobrazenieSlide(index, ele); 
}
zobrazenieSlide(index, "1");