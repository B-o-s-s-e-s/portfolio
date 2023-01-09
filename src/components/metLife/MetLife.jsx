import React from "react";
import "./metlife.scss";
import background from "./metlifeGB.png";
import club from "./1.gif";
import blog from "./2.gif";
import message from "./Group 250.png";
export default function MetLife() {
  return (
    <div>
      <img src={background}></img>

      <div class="below">
        <div class="row">
          <div class="column">
            <h2>👨‍👩‍👧‍👦Team</h2>
            <p>MetLife Innovation</p>
          </div>
          <div class="column">
            <h2>🔧Tools</h2>
            <p>Figma, Github</p>
          </div>
          <div class="column">
            <h2>🗓️Timeline</h2>
            <p>
              6 weeks
              <br />
              Summer, 2022
            </p>
          </div>
        </div>
        {/* <div class="column left"></div> */}
        {/* <div class="column middle"> */}
        <h2>🚀Brief</h2>
        <p>
          Innovation project that creates a high tech experience to
          improve new hire's<b> onboarding experience</b> remotely in MetLife.
        </p>
        <br />
        <br />
        <h2>🧗🏽‍♂️Problem</h2>
        <p>
          As a MetLife Intern, I've noticed that{" "}
          <b>
            {" "}
            relationships with colleagues are harder to build while remote
            working.
          </b>
          <br />
          <br />
          <h2>📰Research</h2>
          New research by employee engagement and culture app, Totem, claims
          that 54% of workers feel it has been harder to build relationships
          with colleagues while working from home.
          <br />
          <br />
          Based on the
          <i> MetLife Onboarding Survey</i> result, “88% of employees believe
          that their company could improve when it comes to onboarding new
          employees” and “A great onboarding experience ensure 69% of employees
          stick with a company for three years” (metlife.com).
          <br />
          <br />
          Currently, MetLife offers numerous different platforms that new hires
          use to connect such as yammer, teams, and outlook. While these
          platforms do open gates to networking a new hire may not know where to
          start. These applications do not have networking forms within MetLife
          which may stray new hires away from having a good onboarding
          experience.
        </p>
        <br />
        <br />
        <h2>🐐Design Goal: Connect Empower Inspire</h2>
        <p>
          1. &nbsp;Consolidates <b>all networking forms</b>(Message, Club, Event,
          Blog, Calendar) into<b> one </b>place.
          <br />
          2. Creates <b>high tech experience</b> to improve remote onboarding
          experience.
        </p>
        <h3>Feature 1: Club</h3>
        <p>
          <b>
            <i>Strengthens Relations Between New Hires</i>
          </b>
          <br /> As college students, we have met most of
          friends through clubs. We recognize the impact thar clubs
          make on the first few months of being in a new environment.
        </p>
        <img className="metLifepic" src={blog}></img>
        <h3>Feature 2: Blog</h3>
        <p>
          <b>
            <i>Learn About Experiences And The New Hire Process</i>
          </b>
          <br /> The blog allows new hires to write about their experience and
          get relevant information during the New Hire Process. This shows new
          hires that they are not alone in the challenges that come with facing
          a new job. It also allows new hires to quickly get questions answered.
        </p>
        <img className="metLifepic" src={club}></img>

        <h3>Feature 3: Message & Profile</h3>
        <p>
          <b>
            <i>Gives a Glimpse Into Who We Are</i>
          </b>
          <br /> Our profile and message feature offers new hires a chance to
          get to know each other.
        </p>
        <img class="metLifepic" src={message}></img>
        <br />
        <br />
        <h2>🍡Visual Design Focus</h2>
        <p>
          MetConnect is a high touch tech experience that places a focus on
          <b> connection and inclusion </b> with the workplace. By allowing new
          hires to connect in areas where they share interests, we are forging a
          workforce that is not only passionate about work, but it is also about
          each other. Instead of us being disconnected while helping our
          customer. MetConnect ensures that we are working together. Most
          employees go into work everyday knowing that the company cares for
          them, but it would be even better if they knew that their coworkers
          also cared for them.{" "}
          <b>
            Metconnect motivates new hires to create strong bonds through shared
            experiences and open communication.
          </b>
        </p>
        <br />
        <br />
        <h2>🤔Reflection</h2>
        <p>
          I learned two main lessons. 1. When creating user experiences, we
          need to center our decisions based on research and what others truly need, not just
          what we need. 2. It is important to be caring with teammates, so we can be
          happy to work on the project together as a team.{" "}
        </p>
        {/* </div> */}
        {/* <div class="column right"></div> */}
      </div>
    </div>
  );
}
