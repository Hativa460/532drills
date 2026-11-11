import React, { useState } from "react";
import "./OpenQuestion.css";

export default function OpenQuestion({ questionData, onPointsUpdated, onNextQuestion }) {
  const [userAnswer, setUserAnswer] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false); // פתיחת ה-Overlay

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userAnswer.trim()) {
      alert("נא להזין תשובה לפני שממשיכים!");
      return;
    }

    setIsSubmitted(true);

    const correct = userAnswer.trim() === questionData.correct.trim();
    setIsCorrect(correct);

    const points = correct ? 10 : 0;
    onPointsUpdated(points);

    // מציג את ה-Overlay מיד אחרי ההגשה (או בלחיצה)
    setShowOverlay(true);
  };

  const closeOverlayAndNext = () => {
    setShowOverlay(false);
    onNextQuestion();
  };

  return (
    <div id="open-question">
      <div className="question-container">
        
        <div className="question-header">
          <h2 className="question-title">{questionData.title}</h2>
          <p className="question-subtitle">{questionData.subtitle}</p>
        </div>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="open-form">
            <textarea
              className="answer-textarea"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder="הקלד/י את התשובה כאן..."
              rows="5"
            />
            <button type="submit" className="submit-ans-btn">
              הגש תשובה
            </button>
          </form>
        ) : (
          <div className="feedback-container">
            <div className={`result-box ${isCorrect ? "correct-ans" : "wrong-ans"}`}>
              {isCorrect ? "כל הכבוד! צדקת 🎉" : "טעית בתשובה"}
            </div>

            <button className="move-on" onClick={() => setShowOverlay(true)}>
              הצג תשובה נכונה
            </button>

            <button className="move-on" onClick={onNextQuestion} style={{ marginTop: "10px" }}>
              המשך לשאלה הבאה -&gt;
            </button>
          </div>
        )}

      </div>

      {/* --- ה-Overlay המלא שמחשיך את כל המסך --- */}
      {showOverlay && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={closeOverlayAndNext}>×</button>
            <h3>התשובה הנכונה לשאלה {questionData.qNum}:</h3>
            <p>{questionData.correct}</p>
            <button className="modal-next-btn" onClick={closeOverlayAndNext}>
              המשך הלאה
            </button>
          </div>
        </div>
      )}
    </div>
  );
}