import React from "react";

import "./index.scss";
import TypeWriter from "typewriter-effect";
import { SummaryCountUp, WorshipServices } from "../../components/layout";
import ContactSection from "../../components/ContactSection";

const HomePage = () => {
  return (
    <>
      <div className="homepage" id="homepage">
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

        <SummaryCountUp />
      </div>
      <WorshipServices />
      <ContactSection />
    </>
  );
};

export default HomePage;
