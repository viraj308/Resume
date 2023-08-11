import About from "./About";
import Education from "./Education";
import Interests from "./Interests";
import Skills from "./Skills";

import "./main.css";

export default function Main() {
  return (
    <div className="main">
      <About />
      <Education />
      <Skills />
      <Interests />
    </div>
  );
}
