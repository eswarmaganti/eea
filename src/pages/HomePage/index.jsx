import React from "react";

import "./index.scss";
import TypeWriter from "typewriter-effect";
import { WorshipServices } from "../../components/layout";

const HomePage = () => {
  return (
    <>
      <div className="homepage">
        <h3 className="greeting">WELCOME</h3>
        <div className="hero-text-wrapper">
          <h1 className="hero-head">Emmanuel</h1>
          <h1 className="hero-subhead">Evangilical Association</h1>
        </div>
        <TypeWriter
          options={{
            strings: [
              "Reaching the Unreached.",
              "Planting Churches.",
              "Making Disciples.",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <WorshipServices />
    </>
  );
};

export default HomePage;
