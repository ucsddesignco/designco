import React from 'react'

function Gallery() {
  return (
    <section className="community__gallery">
        <h2>View Our Community</h2>
        <div className="community__gallery__section-1">
            <div className="community__gallery__subsection">
                <img src="https://res.cloudinary.com/design-co-ucsd/image/upload/q_auto/v1663745909/community-gallery/community-1_pptbud.jpg" alt="Community Image 1"/>
                <img src="https://res.cloudinary.com/design-co-ucsd/image/upload/q_auto/v1663745891/community-gallery/community-2_sqfykd.jpg" alt="Community Image 2"/>
            </div>
            <div className="community__gallery__subsection">
                <img src="https://res.cloudinary.com/design-co-ucsd/image/upload/q_auto/v1663745881/community-gallery/community-3_htsucv.jpg" alt="Community Image 3"/>
                <img src="https://res.cloudinary.com/design-co-ucsd/image/upload/q_auto/v1663745895/community-gallery/community-4_v22iql.jpg" alt="Community Image 4"/>
            </div>
        </div>
        <div className="community__gallery__section-2">
            <img src="https://res.cloudinary.com/design-co-ucsd/image/upload/q_auto/v1663745886/community-gallery/community-5_aufqgk.jpg" alt="Community Image 5"/>
            <img src="https://res.cloudinary.com/design-co-ucsd/image/upload/q_auto/v1663745922/community-gallery/community-6_by1nrw.jpg" alt="Community Image 6"/>
        </div>
        <div className="community__gallery__section-3">
            <img src="https://res.cloudinary.com/design-co-ucsd/image/upload/q_auto/v1663745666/community-gallery/community-7_z5zw4w.png" alt="Community Image 11"/>
        </div>
        <div className="community__gallery__section-4">
            <div className="community__gallery__subsection">
                <img src="https://res.cloudinary.com/design-co-ucsd/image/upload/q_auto/v1663745647/community-gallery/community-8_nbfz9a.jpg" alt="Community Image 7"/>
                <img src="https://res.cloudinary.com/design-co-ucsd/image/upload/q_auto/v1663745648/community-gallery/community-9_qdem8d.jpg" alt="Community Image 8"/>
            </div>
            <div className="community__gallery__subsection">
                <img src="https://res.cloudinary.com/design-co-ucsd/image/upload/q_auto/v1663745670/community-gallery/community-10_bfnm5x.jpg" alt="Community Image 9"/>
                <img src="https://res.cloudinary.com/design-co-ucsd/image/upload/q_auto/v1663745916/community-gallery/community-11_mbsef2.jpg" alt="Community Image 10"/>
            </div>
        </div>
    </section>
  )
}

export default Gallery