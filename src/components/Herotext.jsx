import React from "react";

//Added animation for a little flair
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

const HeroText = () => {
  return (
    <main className="heroText">
      <h4>Add some fun</h4>

      <h1>
        <span>Exciting Vacation Opportunities</span>
      </h1>

      <section className="paragraph">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum expedita
          voluptas inventore nisi dolores sint dignissimos quos deleniti
          blanditiis rem architecto commodi ab, reprehenderit, incidunt ut quod
          eaque pariatur fugit, nulla accusamus aliquam? Ducimus ratione
          corrupti natus distinctio similique cumque deserunt alias saepe
          repudiandae non!
        </p>
      </section>
    </main>
  );
};

export default HeroText;
