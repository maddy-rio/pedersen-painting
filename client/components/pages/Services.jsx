import Nav from '../Nav'
import Footer from '../Footer'

import { motion } from 'framer-motion'
import { useState } from 'react'

function Services() {
  const [hasNewPageAnimated, setHasNewPageAnimated] = useState(false)

  // Residential section
  const [hasResidentialTextAnimated, setHasResidentialTextAnimated] =
    useState(false)

  // Commercial section
  const [hasCommercialImageAnimated, setHasCommercialImageAnimated] =
    useState(false)
  const [hasCommercialTextAnimated, setHasCommercialTextAnimated] =
    useState(false)

  // Wallpapering section
  const [hasWallpaperImageAnimated, setHasWallpaperImageAnimated] =
    useState(false)
  const [hasWallpaperTextAnimated, setHasWallpaperTextAnimated] =
    useState(false)

  // Waterblasting section
  const [hasWaterblastingImageAnimated, setHasWaterblastingImageAnimated] =
    useState(false)
  const [hasWaterblastingTextAnimated, setHasWaterblastingTextAnimated] =
    useState(false)

  // Animation variants
  const transitionToNewPageVariant = {
    hidden: { opacity: 0, y: -5 },
    visible: { opacity: 1, y: 0 },
  }

  const residentialTextVariant = {
    hidden: { opacity: 0, x: 5 },
    visible: { opacity: 1, x: 0 },
  }

  const commercialImageVariant = {
    hidden: { opacity: 0, x: 5 },
    visible: { opacity: 1, x: 0 },
  }

  const commercialTextVariant = {
    hidden: { opacity: 0, x: -5 },
    visible: { opacity: 1, x: 0 },
  }

  const wallpaperImageVariant = {
    hidden: { opacity: 0, x: -5 },
    visible: { opacity: 1, x: 0 },
  }

  const wallpaperTextVariant = {
    hidden: { opacity: 0, x: 5 },
    visible: { opacity: 1, x: 0 },
  }

  const waterblastingImageVariant = {
    hidden: { opacity: 0, x: 5 },
    visible: { opacity: 1, x: 0 },
  }

  const waterblastingTextVariant = {
    hidden: { opacity: 0, x: -5 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <>
      <Nav />
      <motion.section
        variants={transitionToNewPageVariant}
        initial="hidden"
        transition={{ ease: 'linear', duration: 1, delay: 0.25 }}
        animate={hasNewPageAnimated ? 'visible' : 'hidden'}
        onViewportEnter={() => {
          if (!hasNewPageAnimated) {
            setHasNewPageAnimated(true)
          }
        }}
      >
        <h1 className="services-header">&nbsp;&nbsp;Our services&nbsp;&nbsp;</h1>

        {/* Residential New Builds */}
        <section id="services-left" aria-labelledby="residential-heading">
          <a href="/work">
            <img
              className="services-image"
              src="/services1.jpeg"
              alt="House in Waimarama's living room"
            />
          </a>
          <motion.div
            className="services-text"
            variants={residentialTextVariant}
            initial="hidden"
            transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.35 }}
            animate={hasResidentialTextAnimated ? 'visible' : 'hidden'}
            onViewportEnter={() => {
              if (!hasResidentialTextAnimated) {
                setHasResidentialTextAnimated(true)
              }
            }}
          >
            <h1 className="section-header" id="residential-heading">
              Residential New Builds
            </h1>
            <p>
            At our company, we are committed to delivering exceptional quality in every new build project. We proudly use Prospec Paints, known for their superior performance and durability. Our skilled team is trained in the application of Prospec’s exclusive approved applicator-only coating system, which features advanced high-build technology. This ensures a flawless Level 5 finish on walls and ceilings, paired with a self-leveling enamel that enhances the beauty of your new home. We focus on every detail to ensure that your new build looks stunning and meets your expectations.
            </p>
          </motion.div>
        </section>

        {/* Commercial Painting */}
        <section id="services-right" aria-labelledby="commercial-heading">
          <motion.div
            variants={commercialImageVariant}
            initial="hidden"
            transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.35 }}
            animate={hasCommercialImageAnimated ? 'visible' : 'hidden'}
            onViewportEnter={() => {
              if (!hasCommercialImageAnimated) {
                setHasCommercialImageAnimated(true)
              }
            }}
          >
            <a href="/work">
              <img
                className="services-image"
                src="/services2.jpeg"
                alt="Commercial building exterior"
              />
            </a>
          </motion.div>
          <motion.div
            className="services-text"
            variants={commercialTextVariant}
            initial="hidden"
            transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.35 }}
            animate={hasCommercialTextAnimated ? 'visible' : 'hidden'}
            onViewportEnter={() => {
              if (!hasCommercialTextAnimated) {
                setHasCommercialTextAnimated(true)
              }
            }}
          >
            <h1 className="section-header" id="commercial-heading">
              Commercial Painting
            </h1>
            <p>
            Our commercial painting services are designed to enhance the look and feel of your business environment. Whether you need a fresh coat for offices, retail shops, or educational institutions, we deliver professional results that reflect your brand’s identity. Our experienced team uses high-quality paints and techniques to ensure durability and a polished finish, creating a welcoming atmosphere for employees and customers alike.
            </p>
          </motion.div>
        </section>

        {/* Interior/Exterior Repaints */}
        <section id="services-left" aria-labelledby="wallpapering-heading">
          <motion.div
            variants={wallpaperImageVariant}
            initial="hidden"
            transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.35 }}
            animate={hasWallpaperImageAnimated ? 'visible' : 'hidden'}
            onViewportEnter={() => {
              if (!hasWallpaperImageAnimated) {
                setHasWallpaperImageAnimated(true)
              }
            }}
          >
            <a href="/work">
              <img
                className="services-image"
                src="/services3.jpeg"
                alt="House in Waimarama's bathroom"
              />
            </a>
          </motion.div>
          <motion.div
            className="services-text"
            variants={wallpaperTextVariant}
            initial="hidden"
            transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.35 }}
            animate={hasWallpaperTextAnimated ? 'visible' : 'hidden'}
            onViewportEnter={() => {
              if (!hasWallpaperTextAnimated) {
                setHasWallpaperTextAnimated(true)
              }
            }}
          >
            <h1 className="section-header" id="wallpapering-heading">
              Interior/Exterior Repaints
            </h1>
            <p>
            Breathe new life into your home with our interior and exterior repainting services. We use Paintplus from our trusted supplier, Complete Paints, to provide a vibrant and long-lasting finish. Whether you want to refresh a single room or give your entire home a makeover, our skilled team will work with you to choose the perfect colors and finishes that elevate your space and enhance its overall appeal.


            </p>
          </motion.div>
        </section>

        {/* Roof Painting */}
        <section id="services-right" aria-labelledby="waterblasting-heading">
          <motion.div
            variants={waterblastingImageVariant}
            initial="hidden"
            transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.35 }}
            animate={hasWaterblastingImageAnimated ? 'visible' : 'hidden'}
            onViewportEnter={() => {
              if (!hasWaterblastingImageAnimated) {
                setHasWaterblastingImageAnimated(true)
              }
            }}
          >
            <img
              className="services-image"
              src="/services4.jpeg"
              alt="Waterblasting exterior of house"
            />
          </motion.div>
          <motion.div
            className="services-text"
            variants={waterblastingTextVariant}
            initial="hidden"
            transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.35 }}
            animate={hasWaterblastingTextAnimated ? 'visible' : 'hidden'}
            onViewportEnter={() => {
              if (!hasWaterblastingTextAnimated) {
                setHasWaterblastingTextAnimated(true)
              }
            }}
          >
            <h1 className="section-header" id="waterblasting-heading">
              Roof Painting
            </h1>
            <p>
            Is your roof looking tired and worn? Our roof painting service can restore its original beauty and protect it from the elements. We use high-quality, weather-resistant paints that not only improve the appearance of your roof but also extend its lifespan. Our team is experienced in safely and effectively painting roofs, ensuring a clean and professional finish that will have your home looking like new again.
            </p>
          </motion.div>
        </section>
        {/* Wallpapering */}
        <section id="services-left" aria-labelledby="wallpapering-heading">
          <motion.div
            variants={wallpaperImageVariant}
            initial="hidden"
            transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.35 }}
            animate={hasWallpaperImageAnimated ? 'visible' : 'hidden'}
            onViewportEnter={() => {
              if (!hasWallpaperImageAnimated) {
                setHasWallpaperImageAnimated(true)
              }
            }}
          >
            <a href="/work">
              <img
                className="services-image"
                src="/services5.jpeg"
                alt="House in Matangi's bathroom"
              />
            </a>
          </motion.div>
          <motion.div
            className="services-text"
            variants={wallpaperTextVariant}
            initial="hidden"
            transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.35 }}
            animate={hasWallpaperTextAnimated ? 'visible' : 'hidden'}
            onViewportEnter={() => {
              if (!hasWallpaperTextAnimated) {
                setHasWallpaperTextAnimated(true)
              }
            }}
          >
            <h1 className="section-header" id="wallpapering-heading">
              Wallpapering
            </h1>
            <p>
            Transform your space with our expert wallpapering services. Our skilled wallpaperer takes great care in ensuring that each piece is applied flawlessly, resulting in a beautiful and seamless finish. We offer a wide range of wallpaper options to suit your style, and our attention to detail guarantees that your walls will look stunning and professionally done. Whether it’s a single accent wall or an entire room, we’re here to help you achieve the perfect look.


            </p>
          </motion.div>
        </section>
        <Footer />
      </motion.section>
    </>
  )
}

export default Services
