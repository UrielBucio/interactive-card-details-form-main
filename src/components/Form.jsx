import React from 'react';

const Form = () => {
  return (
    <div className='form-container'>
      <form className='form-data'>
        <label htmlFor='name'>Cardholder Name</label>
        <input type='text' name='name' placeholder='e.g. Jane Appleseed'/>
        <label htmlFor='card_number'>Card Number</label>
        <input type='number' name='card_number' placeholder='e.g. 1234 5678 9123 0000'/>
        <div className='details'>
          <div className='date'>
            <label htmlFor='date'>Exp. Date (MM/YY)</label>
            <div className='date-input'>
              <input type='number' name='month' placeholder='MM'/>
              <input type='number' name='year' placeholder='YY'/>
            </div>
          </div>
          <div className='cvc-input'>
            <label htmlFor='card_number'>CVC</label>
            <input type='number' name='card_number' placeholder='e.g. 123'/>
          </div>
        </div>
        <input type='submit' value='Confirm' className='btn' />
      </form>
    </div>
  )
}

export default Form;