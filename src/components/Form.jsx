import React, { useState, useEffect } from 'react';

const Form = ({ setCardForm, setComplete }) => {
  const [cardData, setCardData] = useState({});
  const regExp = /[A-z]/g;

  const validateName = cardData.name !== '' && true;
  const validate = regExp.test(cardData.card_number);
  const validateMonth = cardData.month < 1 || cardData.month > 12 && true;
  const validateYear = cardData.year < 22 || cardData.year > 27  && true;
  const validateCVC = cardData.cvc ? cardData.cvc.length !== 3 && true : false;

  useEffect(() => {
    setCardForm(cardData);
  }, [cardData])
  
  const handleInput = ({target: { name, value }}) => {
    setCardData({...cardData, [name]: value});
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(validateName, validate, validateMonth, validateYear, validateCVC);
    if (validateName && !validate && !validateMonth && !validateYear && !validateCVC) {
      setComplete(true);
    }
  };
  
  return (
    <div className='form-container'>
      <form className='form-data' onSubmit={onSubmit}>
        <label htmlFor='name'>Cardholder Name</label>
        <input type='text' name='name' className={ !validateName ? 'input error-input' : 'input'} placeholder='e.g. Jane Appleseed' onChange={handleInput}/>
        { !validateName && <span className='msg-error'>Can't be blank</span> }
        <label htmlFor='card_number'>Card Number</label>
        <input type='text' name='card_number' className={ cardData.card_number && validate ? 'input error-input' : 'input'} value={cardData.card_number && !validate ? cardData.card_number.replace(/\s/g, '').replace(/([0-9]{4})/g, '$1 ').trim(): cardData.card_number} placeholder='e.g. 1234 5678 9123 0000' maxLength='19' onChange={handleInput}/>
        { cardData.card_number && validate && <span className='msg-error'>Wrong format, numbers only</span>}
        <div className='details'>
          <div className='date'>
            <label htmlFor='date'>Exp. Date (MM/YY)</label> 
            <div className='date-input'>
              <input type='number' name='month' className={ validateMonth ? 'input error-input' : 'input'} placeholder='MM' onChange={handleInput}/>
              <input type='number' name='year' className={ validateYear ? 'input error-input' : 'input'} placeholder='YY' onChange={handleInput}/>
            </div>
            { validateMonth || validateYear && <span className='msg-error'>Wrong Format</span> }
          </div>
          <div className='cvc-input'>
            <label htmlFor='cvc'>CVC</label>
            <input type='number' name='cvc' className={ validateCVC ? 'input error-input' : 'input'} placeholder='e.g. 123' onChange={handleInput}/>
            { validateCVC && <span className='msg-error'>Wrong CVC</span> }
          </div>
        </div>
        <input type='submit' value='Confirm' className='btn' />
      </form>
    </div>
  )
}

export default Form;