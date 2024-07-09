import React from 'react'
import Grid from '@mui/material/Grid';
import "./ImageBoxes.css"

const ImageBoxes = () => {
  return (
    <div className='Group-img1'>
      <Grid container spacing={3}>
        {[
          { img: 'img1', src: 'https://img.freepik.com/free-vector/ui-ux-designers-isometric-background_1284-71566.jpg?semt=ais_user', alt: 'Analyze-img', title: '1. Analyze', description: 'Deep dive into your customers behavior using session recordings and feedback.' },
          { img: 'img1', src: 'https://img.freepik.com/free-vector/flat-design-cms-illustration_23-2148825219.jpg?ga=GA1.1.1755385959.1720200277&semt=ais_hybrid', alt: 'Priorities-img', title: '2. Prioritise', description: 'Prioritize the opportunities that are having the biggest impact on your customers.' },
          { img: 'img1', src: 'https://img.freepik.com/free-vector/ui-ux-female-designer_1284-70205.jpg?semt=ais_user', alt: 'Optimize-img', title: '3. Optimize', description: 'We\'ll propose solutions that require small efforts and have a big impact.' },
          { img: 'img1', src: 'https://img.freepik.com/free-vector/hand-drawn-web-developers-working_23-2148819605.jpg?t=st=1720456406~exp=1720460006~hmac=ef4e2dc5ef57b15150d42a304ea13a6aac2b34e33943a6b6832a5f9c14de5bb5&w=826', alt: 'Validate-img', title: '4. Validate', description: 'Using prototypes, we run tests to ensure each optimization will drive results.' },
        ].map((item, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <div className="image-box">
              <img className={item.img} src={item.src} alt={item.alt} />
              <h4 className='for-points'>{item.title}</h4>
              <p className='for-deep-dive'>{item.description}</p>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default ImageBoxes