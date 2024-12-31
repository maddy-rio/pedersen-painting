import { useEffect } from 'react'
function Carousel4() {

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
<li class="carousel-slide current-slide"><img class="carousel-image" src="/thebrow/1.jpg" alt="The Brow"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/thebrow/2.jpg" alt="The Brow"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/thebrow/4.jpg" alt="The Brow"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/thebrow/5.jpg" alt="The Brow"/></li>  
    <li class="carousel-slide"><img class="carousel-image" src="/thebrow/6.jpg" alt="The Brow"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/thebrow/7.jpg" alt="The Brow"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/thebrow/8.jpg" alt="The Brow"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/thebrow/9.jpg" alt="The Brow"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/thebrow/10.jpg" alt="The Brow"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/thebrow/11.jpg" alt="The Brow"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/thebrow/12.jpg" alt="The Brow"/></li> 
    <li class="carousel-slide"><img class="carousel-image" src="/thebrow/13.jpg" alt="The Brow"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/thebrow/14.jpg" alt="The Brow"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/thebrow/15.jpg" alt="The Brow"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/thebrow/16.jpg" alt="The Brow"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/thebrow/17.jpg" alt="The Brow"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/thebrow/18.jpg" alt="The Brow"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/thebrow/19.jpg" alt="The Brow"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/thebrow/20.jpg" alt="The Brow"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/thebrow/21.jpg" alt="The Brow"/></li>
    <li class="carousel-slide"><img class="carousel-image" src="/thebrow/22.jpg" alt="The Brow"/></li>
</ul>

           </div>
        <button class="carousel-button carousel-button--right"> <img src="/right-chevron.svg" alt="right chevron"/></button>
        </div>
        </>
    )
}

export default Carousel4