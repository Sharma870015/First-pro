import React from 'react';
import './Plans.css';

function Plans() {
  return (
    <section className="plans">
        <div className="plan-grid">
          <div className="plan existing-plan">
            <h3 className='black-pin'>Existing Product</h3>
            <p className='black-imp'>Improve usability, retention and conversion.</p>
            <ul className='for-content'>
              <li>Pause or cancel anytime</li>
              <li>Unlimited requests</li>
              <li>High-impact optimizations</li>
            </ul>
            <div className="plan-footer">
              <span className="price">$3999/month</span>
              <button className="get-free-consultation">Get free consultation</button>
              <button className="get-started">Get started</button>
            </div>
          </div>
      

          <div className="plan new-plan">
            <h3 className='black-pro'>New Product</h3>
            <p className='black-p'>Make an idea reality. Shape and define a product.</p>
            <ul className='for-content'>
              <li>Pause or cancel anytime</li>
              <li>Unlimited requests</li>
              <li>High-impact optimizations</li>
            </ul>
            <div className="plan-footer">
              <span className="price">$4999/month</span>
              <button className="get-free-consultation">Get free consultation</button>
              <button className="get-started">Get started</button>
            </div>
          </div>
        </div>
    </section>
  );
}

export default Plans;