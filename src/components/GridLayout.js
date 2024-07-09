import React from 'react'
import Grid from '@mui/material/Grid';
import "./GridLayout.css"


const GridLayout = () => {
  return (
    <div>
      <Grid className='list' container spacing={3}>
        <Grid item xs={4}>
          <h4 className='for-h4'>Fast delivery</h4>
          <p className='for-des'>2-3 working days task</p>
          </Grid>
        <Grid item xs={4}>
          <h4>Unlimited requests</h4>
          <p className='for-des'>Small bets-Big wins</p>
          </Grid>
        <Grid item xs={4}>
          <h4>No contracts</h4>
          <p className='for-des'>Work like a SaaS</p>
          </Grid>
        <Grid item xs={4}>
          <h4>Subscription</h4>
          <p className='for-des'>No hidden fees</p>
          </Grid>
        <Grid item xs={4}>
          <h4>Stop anytime</h4>
          <p className='for-des'>Cancel or pause</p>
          </Grid>
        <Grid item xs={4}>
          <h4>Validated design</h4>
          <p className='for-des'>Not just pretty pictures</p>
          </Grid>
      </Grid>
    </div>
  )
}

export default GridLayout