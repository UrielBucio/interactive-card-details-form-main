import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import './css/styles.css';

function App() {

  return (
    <>
      <main className="main-container">
        <Card/>
        <Form/>
      </main>
      <footer className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/UrielBucio">Uriel Bucio</a>.
      </footer>
    </>
  )
}

export default App
