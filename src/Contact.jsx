import React from 'react'

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
          <p className='updates'>Get the latest update about AWU Token.</p>
          <input
            type='text'
            className='email-address'
            placeholder='Enter your email address here'
          />
          <div className='rectangle-26'>
            <img className='send' src='./img/send.png' alt='send' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
