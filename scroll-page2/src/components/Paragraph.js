import { Grid } from '@mui/material'
import React from 'react'
import "./Paragraph.css"

const Paragraph = () => {
  return (
    <div className='for-secpara'>
<Grid className='process behind' container spacing={3}>
  <Grid item xs={6}>
    <h4 className='for-process'>The process behind</h4>
    <Grid  className='for-descri-in-gray'container>
      <Grid item xs={5}>
      <h1 className='for-super2'>super<sup className='for-ux2'>UX</sup></h1><br></br>
      </Grid>
    </Grid>
  </Grid>
</Grid>
<Grid className='gray-descr'>
    <Grid className='main-descr'>

    <p className='for-Creating'>Creating engaging user experiences that help your<br></br>
    customers achieve their goals and keep them <br></br>coming back.</p>

    </Grid>
</Grid>
    </div>
  )
}

export default Paragraph
