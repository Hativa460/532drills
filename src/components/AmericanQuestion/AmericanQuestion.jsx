import React, { useState, useEffect } from "react";
import "./AmericanQuestion.css"; 

export default function AmericanQuestion({ questionData, onPointsUpdated, onNextQuestion }) {
  const [selectedAns, setSelectedAns] = useState(-1);
  const [isClicked, setIsClicked] = useState(false);
  const [moving, setMoving] = useState(false);

  // איפוס הבחירה בכל פעם שעוברים לשאלה חדשה (בדומה ל-watch ב-Vue)
  useEffect(() => {
    setSelectedAns(-1);
    setIsClicked(false);
    setMoving(false);
  }, [questionData]);

  const handleSelectAns = (index) => {
    if (isClicked) return;
    setSelectedAns(index);
    setIsClicked(true);
  };

  const handleMoveOn = () => {
    if (selectedAns === -1) {
      alert("נא לבחור תשובה לפני שממשיכים!");
      return;
    }

    setMoving(true);

    // חישוב ניקוד (למשל 7.5 נקודות לתשובה נכונה)
    const points = selectedAns === questionData.correct ? 7.5 : 0;
    onPointsUpdated(points);

    // השהייה קטנה לאנימציית כפתור לפני מעבר לשאלה הבאה
    setTimeout(() => {
      onNextQuestion();
    }, 180);
  };

  return (
    <div id="american">
      <div className="question-container">
        
        <div className="question-header">
          <h2 className="question-title">{questionData.title}</h2>
        </div>

        <div className="answers-grid">
          <p className="question-subtitle">{questionData.subtitle}</p>
          {questionData.answers.map((answer, index) => (
            <button
              key={index}
              className={`answer-card ${
                isClicked && index === selectedAns && index === questionData.correct
                  ? "correct-ans"
                  : ""
              } ${
                isClicked && index === selectedAns && index !== questionData.correct
                  ? "wrong-ans"
                  : ""
              }`}
              onClick={() => handleSelectAns(index)}
              disabled={isClicked}
            >
              {answer}
            </button>
          ))}
        </div>

        <button
          className={`move-on ${moving ? "pressed" : ""}`}
          onClick={handleMoveOn}
        >
          המשך -&gt;
        </button>

      </div>
    </div>
  );
}