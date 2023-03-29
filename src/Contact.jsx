import React from 'react'
import Send from './img/send.png'


const Contact = () => {

  return (
    <div className='container-center-horizontal'>
      <div className='overlap-group'>
        <h1 className='newsletter'>
          Subscribe
          <br />
          to our Newsletter
        </h1>
        <div className='overlap-group1'>
          <p className='updates'>Get the latest updates about AWU Token.</p>
          <input
            type='text'
            className='email-address'
            placeholder='Enter your email address here'
          />
          <button type="button" className='send-button'>
            <img src={ Send } alt="Submit" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Contact
