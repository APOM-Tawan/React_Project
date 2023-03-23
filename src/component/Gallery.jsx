import React from 'react'

function Gallery() {
  return (
    <section className="Gallery">
        <h2>Gallery</h2><br /><br />
        <ul>
            <li><img width={200} src="https://cms.dmpcdn.com/musicarticle/2022/12/05/dd286f80-746f-11ed-9dc3-0597e7c735b7_webp_original.jpg" alt="Mr.everything" /></li>
            <li><img width={200} src="https://i.ytimg.com/vi/D-aCb9xsqTE/maxresdefault.jpg" alt="ชอบตัวเองตอนอยู่กับเธอ" /></li>
            <li><img width={200} src="https://i.ytimg.com/vi/hJeEOzEZstU/maxresdefault.jpg" alt="กีดกัน" /></li>
        </ul>
    </section>
  )
}

export default Gallery