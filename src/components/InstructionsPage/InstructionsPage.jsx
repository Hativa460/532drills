
import "./InstructionsPage.css";
import soldierImage from "/src/assets/media/standing-solider.png"

 function InstructionsPage({ onReady }) {
  return (
    <>
      <section className="instructions-screen" dir="rtl">

        <header className="page-logos">
          <img src="/src/assets/media/logo-left.png" alt="סמל יחידה" />
          <img src="/src/assets/media/logo-right.png" alt="סמל יחידה" />
        </header>

        <div className="speech-bubble">
          <div className="instructions-text">
            <p>
              חיילים! ברוכים הבאים
              <br />
              למבחני צמ״פ
            </p>

            <p>
              כאן תבחן על הידע שרכשתם
              <br />
              באימון המתקדם.
            </p>

            <p>
              שים לב חייל! המבחן הוא תלוי
              <br />
              תפקיד, לכל תפקיד יש מבחן
              <br />
              נפרד משלו.
            </p>

            <p className="ready-question">
              מוכן להיבחן?
            </p>
          </div>

          <button
            className="lego-ready-button"
            onClick={onReady}
            type="button"
          >
            <span className="lego-studs">
              <i />
              <i />
              <i />
              <i />
              <i />
            </span>
            <span className="lego-button-text">
              אני מוכן
            </span>
          </button>
        </div>

        <img
          className="soldier-image"
          src={soldierImage}
          alt="חייל"
        />

      </section>
    </>
  );
}

export default InstructionsPage;
