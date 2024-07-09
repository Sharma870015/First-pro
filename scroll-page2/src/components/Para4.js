import { Grid } from '@mui/material'
import React from 'react'
import "./Para4.css"

const Para4 = () => {
  return (
    <div className='for-frpara'>
<Grid className='Featured-recent' container>
  <Grid item xs={6}>
    <h4 className='for-feature'>Frequently asked <br></br> questions</h4>
    <Grid  className='for-descri-in-gray'container>
      <Grid item xs={5}>
      </Grid>
    </Grid>
  </Grid>
</Grid>
<Grid className='gray-descr'>
    <Grid className='second-descr'>

    <p className='for-para4'>If you have any other questions or feedback, <br></br> please <strong className='for-contact'>contact me</strong> and I'll get back to you shortly.</p>
    </Grid>
</Grid>
    </div>
  )
}

export default Para4
