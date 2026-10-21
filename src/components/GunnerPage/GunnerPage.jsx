import { useState } from "react";
// import OpenQuestion from './components/OpenQuestion/OpenQuestion.jsx'
import "./GunnerPage.css";

export default function QuestionPage() {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const answers = ["הקש"];

  return (
    <main className="question-page" dir="rtl">
      <section className="question-screen">

        <header className="question-header">
          <div className="army-logo blue-logo">✦</div>
          <span className="question-level">תרגול צמ״פ</span>
          <div className="army-logo green-logo">✦</div>
        </header>

        <div className="question-progress">
          <span>שאלה 1</span>
          <div className="progress-track">
            <div className="progress-fill" />
          </div>
        </div>

        <section className="question-card">
          <div className="card-studs" aria-hidden="true">
            {Array.from({ length: 4 }, (_, i) => (
              <span key={i} />
            ))}
          </div>

          <span className="question-label">השאלה שלך</span>

          <h1 className="question-title">
            מהי התרגולת?
          </h1>

          <div className="question-divider" />

          <p className="question-hint">
            בחר בתשובה המתאימה
          </p>
        </section>

        <section className="answers-area" aria-label="אפשרויות תשובה">
          {answers.map((answer) => (
            <button
              key={answer}
              className={`answer-button ${
                selectedAnswer === answer ? "selected" : ""
              }`}
              onClick={() => setSelectedAnswer(answer)}
              aria-pressed={selectedAnswer === answer}
            >
              <span className="answer-studs" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              {answer}
            </button>
          ))}
        </section>

        <footer className="question-footer">
          <span className="footer-caption">
            {selectedAnswer ? "התשובה נבחרה" : "בחר תשובה כדי להמשיך"}
          </span>

          <button
            className="next-button"
            disabled={!selectedAnswer}
            onClick={() => {
              console.log("ממשיכים לשאלה הבאה");
            }}
          >
            <span className="next-studs" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
            </span>
            הבא ←
          </button>
        </footer>

      </section>
    </main>
  );
}
