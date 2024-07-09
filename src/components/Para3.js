import React from 'react'
import "./Para3.css"
import { Grid } from '@mui/material'

const Para3 = () => {
  return (
    <div className='for-recentpara'>
<Grid className='Featured-recent' container>
  <Grid item xs={6}>
    <h4 className='for-choose'>Choose a plan that's <br></br> right for you.</h4>
    <Grid  className='for-descri-in-gray'container>
      <Grid item xs={5}>
      </Grid>
    </Grid>
  </Grid>
</Grid>
<Grid className='gray-descr'>
    <Grid className='second-descr'>

    <p className='for-para3'>Design as a subscription that fits your needs and <br></br> gives you unlimited revisions.</p>
    </Grid>
</Grid>
    </div>
  )
}

export default Para3
