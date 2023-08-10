import { GrLinkedin } from "react-icons/gr";
import { GrGithub } from "react-icons/gr";
import { BiSolidDownload } from "react-icons/bi";
import { BiSolidDownArrowAlt } from "react-icons/bi";

import "./about.css";

export default function About() {
  return (
    <>
      <div className="about">
        <div className="container">
          <h1 className="about__heading">
            Viraj <span className="blue-color">Chavan</span>
          </h1>
          <p className="about__subtitle">
            Samarth Empire, Khutwad Nagar, ITI bridge, Nashik - 8625069841 -{" "}
            <a className="about__email blue-color">virajchavan308@gmail.com</a>
          </p>
          <p className="about__para">
            I'm a versatile project manager with an extensive understanding of
            financial organizations, strong skills in project execution,
            business process improvement and change management and a solid
            background in technology. I have learnt and gained team management
            skills throughout diverse experiences. My areas of expertise
            includes project management, lean six sigma and scrum master
            techniques, team management and business analysis.
          </p>

          <a className="download__btn">
            <BiSolidDownload />
            download my resume
          </a>
          <div className="icon__flex">
            <a className="icon__link">
              <GrLinkedin size={35} />
            </a>
            <a className="icon__link">
              <GrGithub size={35} />
            </a>
          </div>
          <a href="#education" className="down__btn">
            <BiSolidDownArrowAlt size={45} color="rgb(87, 86, 86)" />
          </a>
        </div>
      </div>
    </>
  );
}
