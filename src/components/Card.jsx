import React from 'react';

function Card() {
  return (
    <div className='card-container'>
      <div className='front-card'>
        <div className='logo-card'></div>
        <div className='content-card'>
          <h5>0000 0000 0000 0000</h5>
          <div className='description'>
            <p>Jane Appleseed</p>
            <span>00/00</span>
          </div>
        </div>
      </div>
      <div className='back-card'>
        <p className='cvc'>000</p>
      </div>
    </div>
  )
}

export default Card;