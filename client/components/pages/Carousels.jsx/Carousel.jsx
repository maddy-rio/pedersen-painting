import { useEffect } from 'react'
function Carousel() {

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
    <li class="carousel-slide current-slide"><img class="carousel-image" src="/haumoana/1.jpg" alt="Haumoana exterior"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/haumoana/2.jpg" alt="Exterior"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/haumoana/3.jpg" alt="Kitchen"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/haumoana/4.jpg" alt="Dining room"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/haumoana/5.jpg" alt="Living room"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/haumoana/6.jpg" alt="Hobbies room"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/haumoana/7.jpg" alt="Hallway"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/haumoana/8.jpg" alt="Bedroom"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/haumoana/9.jpg" alt="Bathroom"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/haumoana/10.jpg" alt="Bedroom"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/haumoana/11.jpg" alt="Entrance area"/></li>
</ul>

           </div>
        <button class="carousel-button carousel-button--right"> <img src="/right-chevron.svg" alt="right chevron"/></button>
        </div>
        </>
    )
}

export default Carousel