import React from "react";
import Links from "./Links";

function About({links, biography}) {
  return (
    <div id="about">
      
      <h2>About Me</h2>
     {biography && biography.length> 1 ? <p>{biography}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links gitHub={links.github} linkedIn={links.linkedin} />
    </div>
  );
}

export default About;
