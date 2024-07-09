import React from 'react'
import Grid from '@mui/material/Grid';
import "./PhotoBoxes.css"

const PhotoBoxes = () => {
  return (
    <div className='Group-img'>
      <Grid container spacing={2}>
        {[
          'https://img.freepik.com/free-vector/mobile-phone-desktop-app-development_23-2148704867.jpg?size=626&ext=jpg&ga=GA1.1.1755385959.1720200277&semt=ais_user',
          'https://img.freepik.com/free-vector/app-development-concept-with-laptop_23-2148699364.jpg?size=626&ext=jpg&ga=GA1.1.1755385959.1720200277&semt=ais_user',
          'https://img.freepik.com/free-vector/naive-computer-engineer-stickers-collection_23-2150626948.jpg?size=626&ext=jpg&ga=GA1.1.1755385959.1720200277&semt=ais_user',
          'https://img.freepik.com/free-vector/app-development-concept-with-desk-desktop_23-2148699345.jpg?size=626&ext=jpg&ga=GA1.1.1755385959.1720200277&semt=ais_user'
        ].map((src, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <img className='image1' src={src} alt={`Imageeee ${index + 1}`} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default PhotoBoxes