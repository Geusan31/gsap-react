import React, { useEffect, useRef } from "react";
import "./gsap3.css";
import People from "./images/image.jpg";
import CssRulePlugin from "gsap/CSSRulePlugin";
import { gsap } from "gsap";

export default function GSAP3() {
  let container = useRef(null);
  let image = useRef(null);
  let imageReveal = CssRulePlugin.getRule(".img-container::after");

  const tl = gsap.timeline();

  useEffect(() => {
    tl.to(container, {
      duration: 0,
      css: {
        visibility: "visible",
      },
    })
      .to(imageReveal, {
        duration: 1.4,
        width: "0%",
        ease: "power2.inOut",
      })
      .from(image, {
        duration: 1.4,
        scale: 1.6,
        ease: "power2.inOut",
        delay: -1.6,
      }, "<");
  }, [imageReveal, tl]);
  return (
    <section className="main">
      <div className="container" ref={(el) => (container = el)}>
        <>
          <div className="img-container">
            <img src={People} alt="" ref={(el) => (image = el)} />
          </div>
        </>
      </div>
    </section>
  );
}
