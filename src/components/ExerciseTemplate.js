import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ExerciseTemplate({ exercises, tenseName }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const navigate = useNavigate();

  const currentExercise = exercises[currentQuestion];

  const handleAnswer = (answer) => {
    const isAnswerCorrect = answer === currentExercise.correctAnswer;
    setIsCorrect(isAnswerCorrect);
    if (isAnswerCorrect) {
      setScore(score + 1);
    }
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    if (currentQuestion < exercises.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowExplanation(false);
      setUserAnswer('');
      setIsCorrect(false);
    } else {
      // Exercise completed
      alert(`Congratulations! Your score: ${score}/${exercises.length}`);
      navigate('/');
    }
  };

  const goHome = () => {
    if (window.confirm('Are you sure you want to return to home page? Your progress will not be saved.')) {
      navigate('/');
    }
  };

  return (
    <div className="exercise-container">
      <div className="exercise-header">
        <h2>{tenseName} Exercise</h2>
        <button onClick={goHome} className="home-button">
          Home
        </button>
      </div>
      
      <div className="progress-bar">
        Question {currentQuestion + 1} / {exercises.length}
      </div>
      
      <div className="question-card">
        <h3>{currentExercise.question}</h3>
        
        {currentExercise.type === 'multiple-choice' && (
          <div className="options">
            {currentExercise.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                disabled={showExplanation}
                className={`option-button ${
                  showExplanation && option === currentExercise.correctAnswer
                    ? 'correct'
                    : showExplanation && option !== currentExercise.correctAnswer
                    ? 'incorrect'
                    : ''
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        )}

        {currentExercise.type === 'fill-in-blank' && (
          <div className="fill-in-blank">
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              disabled={showExplanation}
            />
            <button
              onClick={() => handleAnswer(userAnswer)}
              disabled={showExplanation}
            >
              Check Answer
            </button>
          </div>
        )}

        {showExplanation && !isCorrect && (
          <div className="explanation">
            <p>{currentExercise.explanation}</p>
            <button onClick={nextQuestion}>
              {currentQuestion === exercises.length - 1 ? 'Finish' : 'Next Question'}
            </button>
          </div>
        )}

        {showExplanation && isCorrect && (
          <div className="explanation correct">
            <p>Correct!</p>
            <button onClick={nextQuestion}>
              {currentQuestion === exercises.length - 1 ? 'Finish' : 'Next Question'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ExerciseTemplate; 