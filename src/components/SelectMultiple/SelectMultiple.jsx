import React, { useState, useEffect } from "react";
import "./SelectMultiple.css";

export default function SelectMultiple({ questionData, onPointsUpdated, onNextQuestion }) {
  const [selected, setSelected] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [points, setPoints] = useState(0);

  // איפוס הנתונים במעבר בין שאלות (תואם ל-resetQuestion ו-watch ב-Vue)
  useEffect(() => {
    setSelected([]);
    setSubmitted(false);
    setPoints(0);
  }, [questionData]);

  const toggleOption = (index) => {
    if (submitted) return;

    if (selected.includes(index)) {
      setSelected(selected.filter((i) => i !== index));
    } else {
      setSelected([...selected, index]);
    }
  };

  const submit = () => {
    setSubmitted(true);
    let score = 0;

    selected.forEach((index) => {
      if (questionData.correctAns.includes(index)) {
        score += 5; // 5 נקודות לכל תשובה נכונה שסומנה
      }
    });

    setPoints(score);
  };

  const optionClass = (index) => {
    if (!submitted) {
      return selected.includes(index) ? "selected" : "";
    }

    const isSelected = selected.includes(index);
    const isCorrect = questionData.correctAns.includes(index);

    if (isSelected && isCorrect) {
      return "correct";
    }

    if (isSelected && !isCorrect) {
      return "wrong";
    }

    return "";
  };

  const nextQuestion = () => {
    onPointsUpdated(points);
    setTimeout(() => {
      onNextQuestion();
    }, 180);
  };

  return (
    <div id="select-multiple">
      <div className="question-container">

        <div className="question-header">
          <h2 className="question-title">{questionData.title}</h2>
        </div>

        <div className="options-container">
          <p className="question-subtitle">{questionData.subtitle}</p>
          
          {questionData.options.map((option, index) => (
            <div
              key={index}
              className={`option-card ${optionClass(index)}`}
              onClick={() => toggleOption(index)}
            >
              <div className="option-text">
                {option}
              </div>

              <div className="checkbox">
                {selected.includes(index) && <span>✔</span>}
              </div>
            </div>
          ))}
        </div>

        {!submitted ? (
          <button className="submit-btn" onClick={submit}>
            הגש
          </button>
        ) : (
          <button className="move-on" onClick={nextQuestion}>
            המשך
          </button>
        )}

      </div>
    </div>
  );
}