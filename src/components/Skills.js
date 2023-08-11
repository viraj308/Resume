import { FaPython } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaGit } from "react-icons/fa";

import "./skills.css";

export default function Skills() {
  return (
    <div id="skills" className="skills">
      <div className="container">
        <h2 className="skills__heading">skills</h2>
        <div className="flex__container">
          <div className="col-1">
            <h4 className="col-1__heading">expertise</h4>
            <div className="donut__chart__wrapper">
              <div className="expertise__chart" id="donutchart"></div>
            </div>
          </div>
          <div className="col-2">
            <h4>tools</h4>
            <p className="tools__text">
              nodejs, npm <br />
              powerpoint, word, excel <br />
              VS code, firefox developer edition
            </p>
          </div>
        </div>
        <div className="lang__and__tools">
          <h4>programming languages and tools</h4>
          <div className="icons-flex">
            <FaPython size={40} />
            <FaHtml5 size={40} />
            <FaCss3 size={40} />
            <FaJs size={40} />
            <FaReact size={40} />
            <FaNodeJs size={40} />
            <FaGit size={40} />
            <FaGithub size={40} />
          </div>
        </div>
        <div className="languages">
          <h4 className="languages__heading">Languages</h4>
          <ul className="languages__list">
            <li className="english">
              english
              <div className="progress__bar">
                <div className="progress"></div>
              </div>
            </li>
            <li className="marathi">
              marathi
              <div className="progress__bar">
                <div className="progress"></div>
              </div>
            </li>
            <li className="hindi">
              hindi
              <div className="progress__bar">
                <div className="progress"></div>
              </div>
            </li>
            <li className="japanese">
              japanese
              <div className="progress__bar">
                <div className="progress"></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
