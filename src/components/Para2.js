import { Grid } from '@mui/material'
import React from 'react'
import "./Para2.css"

const Para2 = () => {
  return (
    <div className='for-Featurepara'>
<Grid className='Featured-recent' container>
  <Grid item xs={6}>
    <h4 className='for-feature'>Featured recent <br></br> case studies</h4>
    <Grid  className='for-descri-in-gray'container>
      <Grid item xs={5}>
      </Grid>
    </Grid>
  </Grid>
</Grid>
<Grid className='gray-descr'>
    <Grid className='second-descr'>

    <p className='for-para2'>various design optimisations that improved <br></br> usability, customer retention and conversion.</p>
    </Grid>
</Grid>
    </div>
  )
}

export default Para2
