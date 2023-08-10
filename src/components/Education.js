import "./education.css";

export default function Education() {
  return (
    <div id="education" className="education">
      <div className="container">
        <h2 className="education__heading">education</h2>
        <div className="degree__section section">
          <h4 className="degree__heading">degrees</h4>
          <p className="degree__text">
            <h5 className="college__name">sandip university</h5>
            <p className="college__text">
              graduate school of engineering, nashik, india
            </p>
            <h5 className="degree__name">bachlor of technology</h5>
            <p className="degree__text">
              computer Science
              <br />
              <span className="blue-color">September 2021 - June 2025</span>
              <br />
              core subjects: web programming, data structures and alogrithms,
              microprocessor architectures, databases, operating systems etc.
            </p>
          </p>
        </div>
        <div className="certfication__section section">
          <h4 className="certification__heading">certifications</h4>
          <p className="certification__text">
            Kevin Powell, Responsive CSS and Layout - kevinpowell.org <br />
            Linux Operaing System - redhatlinux.org <br />
            Figma Designing Software - figma.org
          </p>
        </div>
        <div className="training__section section">
          <h4 className="training__heading">trainings</h4>
          <p className="training__text">
            Microprocessor and Architecture <br />
            Responsvie and interactive CSS <br />
            Python programming <br />
            Kotlin programming <br />
            Javascript workshop <br />
            Reactjs traning
          </p>
        </div>
      </div>
    </div>
  );
}
