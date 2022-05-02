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
            <h4>Let me show you my home!</h4>
            <h1>
              <span>Many Activities!</span>
              <span>Make the most of your vacation!</span>
            </h1>
            <section className="paragraph">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci illum, molestiae ratione dicta reprehenderit cumque
                laborum obcaecati perspiciatis odit vel alias quas recusandae
                accusamus voluptatem consequatur natus consectetur architecto,
                tenetur amet hic! Quisquam, eos expedita id atque excepturi,
                reprehenderit totam, tenetur debitis ullam aut unde.
              </p>
            </section>
            <Button className="heroButton" />
          </main>
        </div>
      </Row>
    </div>
  );
};

export default HeroText;
