import { useEffect } from 'react'
function Carousel7() {

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
    <li class="carousel-slide current-slide"><img class="carousel-image" src="/vtnz/1.jpg" alt="House in Waimaram exterior"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/vtnz/2.jpg" alt="Entrance hallway"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/vtnz/3.jpg" alt="Master bedroom entrance"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/vtnz/4.jpg" alt="Master bedroom"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/vtnz/5.jpg" alt="Master bathroom"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/vtnz/6.jpg" alt="Bedroom"/></li>
</ul>

           </div>
        <button class="carousel-button carousel-button--right"> <img src="/right-chevron.svg" alt="right chevron"/></button>
        </div>
        </>
    )
}

export default Carousel7