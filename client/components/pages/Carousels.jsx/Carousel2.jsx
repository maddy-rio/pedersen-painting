import { useEffect } from 'react'
function Carousel2() {

    useEffect(() => {
        const list = document.querySelector('.carousel-list');
        const slides = Array.from(list.children);
        const nextButton = document.querySelector('.carousel-button--right');
        const prevButton = document.querySelector('.carousel-button--left');
        const slideWidth = slides[0].getBoundingClientRect().width;

        
   
    
        // Loop through each slide
    const setSlidePosition = ((slide, index) => {
        slide.style.left = slideWidth * index + 'px';
    })
    
    slides.forEach(setSlidePosition);


    // Move to next slide
    const moveToSlide = (list, currentSlide, targetSlide) => {
        list.style.transform = `translateX(-${targetSlide.style.left})`;
        currentSlide.classList.remove('current-slide');
        targetSlide.classList.add('current-slide');
    }
    
    // Right button
    
    nextButton.addEventListener('click', e => {
        const currentSlide = list.querySelector('.current-slide');
        const nextSlide = currentSlide.nextElementSibling;

        moveToSlide(list, currentSlide, nextSlide);
    })

    // Left button 

    prevButton.addEventListener('click', e => {
        const currentSlide = list.querySelector('.current-slide');
        const prevSlide = currentSlide.previousElementSibling;

        moveToSlide(list, currentSlide, prevSlide);
    })
    })


 


    return (
        <>
        <div class="carousel">
            <button class="carousel-button carousel-button--left "><img src="/left-chevron.svg" alt="left chevron"/></button>
           <div class="carousel-container">
<ul class="carousel-list">
<li class="carousel-slide current-slide"><img class="carousel-image" src="/gage/1.jpg" alt="Gage Lane"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/gage/2.jpg" alt="Gage Lane"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/gage/3.jpg" alt="Gage Lane"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/gage/4.jpg" alt="Gage Lane"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/gage/5.jpg" alt="Gage Lane"/></li>  
    <li class="carousel-slide"><img class="carousel-image" src="/gage/6.jpg" alt="Gage Lane"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/gage/7.jpg" alt="Gage Lane"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/gage/8.jpg" alt="Gage Lane"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/gage/9.jpg" alt="Gage Lane"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/gage/10.jpg" alt="Gage Lane"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/gage/11.jpg" alt="Gage Lane"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/gage/12.jpg" alt="Gage Lane"/></li> 
    <li class="carousel-slide"><img class="carousel-image" src="/gage/13.jpg" alt="Gage Lane"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/gage/14.jpg" alt="Gage Lane"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/gage/15.jpg" alt="Gage Lane"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/gage/16.jpg" alt="Gage Lane"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/gage/17.jpg" alt="Gage Lane"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/gage/18.jpg" alt="Gage Lane"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/gage/19.jpg" alt="Gage Lane"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/gage/20.jpg" alt="Gage Lane"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/gage/21.jpg" alt="Gage Lane"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/gage/22.jpg" alt="Gage Lane"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/gage/23.jpg" alt="Gage Lane"/></li>
</ul>

           </div>
        <button class="carousel-button carousel-button--right"> <img src="/right-chevron.svg" alt="right chevron"/></button>
        </div>
        </>
    )
}

export default Carousel2