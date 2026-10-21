import React, { useState } from 'react';
import './SelectionPage.css';

const ROLES = [
  {
    id: 'gunner',
    title: 'תותחן',
    colorClass: 'blue-brick',
    image: 'src/assets/media/solider-gunner.png', 
  },
  {
    id: 'loader',
    title: 'טען',
    colorClass: 'red-brick',
    image: 'src/assets/media/solider-loader.png',
  },
  {
    id: 'driver',
    title: 'נהג',
    colorClass: 'green-brick',
    image: 'src/assets/media/solider-driver.png',
  },
];

function SelectionPage({ onSelection }) {
  const [selectedRole, setSelectedRole] = useState(ROLES[0]);

  return (
    <>
      <div className='selection-screen'>
        <header className="page-logos">
          <img src="/src/assets/media/logo-right.png" alt="סמל יחידה" />
          <img src="/src/assets/media/logo-left.png" alt="סמל יחידה" />
        </header>

        <h1 className="title">בחר את התפקיד שלך:</h1>

        <div className="role-selection-container" dir="rtl">
          <div className="bricks-container">
            {ROLES.map((role) => {
              const isSelected = selectedRole.id === role.id;
              return (
                <button
                  key={role.id}
                  className={`lego-brick ${role.colorClass} ${isSelected ? 'selected' : ''}`}
                  onClick={() => setSelectedRole(role)}
                >
                  <div className="lego-studs">
                    <span className="stud"></span>
                    <span className="stud"></span>
                    <span className="stud"></span>
                    <span className="stud"></span>
                  </div>
                  
                  <div className="brick-body">
                    <span className="brick-text">{role.title}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* כאן אנחנו מעבירים את התפקיד הנוכחי לפונקציה של האב */}
          <button
            className="start-button2"
            onClick={() => onSelection(selectedRole)}
            aria-label="התחל"
          >
            <img
              src="/src/assets/media/lego-btn2.png"
              alt="התחל"
            />
          </button>

          <div className="character-container">
            <img
              src={selectedRole.image}
              alt={`איש לגו - ${selectedRole.title}`}
              className="character-image"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SelectionPage;