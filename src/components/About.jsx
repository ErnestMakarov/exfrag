import React from 'react'

const About = () => {
  return (
    <main className='main'>
      <div className='container about-container'>
        <p className='about-text'> 
          We are an archival clothing brand working with what already exists. <br /> <br />
          Our core material is vintage denim — jeans with history, wear, and character. Instead of producing from scratch, 
          we deconstruct, rethink, and rebuild. Each piece is carefully reworked by hand, 
          transforming existing garments into something entirely new while preserving their past. <br /><br />

          This process makes every item one of a kind. No two pieces are identical — differences in fabric,
           fading, and construction are intentional and celebrated. Imperfection is part of the design. <br /><br />

          We believe true value comes from longevity, craftsmanship, and respect for materials. 
          By reusing denim, we reduce waste and give new meaning to garments that would otherwise be forgotten. <br /> <br />

          Our collections are limited, shaped by the availability of materials rather than trends. 
          What we release is the result of time, experimentation, and attention to detail. <br /> <br />
          This is not reproduction. <br />
          This is reconstruction.
        </p>
      </div>
      <a href="/contact" className="privacy-btn">privacy policy</a>
    </main>
  )
}

export default About