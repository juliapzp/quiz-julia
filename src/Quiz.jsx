// src/Quiz.jsx
import React, { useState } from 'react';

const questions = [
  {
    question: 'Qual é a capital do Brasil?',
    options: ['São Paulo', 'Rio de Janeiro', 'Brasília', 'Salvador'],
    correctAnswer: 'Brasília'
  },
  {
    question: 'Quem pintou a Mona Lisa?',
    options: ['Van Gogh', 'Leonardo da Vinci', 'Michelangelo', 'Picasso'],
    correctAnswer: 'Leonardo da Vinci'
  },
  {
    question: 'Qual é o maior planeta do Sistema Solar?',
    options: ['Terra', 'Marte', 'Júpiter', 'Saturno'],
    correctAnswer: 'Júpiter'
  }
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="quiz-container">
      <h1>Quiz Júlia - 3B</h1>
      {showScore ? (
        <div className="score-section">
          <h2>Fim do Quiz!</h2>
          <p>Você acertou {score} de {questions.length} perguntas.</p>
          <button onClick={resetQuiz}>Reiniciar Quiz</button>
        </div>
      ) : (
        <div className="question-section">
          <h2>Pergunta {currentQuestion + 1}/{questions.length}</h2>
          <p>{questions[currentQuestion].question}</p>
          <div className="answer-options">
            {questions[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswerClick(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;
