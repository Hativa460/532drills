import "./StartPage.css";

function StartPage({ onStart }) {
  return (
    <>
      <section className="start-screen" dir="rtl">

        <header className="page-logos">
          <img src="/src/assets/media/logo-left.png" alt="סמל יחידה" />
          <img src="/src/assets/media/logo-right.png" alt="סמל יחידה" />
        </header>

        <div className="hero-content">
          <h1 className="hero-title">
            <span>לומדת</span>
            <span>תרגולות</span>
            <span>צמ״פ</span>
          </h1>

          {/* כפתור ההתחלה */}
          <button
            className="start-button"
            onClick={onStart}
            aria-label="התחל לומדה"
          >
            <img
              src="/src/assets/media/lego-btn-start.png"
              alt="התחל לומדה"
            />
          </button>
        </div>

        <div className="tank-container">
          <img
<<<<<<< HEAD
            src="/src/assets/media/solider-gunner.png"
=======
            src="/src/assets/media/solider-tank-1.png"
>>>>>>> cb99bd4bde7644041e7702f9cd931f3a79d5e255
            alt="טנק"
            className="hero-tank"
          />
        </div>

      </section>
    </>
  );
}

export default StartPage;