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
        <h1 className="services-header">&nbsp;&nbsp;Services&nbsp;&nbsp;</h1>

        {/* Residential */}
        <section id="services-left">
          <img
            className="services-image"
            src="/services1.jpeg"
            alt="House in Waimarama's living room"
          />

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
            <h1 className="section-header">Residential</h1>
            <p>
              Pedersen Painting consults with clients to understand their vision
              and preferences. Surfaces are prepared by cleaning, sanding, and
              priming. Quality paint products are applied using precise
              techniques to achieve a flawless finish. Attention is given to
              detail work, such as trim and doors. Once painting is complete,
              surfaces are cleaned for a pristine result.
            </p>
          </motion.div>
        </section>

        {/* Commercial */}
        <section id="services-right">
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
            <img
              className="services-image"
              src="/services2.jpeg"
              alt="Commercial building exterior"
            />
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
            <h1 className="section-header">Commercial</h1>
            <p>
              For commercial projects, Pedersen Painting assesses the space and
              plans the painting process accordingly. Surfaces are prepared
              thoroughly to ensure optimal paint adhesion and durability.
              Durable paint products are applied to meet the specific needs of
              commercial environments. Quality checks are conducted throughout
              to ensure client satisfaction.
            </p>
          </motion.div>
        </section>

        {/* Wallpapering */}
        <section id="services-left">
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
            <img
              className="services-image"
              src="/services3.jpeg"
              alt="House in Waimarama's bathroom"
            />
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
            <h1 className="section-header">Wallpapering</h1>
            <p>
              Clients collaborate with Pedersen Painting to select the perfect
              wallpaper design. Walls are cleaned, smoothed, and primed for
              installation. Our experienced wallpaperer will carefully apply the
              wallpaper, ensuring perfect alignment and smooth seams. Finishing
              touches are completed for a professional result.
            </p>
          </motion.div>
        </section>

        {/* Waterblasting */}
        <section id="services-right">
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
            <h1 className="section-header">Waterblasting</h1>
            <p>
              Before painting exterior surfaces, Pedersen Painting uses
              waterblasting to clean and prepare the area. This process removes
              dirt, grime, and old paint layers, creating an ideal surface for
              paint adhesion. Environmental considerations are taken into
              account throughout the process.
            </p>
          </motion.div>
        </section>
        <div className="button-for-work">
          <a href="/work">
            <button aria-label="View catalogue of our work">
              View our work
            </button>
          </a>
        </div>
        <Footer />
      </motion.section>
    </>
  )
}

export default Services
