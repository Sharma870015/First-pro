import React from 'react'
import Grid from '@mui/material/Grid';
import "./Footer.css"


const Footer = () => {
  return (
    <div className='Footer-main'>
      <Grid className='footer-1' container spacing={0}>
        <Grid item xs={4}>
            <h5 className='foot1'>Product</h5>
            <p className='foot-p'>How it works</p>
            <p className='foot-p'>Case studies</p>
            <p className='foot-p'>Pricing</p>
        </Grid>
        <Grid item xs={4}>
            <h5 className='foot1'>Contact</h5>
            <p className='foot-p'>Email</p>
            <p className='foot-p'>Twitter</p>
            <p className='foot-p'>Newsletter</p>
        </Grid>
        <Grid item xs={4}>
            <h5 className='foot1'>Privacy</h5>
            <p className='foot-p'>Privacy Policy</p>
            <p className='foot-p'>Terms & Conditions</p>
        </Grid>
    
      </Grid>
    </div>
  )
}

export default Footer