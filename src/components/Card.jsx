import React from 'react';

function Card({ cardForm }) {
  return (
    <div className='card-container'>
      <div className='back-card'>
        <p className='cvc'>{cardForm.cvc ? cardForm.cvc : '000'}</p>
      </div>
      <div className='front-card'>
        <div className='logo-card'></div>
        <div className='content-card'>
          <h5>{cardForm.card_number ? cardForm.card_number : '0000 0000 0000 0000'}</h5>
          <div className='description'>
            <p>{cardForm.name ? cardForm.name : 'Jane Appleseed'}</p>
            <span>{cardForm.month ? cardForm.month : '00'}/{cardForm.year ? cardForm.year : '00'}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;