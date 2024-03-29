// components/Projects.js
import React from "react";
import "./Projects.css";
import adminPanelImage from "../imgs/adminpanel.png";
import loginImage from "../imgs/login(ticket input).png";
import loggedInImage from "../imgs/loggedIn-Message.png";
import gamePlayImage from "../imgs/gamePlay.png";
import firstTryImage from "../imgs/my 1st try.png";
import secondTryImage from "../imgs/my 2st try.png";
import scoreboardImage from "../imgs/scoreboard.png";

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-number-one">
        <div className="text-box">
          <p className="title">1.Typing competition (in PGU university)</p>
        </div>
        <ul className="images-box">
          <li>
            <p>buy ticket from adminPanel</p>
            <img src={adminPanelImage} alt="adminPanel"></img>
          </li>
          <li>
            <p>loggin via that ticket</p>
            <img src={loginImage} alt="loginPage"></img>
          </li>
          <li>
            <p>loggin success and when you are ready submit</p>
            <img src={loggedInImage} alt="loggedInForm"></img>
          </li>
          <li>
            <p>
              Have fun with game<br></br>write a word and press space to pass it
              to database
            </p>
            <img src={gamePlayImage} alt="gameplay"></img>
          </li>
          <li>
            <p>its first try</p>
            <img src={firstTryImage} alt="firstTry"></img>
          </li>
          <li>
            <p>its second try</p>
            <img src={secondTryImage} alt="secondTry"></img>
          </li>
          <li>
            <p>
              its our records.Don't be afraid of these low wpm records,actually
              we have harder wpm formulla in comparision with other websites(to
              make differences😂)
            </p>
            <img src={scoreboardImage} alt="scoreboard"></img>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Projects;
