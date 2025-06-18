import './App.css';
import { useState } from 'react';

const App = () => {

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const cards = [
    {question: "What does FAANG stand for?" ,answer: "Facebook, Apple, Amazon, Netflix, Google"},
    {question: "What is the most popular website to prepare for technical interviewing?" ,answer: "LeetCode"},
    {question: "What language is used for most technical interviews because of its easy syntax?" ,answer: "Python"},
    {question: "What does JSON stand for?" ,answer: "JavaScript Object Notation"},
    {question: "What does CI/CD stand for?" ,answer: "Continuous integration, continuous deployment"},
    {question: "What is used to communicate between the front end, and backend of a fullstack application?" ,answer: "An API (Application Programming Interface)"},
    {question: "What company owns the cloud platform called Azure?" ,answer: "Microsoft"},
    {question: "Where are tech giants like Apple or Google located?" ,answer: "California"},
    {question: "Is machine learning a subfield of artificial intelligence?" ,answer: "Yes"},
    {question: "What popular application do developers use to create and collaborate on their code?" ,answer: "GitHub"}
  ]

  // Flip the current card
  const flipCurrentCard = () => {
    setIsFlipped(!isFlipped);
  }

  // Go to a random card in the list
  const nextRandomCard = () => {
    let randomInd = currentCardIndex
    while (randomInd == currentCardIndex) {
      randomInd = Math.round(Math.random() * 10);
    }
    setCurrentCardIndex(randomInd);
    setIsFlipped(false);
  }

  let cardText;
  if (isFlipped) {
    cardText = cards[currentCardIndex].answer;
  } else {
    cardText = cards[currentCardIndex].question;
  }

  return (
    <div className="App">
      <div className="header">
        <h1>Tech G.O.A.T.s</h1>
        <h2>Want to go into Big Tech? Test your knowledge here!</h2>
        <p>Number of Cards: 10</p>
      </div>
      <div className="container">
        <div className="flashCard" onClick={flipCurrentCard}>
          {cardText}
        </div>
        <button className="next" onClick={nextRandomCard}>Next</button>
      </div>
    </div>
  )
}

export default App
