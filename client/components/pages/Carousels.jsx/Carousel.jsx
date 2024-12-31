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
    <li class="carousel-slide current-slide"><img class="carousel-image" src="/matangi/1.jpg" alt="Matangi"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/matangi/2.jpg" alt="Matangi"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/matangi/3.jpg" alt="Matangi"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/matangi/4.jpg" alt="Matangi"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/matangi/5.jpg" alt="Matangi"/></li>  
    <li class="carousel-slide"><img class="carousel-image" src="/matangi/6.jpg" alt="Matangi"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/matangi/7.jpg" alt="Matangi"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/matangi/8.jpg" alt="Matangi"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/matangi/9.jpg" alt="Matangi"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/matangi/10.jpg" alt="Matangi"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/matangi/11.jpg" alt="Matangi"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/matangi/12.jpg" alt="Matangi"/></li> 
    <li class="carousel-slide"><img class="carousel-image" src="/matangi/13.jpg" alt="Matangi"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/matangi/14.jpg" alt="Matangi"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/matangi/15.jpg" alt="Matangi"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/matangi/16.jpg" alt="Matangi"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/matangi/17.jpg" alt="Matangi"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/matangi/18.jpg" alt="Matangi"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/matangi/19.jpg" alt="Matangi"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/matangi/20.jpg" alt="Matangi"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/matangi/21.jpg" alt="Matangi"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/matangi/22.jpg" alt="Matangi"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/matangi/23.jpg" alt="Matangi"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/matangi/24.jpg" alt="Matangi"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/matangi/25.jpg" alt="Matangi"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/matangi/26.jpg" alt="Matangi"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/matangi/27.jpg" alt="Matangi"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/matangi/28.jpg" alt="Matangi"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/matangi/29.jpg" alt="Matangi"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/matangi/30.jpg" alt="Matangi"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/matangi/31.jpg" alt="Matangi"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/matangi/32.jpg" alt="Matangi"/></li>

</ul>

           </div>
        <button class="carousel-button carousel-button--right"> <img src="/right-chevron.svg" alt="right chevron"/></button>
        </div>
        </>
    )
}

export default Carousel