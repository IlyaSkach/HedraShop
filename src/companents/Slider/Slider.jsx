import React, { useState, useEffect, useMemo } from "react";
import "./Slider.scss";

import slide1 from "./slide1.jpeg";
import slide2 from "./slide2.jpeg";
import slide3 from "./slide4.jpeg";

const Slider = () => {
  const slides = useMemo(
    () => [
      {
        image: slide1,
        text: "Доставка до 15 минут!<br />Delivery in up to 15 minutes!",
      },
      {
        image: slide2,
        text: "Алкоголь и закуски всегда в наличии. <br /> Alcohol and snacks are always available.",
      },
      {
        image: slide3,
        text: "Горячие акции каждый день! <br /> Hot promotions every day!",
      },
    ],
    []
  );

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isEnglish, setIsEnglish] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides]);

  useEffect(() => {
    const languageInterval = setInterval(() => {
      setIsEnglish((prev) => !prev);
    }, 5000);
    return () => clearInterval(languageInterval);
  }, []);

  const getText = (text) => {
    const [russian, english] = text.split('<br />');
    return isEnglish ? english : russian;
  };

  return (
    <section className="slider">
      <h2>{isEnglish ? "Why choose us?" : "Почему выбирают нас?"}</h2>
      <p className="description">
        {isEnglish
          ? "Hedra offers instant delivery of alcohol, snacks, and appetizers. Whether it's a party or a quiet evening at home, we're always here to deliver everything in 15 minutes!"
          : "Hedra предлагает моментальную доставку алкоголя, снеков и закусок. Не важно, вечеринка или спокойный вечер дома – мы всегда рядом, чтобы доставить всё за 15 минут!"}
      </p>
      <img src={slides[currentSlide].image} alt={`Slide ${currentSlide}`} />
      <p dangerouslySetInnerHTML={{ __html: getText(slides[currentSlide].text) }}></p>
    </section>
  );
};

export default Slider;
