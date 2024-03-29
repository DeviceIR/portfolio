// components/Skills.js
import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <ul className="skill-list">
        <li>
          <i class="devicon-html5-plain colored skillIcon"> </i>
          HTML
        </li>
        <li>
          <i class="devicon-css3-plain colored skillIcon"> </i>
          CSS
        </li>
        <li>
          <i class="devicon-javascript-plain colored skillIcon"> </i>
          JavaScript
        </li>
        <li>
          <i class="devicon-react-original colored skillIcon"> </i>
          React
        </li>
        <li>
          <i class="devicon-tailwindcss-original colored skillIcon"> </i>
          Tailwind
        </li>
        {/* Add more skills as needed */}
      </ul>
    </section>
  );
}

export default Skills;
