import React, { useState } from "react";
import textGunnerData from "/textGunner.json";
import AmericanQuestion from "../AmericanQuestion/AmericanQuestion.jsx";
import OpenQuestion from "../OpenQuestion/OpenQuestion.jsx";
import SelectMultiple from "../SelectMultiple/SelectMultiple.jsx";


export default function GunnerPage({ onToEnd }) {
  // מעקב אחרי מספר השאלה הנוכחית (1 עד 9)
  const [question, setQuestion] = useState(1);
  const [totalPoints, setTotalPoints] = useState(0);

  const goToNextQuestion = () => {
    setQuestion((prev) => prev + 1);
  };

  const addPoints = (points) => {
    setTotalPoints((prev) => prev + points);
  };

  const toFinal = (points) => {
    const finalScore = totalPoints + points;
    if (onToEnd) {
      onToEnd(finalScore);
    }
  };

  return (
    <>
      <div className="gunner-screen">
        {/* שאלה 1: שאלה פתוחה (מהי תרגולת?) */}
        {question === 1 && (
          <OpenQuestion 
            key={1}
            questionData={textGunnerData.openQuestions[0]} 
            onPointsUpdated={addPoints} 
            onNextQuestion={goToNextQuestion} 
          />
        )}

        {/* שאלה 2: שאלת רב-בחירה (עקרונות מנחים) */}
        {question === 2 && (
          <SelectMultiple 
            key={2}
            questionData={textGunnerData.selectMultiple[0]} 
            onPointsUpdated={addPoints} 
            onNextQuestion={goToNextQuestion} 
          />
        )}

        {/* שאלה 3: שאלה אמריקאית (איזה שעה בצידוד...) */}
        {question === 3 && (
          <AmericanQuestion 
            key={3}
            questionData={textGunnerData.american[0]} 
            onPointsUpdated={addPoints} 
            onNextQuestion={goToNextQuestion} 
          />
        )}

        {/* שאלה 4: שאלה אמריקאית (צוות פינוי לאחור) */}
        {question === 4 && (
          <AmericanQuestion 
            key={4}
            questionData={textGunnerData.american[1]} 
            onPointsUpdated={addPoints} 
            onNextQuestion={goToNextQuestion} 
          />
        )}

        {/* שאלה 5: שאלה פתוחה (מפקד פצוע - תפקיד התותחן) */}
        {question === 5 && (
          <OpenQuestion 
            key={5}
            questionData={textGunnerData.openQuestions[1]} 
            onPointsUpdated={addPoints} 
            onNextQuestion={goToNextQuestion} 
          />
        )}

        {/* שאלה 6: שאלה אמריקאית (נהג פצוע) */}
        {question === 6 && (
          <AmericanQuestion 
            key={6}
            questionData={textGunnerData.american[2]} 
            onPointsUpdated={addPoints} 
            onNextQuestion={goToNextQuestion} 
          />
        )}

        {/* שאלה 7: שאלה פתוחה (פגיעה במכלי סולר) */}
        {question === 7 && (
          <OpenQuestion 
            key={7}
            questionData={textGunnerData.openQuestions[2]} 
            onPointsUpdated={addPoints} 
            onNextQuestion={goToNextQuestion} 
          />
        )}

        {/* שאלה 8: שאלה פתוחה (שריפה בתא מנוע - צידוד 9 או 3) */}
        {question === 8 && (
          <OpenQuestion 
            key={8}
            questionData={textGunnerData.openQuestions[3]} 
            onPointsUpdated={addPoints} 
            onNextQuestion={goToNextQuestion} 
          />
        )}

        {/* שאלה 9: שאלה אמריקאית (משולבת מפקד פצוע ושריפה) */}
        {question === 9 && (
          <AmericanQuestion 
            key={9}
            questionData={textGunnerData.american[3]} 
            onPointsUpdated={addPoints} 
            onNextQuestion={toFinal} 
          />
        )}
      </div>
    </>
  );
}