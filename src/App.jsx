import React, { useState} from 'react';
import Card from './components/Card';
import Form from './components/Form';
import Thanks from './components/Thanks';
import './css/styles.css';

function App() {
  const [cardForm, setCardForm] = useState({});
  const [complete, setComplete] = useState(false);
  
  return (
    <>
      <main className="main-container">
        <Card cardForm={cardForm}/>
        { complete ? <Thanks setComplete={setComplete}/> : <Form setCardForm={setCardForm} setComplete={setComplete}/>}
      </main>
      <footer className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/UrielBucio">Uriel Bucio</a>.
      </footer>
    </>
  )
}

export default App
