import React, { useState} from 'react';
import Card from './components/Card';
import Form from './components/Form';
import './css/styles.css';

function App() {
  const [cardForm, setCardForm] = useState({});
  
  return (
    <>
      <main className="main-container">
        <Card cardForm={cardForm}/>
        <Form setCardForm={setCardForm}/>
      </main>
      <footer className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/UrielBucio">Uriel Bucio</a>.
      </footer>
    </>
  )
}

export default App
