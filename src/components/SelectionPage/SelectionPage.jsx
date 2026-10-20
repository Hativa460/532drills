import React, { useState } from 'react';
import './SelectionPage.css';

// הגדרת הנתונים עבור כל תפקיד: צבע, טקסט ותמונה מותאמת
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

function SelectionPage() {

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
                  {/* הליטות בחלק העליון של קוביית הלגו */}
                  <div className="lego-studs">
                    <span className="stud"></span>
                    <span className="stud"></span>
                    <span className="stud"></span>
                    <span className="stud"></span>
                  </div>
                  
                  {/* גוף הקובייה והטקסט */}
                  <div className="brick-body">
                    <span className="brick-text">{role.title}</span>
                  </div>
                </button>
              );
            })}
          </div>

          <button
            className="start-button"
            onClick={onSelection}
            aria-label="התחל לומדה"
          >
            <img
              src="/src/assets/media/lego-btn-start.png"
              alt="התחל לומדה"
            />
          </button>

          {/* דמות הלגו המשתנה למטה */}
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


  
  // return (
  //   <main className="page-wrapper" dir="rtl">
  //     <section className="learning-screen next-screen">
  //       <h1>בחר את התפקיד שלך</h1>

  //       <button id="btn-blue"></button>
  //       <p>
  //        אופציות
  //       </p>
  //     </section>
  //   </main>
  // );
}

export default SelectionPage;