// import React, { useState, useEffect, useMemo } from "react";
// import json from "//.text.json"; 
// import "./OpenQuestion.css"; 

// export default function OpenQuestion({ questionNum, onNextQuestion }) {
//   const [userAnswer, setUserAnswer] = useState("");
//   const [submitted, setSubmitted] = useState(false);
//   const [showPopup, setShowPopup] = useState(false);
//   const [canContinue, setCanContinue] = useState(false);

//   useEffect(() => {
//     resetQuestion();
//   }, [questionNum]);

//   const currentQuestion = useMemo(() => {
//     return json.openQuestions[questionNum];
//   }, [questionNum]);

//   const title = currentQuestion ? currentQuestion.title : "";
//   const subtitle = currentQuestion ? currentQuestion.subtitle : "";
//   const correctAnswer = currentQuestion ? currentQuestion.correct : "";
//   const keywords = currentQuestion ? currentQuestion.keywords : [];

//   const normalize = (text) => {
//     return text
//       .toLowerCase()
//       .replace(/[.,!?()]/g, "")
//       .replace(/\s+/g, " ")
//       .trim();
//   };

//   const submitAnswer = () => {
//     if (!userAnswer.trim()) return;

//     const answer = normalize(userAnswer);
//     let found = 0;

//     keywords.forEach((group) => {
//       const groupKeywords = Array.isArray(group) ? group : [group];

//       const exists = groupKeywords.some((keyword) =>
//         answer.includes(normalize(keyword))
//       );

//       if (exists) {
//         found++;
//       }
//     });

//     const ratio = keywords.length > 0 ? found / keywords.length : 0;
//     const correct = ratio >= 0.75;

//     setIsCorrect(correct);
//     setSubmitted(true);
//     setShowPopup(true);
//   };

//   const closePopup = () => {
//     setShowPopup(false);
//     setCanContinue(true);
//   };

//   const handleMoveOn = () => {
//     setTimeout(() => {
//       onNextQuestion();
//     }, 180);
//   };

//   const resetQuestion = () => {
//     setUserAnswer("");
//     setSubmitted(false);
//     setIsCorrect(false);
//     setShowPopup(false);
//     setCanContinue(false);
//   };

//   return (
//     <div id="open-question">
//       <div className="question-container">
//         <div className="question-header">
//           <h2 className="question-title">{title}</h2>
//         </div>

//         <div className="areacontainr">
//           <p className="question-subtitle">{subtitle}</p>
//           <textarea
//             value={userAnswer}
//             onChange={(e) => setUserAnswer(e.target.value)}
//             className="answer-box"
//             placeholder="כתבו את תשובתכם כאן..."
//             disabled={submitted}
//           ></textarea>
//         </div>

//         <button
//           className="submit-btn"
//           onClick={submitAnswer}
//           disabled={submitted || userAnswer.trim() === ""}
//         >
//           הגש תשובה
//         </button>

//         {submitted && (
//           <div className={`result-message ${isCorrect ? "correct" : "wrong"}`}>
//             {isCorrect ? <span>✔ תשובה נכונה!</span> : <span>✖ התשובה אינה מלאה.</span>}
//           </div>
//         )}

//         {canContinue && (
//           <button className="move-on" onClick={handleMoveOn}>
//             המשך
//           </button>
//         )}

//         {/* Popup */}
//         {showPopup && (
//           <div className="popup-overlay">
//             <div className="popup">
//               <button className="close-btn" onClick={closePopup}>
//                 ✕
//               </button>

//               {isCorrect === false && <h3>בואו נקרא את התשובה המדויקת </h3>}
//               {isCorrect === true && <h3> נכון! בכל מקרה שתדעו-</h3>}
//               <p>{correctAnswer}</p>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default function OpenQuestion({ questionNum, onPointsUpdated, onNextQuestion }) {
//   const [userAnswer, setUserAnswer] = useState("");
//   const [submitted, setSubmitted] = useState(false);
//   const [isCorrect, setIsCorrect] = useState(false);
//   const [showPopup, setShowPopup] = useState(false);
//   const [canContinue, setCanContinue] = useState(false);
//   const [earnedPoints, setEarnedPoints] = useState(0);

//   // מנגנון ה-watch של Vue עבור שינוי מספר שאלה
//   useEffect(() => {
//     resetQuestion();
//   }, [questionNum]);

//   // Computed Properties ב-React באמצעות useMemo
//   const currentQuestion = useMemo(() => {
//     return json.openQuestions[questionNum];
//   }, [questionNum]);

//   const title = currentQuestion ? currentQuestion.title : "";
//   const subtitle = currentQuestion ? currentQuestion.subtitle : "";
//   const correctAnswer = currentQuestion ? currentQuestion.correct : "";
//   const keywords = currentQuestion ? currentQuestion.keywords : [];

//   const normalize = (text) => {
//     return text
//       .toLowerCase()
//       .replace(/[.,!?()]/g, "")
//       .replace(/\s+/g, " ")
//       .trim();
//   };

//   const submitAnswer = () => {
//     if (!userAnswer.trim()) return;

//     const answer = normalize(userAnswer);
//     let found = 0;

//     keywords.forEach((group) => {
//       const groupKeywords = Array.isArray(group) ? group : [group];

//       const exists = groupKeywords.some((keyword) =>
//         answer.includes(normalize(keyword))
//       );

//       if (exists) {
//         found++;
//       }
//     });

//     const ratio = keywords.length > 0 ? found / keywords.length : 0;
//     const correct = ratio >= 0.75;
//     const points = correct ? 10 : 0;

//     setIsCorrect(correct);
//     setEarnedPoints(points);
//     setSubmitted(true);
//     setShowPopup(true);
//   };

//   const closePopup = () => {
//     setShowPopup(false);
//     setCanContinue(true);
//   };

//   const handleMoveOn = () => {
//     onPointsUpdated(earnedPoints);

//     setTimeout(() => {
//       onNextQuestion();
//     }, 180);
//   };

//   const resetQuestion = () => {
//     setUserAnswer("");
//     setSubmitted(false);
//     setIsCorrect(false);
//     setShowPopup(false);
//     setCanContinue(false);
//     setEarnedPoints(0);
//   };

//   return (
//     <div id="open-question">
//       <div className="question-container">
//         <div className="question-header">
//           <h2 className="question-title">{title}</h2>
//         </div>

//         <div className="areacontainr">
//           <p className="question-subtitle">{subtitle}</p>
//           <textarea
//             value={userAnswer}
//             onChange={(e) => setUserAnswer(e.target.value)}
//             className="answer-box"
//             placeholder="כתבו את תשובתכם כאן..."
//             disabled={submitted}
//           ></textarea>
//         </div>

//         <button
//           className="submit-btn"
//           onClick={submitAnswer}
//           disabled={submitted || userAnswer.trim() === ""}
//         >
//           הגש תשובה
//         </button>

//         {submitted && (
//           <div className={`result-message ${isCorrect ? "correct" : "wrong"}`}>
//             {isCorrect ? <span>✔ תשובה נכונה!</span> : <span>✖ התשובה אינה מלאה.</span>}
//           </div>
//         )}

//         {canContinue && (
//           <button className="move-on" onClick={handleMoveOn}>
//             המשך
//           </button>
//         )}

//         {/* Popup */}
//         {showPopup && (
//           <div className="popup-overlay">
//             <div className="popup">
//               <button className="close-btn" onClick={closePopup}>
//                 ✕
//               </button>

//               {isCorrect === false && <h3>בואו נקרא את התשובה המדויקת </h3>}
//               {isCorrect === true && <h3> נכון! בכל מקרה שתדעו-</h3>}
//               <p>{correctAnswer}</p>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }