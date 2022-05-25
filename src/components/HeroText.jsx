import React from "react";

import Button from "./Button";

import { Row } from "react-bootstrap";
import Excursions from "./Excursions";

const HeroText = () => {
  return (
    <div>
      <Row>
        <div className="container">
          <div className="box-shadow2"></div>
          <div className="box-shadow"></div>
          <main className="heroText">
            <h4 className="splashy">Welcome!!!</h4>
            <div className="heroLine" />
            <section className="paragraph heroParagraph">
              <p className="heroParagraph">
                I am blessed to live in a tropical paradise and it would be my pleasure to share this with you! Whether you want a relaxing day on the beach, to enjoy a friendly atmosphere on an island bar, or an adventure in the jungle, I can help make your vacation magical!
              </p>
            </section>
            <Button />
          </main>
        </div>
      </Row>
    </div>
  );
};

export default HeroText;
