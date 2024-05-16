
import Nav from '../Nav'
import Footer from '../Footer'

function Services() {

    return (
        <>
          <Nav />
          <section>
            <section id="services-page">
              <div>
          <h1 class="page-header">Services</h1>
          </div>
      <div class="services-container">
        <div class="services-containerItem">
        <h1>Residential</h1>
        <p>Pedersen Painting consults with clients to understand their vision and preferences. Surfaces are prepared by cleaning, sanding, and priming. Quality paint products are applied using precise techniques to achieve a flawless finish. Attention is given to detail work, such as trim and doors. Once painting is complete, surfaces are cleaned for a pristine result.</p>
        </div>
        <div class="services-containerItem">
        <h1>Commercial </h1>
        <p>For commercial projects, Pedersen Painting assesses the space and plans the painting process accordingly. Surfaces are prepared thoroughly to ensure optimal paint adhesion and durability. Durable paint products are applied to meet the specific needs of commercial environments. Quality checks are conducted throughout to ensure client satisfaction.</p>
        </div>
        <div class="services-containerItem">
        <h1>Wallpapering</h1>
        <p>Clients collaborate with Pedersen Painting to select the perfect wallpaper design. Walls are cleaned, smoothed, and primed for installation. Our experienced wallpaperer will carefully apply the wallpaper, ensuring perfect alignment and smooth seams. Finishing touches are completed for a professional result. </p>
        </div>
        <div class="services-containerItem">
        <h1>Waterblasting</h1>
        <p>Before painting exterior surfaces, Pedersen Painting uses waterblasting to clean and prepare the area. This process removes dirt, grime, and old paint layers, creating an ideal surface for paint adhesion. Environmental considerations are taken into account throughout the process.</p>
        </div>
       
          </div>
          </section>
 <Footer />
</section>
        </>
    )
}

export default Services