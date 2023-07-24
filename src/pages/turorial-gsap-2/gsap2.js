import React, { useEffect, useRef, useState } from "react";
import "./gsap2.css";
import { gsap } from "gsap";
export default function GSAP2() {
  let app = useRef(null);
  let circle1 = useRef(null);
  let circle2 = useRef(null);
  let circle3 = useRef(null);

  const [state, setState] = useState(false)

  const handleExpand = () => {
    gsap.to(circle2, {
      width: 100,
      height: 100,
      ease: 'power3.easeOut'
    })
    setState(true)
  }

  const handleShrink = () => {
    gsap.to(circle2, {
      width: 50,
      height: 50,
      ease: 'power3.easeOut'
    })
    setState(false)
  }

  useEffect(() => {
    // gsap.to('.red', {
    //   duration: .8,
    //   x: 100,
    //   opacity: 1,
    //   ease: 'power3.easeOut'
    // })
    // gsap.to('.blue', {
    //   duration: .8,
    //   x: 100,
    //   opacity: 1,
    //   delay: .5,
    //   ease: 'power3.easeOut'
    // })
    // gsap.to('.yellow', {
    //   duration: .8,
    //   x: 100,
    //   opacity: 1,
    //   delay: .7,
    //   ease: 'power3.easeOut'
    // })
    gsap.to(app, {
      duration: 0,
      css: {
        visibility: "visible",
      },
    });
    // gsap.fromTo(circle1, {
    //   opacity: 0,
    //   x: 40
    // }, {
    //   duration: .8,
    //   opacity: 1,
    //   x: 0,
    //   ease: 'power3.easeOut'
    // });
    // gsap.fromTo(circle2, {
    //   opacity: 0,
    //   x: 40
    // }, {
    //   duration: .8,
    //   opacity: 1,
    //   x: 0,
    //   delay: .2,
    //   ease: 'power3.easeOut'
    // });
    // gsap.fromTo(circle3, {
    //   opacity: 0,
    //   x: 40
    // }, {
    //   duration: .8,
    //   opacity: 1,
    //   x: 0,
    //   delay: .4,
    //   ease: 'power3.easeOut'
    // });
    gsap.fromTo(
      [circle1, circle2, circle3],
      {
        opacity: 0,
        x: 40,
      },
      {
        opacity: 1,
        x: 0,
        ease: "power3.easeOut",
        duration: 0.8,
        stagger: 0.2,
      }
    );
  }, []);
  return (
    <div ref={(el) => (app = el)} className="container">
      <div class="container-circles">
        <div class="circle red" ref={(el) => (circle1 = el)}></div>
        <div class="circle blue" onClick={state !== true ? handleExpand : handleShrink} ref={(el) => (circle2 = el)}></div>
        <div class="circle yellow" ref={(el) => (circle3 = el)}></div>
      </div>
    </div>
  );
}
