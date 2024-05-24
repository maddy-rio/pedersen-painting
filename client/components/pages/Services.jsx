import Nav from '../Nav';
import Footer from '../Footer';

function Services() {
  return (
    <>
      <section>
        <Nav />
        <h1 class="services-header">Our Services</h1>
       {/* Residential */}
    <section id="left-section">
      <a href='/work'>
<img src="/services1.jpeg"></img>
</a>
<div className="services-text">
  <p className="section-header">Residential</p>
  <p>Pedersen Painting consults with clients to understand their vision and preferences. Surfaces are prepared by cleaning, sanding, and priming. Quality paint products are applied using precise techniques to achieve a flawless finish. Attention is given to detail work, such as trim and doors. Once painting is complete, surfaces are cleaned for a pristine result.</p>
            </div>
    </section>


    {/*  Commercial */}
    <section id="right-section">
    <a href='/work'>
      <img src="/services2.jpeg"></img>
      </a>
      <div className="services-text">
      <p className="section-header">Commercial</p>
      <p>For commercial projects, Pedersen Painting assesses the space and plans the painting process accordingly. Surfaces are prepared thoroughly to ensure optimal paint adhesion and durability. Durable paint products are applied to meet the specific needs of commercial environments. Quality checks are conducted throughout to ensure client satisfaction.</p>
     
            </div>
    </section>

     {/* Wallpapering */}
     <section id="left-section">
     <a href='/work'>
<img src="/services3.jpeg"></img>
</a>
<div className="services-text">
  <p className="section-header">Wallpapering</p>
  <p>Clients collaborate with Pedersen Painting to select the perfect wallpaper design. Walls are cleaned, smoothed, and primed for installation. Our experienced wallpaperer will carefully apply the wallpaper, ensuring perfect alignment and smooth seams. Finishing touches are completed for a professional result. </p>
           
            </div>
    </section>


    {/*  Waterblasting  */}
    <section id="right-section">
      
      <img src="/services4.jpeg"></img>
      <div className="services-text">
      <p className="section-header">Waterblasting</p>
      <p>Before painting exterior surfaces, Pedersen Painting uses waterblasting to clean and prepare the area. This process removes dirt, grime, and old paint layers, creating an ideal surface for paint adhesion. Environmental considerations are taken into account throughout the process.</p>
            </div>
    </section>
        <Footer />
      </section>
    </>
  );
}

export default Services;

