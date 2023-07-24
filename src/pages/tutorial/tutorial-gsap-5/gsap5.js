import React, { useEffect, useRef } from "react";
import "./gsap5.css";
import ArrowRight from "./assets/arrow-right.svg";
import Boy from "./assets/boy.webp";
import Girl from "./assets/girl.webp";
import { gsap } from "gsap";

export default function GSAP5() {
  let image = useRef(null);
  let content = useRef(null);
  let app = useRef(null);

  const tl = gsap.timeline({ delay: 0.8 });

  useEffect(() => {
    const imageBoy = image.firstElementChild;
    const imageGirl = image.lastElementChild;

    const headingFirst = content.children[0].children[0];
    const headingSecond = headingFirst.nextSibling;
    const headingThird = headingSecond.nextSibling;
    const contentP = content.children[1];
    const button = content.children[2];

    gsap.to(app, {
      duration: 0,
      css: {
        visibility: "visible",
      },
    });

    tl.from(
      imageGirl,
      {
        duration: 1.2,
        y: 1280,
        ease: "power3.out",
      },
      "Start"
    )
      .from(
        imageGirl.firstElementChild,
        {
          duration: 2,
          scale: 1.6,
          ease: "power3.out",
        },
        0.2
      )
      .from(
        imageBoy,
        {
          duration: 1.2,
          y: 1280,
          ease: "power3.out",
        },
        0.2
      )
      .from(
        imageBoy.firstElementChild,
        {
          duration: 2,
          scale: 1.6,
          ease: "power3.out",
        },
        0.2
      );

      tl.from([headingFirst.children, headingSecond.children, headingThird.children], {
        delay: .8,
        duration: 1,
        y: 44,
        ease: 'power3.out',
        stagger: .15
      }, 'Start').from(contentP, {
        duration: 1,
        y:20,
        opacity:0,
        ease: 'power3.out'
      }, 1.4).from(button, {
        duration: 1,
        y:20,
        opacity:0,
        ease: 'power3.out'
      }, 1.6)
  }, [tl]);
  return (
    <div className="hero" ref={(el) => (app = el)}>
      <div className="container">
        <div className="text" ref={(el) => (content = el)}>
          <h1>
            <div className="hero-content-line">
              <div className="hero-content-line-inner">Relieving the burden</div>
            </div>
            <div className="hero-content-line">
              <div className="hero-content-line-inner">of disease caused</div>
            </div>
            <div className="hero-content-line">
              <div className="hero-content-line-inner">by behaviors.</div>
            </div>
          </h1>
          <p>Better treats serious cardiometabolic diseases to transform lives and reduce healthcore utilization through the use of digital therapeutics</p>
          <h3>
            Explore{" "}
            <span>
              <img src={ArrowRight} alt="" />
            </span>
          </h3>
        </div>
        <div className="container-image">
          <div class="hero-images" ref={(el) => (image = el)}>
            <div className="hero-image boy">
              <img src={Boy} alt="boy" />
            </div>
            <div className="hero-image girl">
              <img src={Girl} alt="girl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
