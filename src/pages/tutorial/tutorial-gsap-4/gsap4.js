import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { leftArrow, rightArrow } from "./assets";
import "./gsap4.css";

const testimonials = [
  {
    name: "Julia Cameron",
    title: "Creative Director, VISA",
    image: `${require("./asstes/image3.jpg")}`,
    quote: "It's all good, I was amazed at the quality of the Design. We've seen amazing result already.",
  },
  {
    name: "Mark Jacobs",
    title: "Tech Lead, Google",
    image: `${require("./asstes/image.jpg")}`,
    quote: "The rebranding has really helped our business. Definitely worth the investment.",
  },
  {
    name: "Lisa Bearings",
    title: "Brand Coordinator, Facebook",
    image: `${require("./asstes/image2.jpg")}`,
    quote: "The service was exellent. Absolutely wonderfull A complete redesign did it for us.",
  },
];

export default function GSAP4() {
  let imageList = useRef(null);
  let testimonialList = useRef(null);
  const imageWidth = 200;

  const [state, setState] = useState({
    isActive1: true,
    isActive2: false,
    isActive3: false,
  });

  useEffect(() => {
    gsap.to(testimonialList.children[0], {
      duration: 0,
      opacity: 1,
    });
  }, []);

  const slideLeft = (index, duration, multiple = 1) => {
    gsap.to(imageList.children[index], {
      duration: duration,
      x: -imageWidth * multiple,
      ease: "power3.Out",
    });
  };

  const slideRight = (index, duration, multiple = 1) => {
    gsap.to(imageList.children[index], {
      duration: duration,
      x: imageWidth * multiple,
      ease: "power3.Out",
    });
  };

  const scale = (index, duration) => {
    gsap.from(imageList.children[index], {
      duration: duration,
      scale: 1.2,
      ease: "power3.Out",
    });
  };

  const fadeOut = (index, duration) => {
    gsap.to(testimonialList.children[index], {
      duration: duration,
      opacity: 0,
      ease: "power3.Out",
    });
  };

  const fadeIn = (index, duration) => {
    gsap.to(testimonialList.children[index], {
      duration: duration,
      opacity: 1,
      delay: 1,
      ease: "power3.Out",
    });
  };

  const nextSlide = () => {
    if (imageList.children[0].classList.contains("active")) {
      setState({ isActive1: false, isActive2: true });
      slideLeft(0, 1);
      slideLeft(1, 1);
      scale(1, 1);
      slideLeft(2, 1);
      slideLeft(2, 0);
      fadeOut(0, 1);
      fadeIn(1, 1);
    } else if (imageList.children[1].classList.contains("active")) {
      setState({ isActive2: false, isActive3: true });
      //Image transition
      slideRight(0, 1);
      slideLeft(1, 1, 2);
      slideLeft(2, 1, 2);
      scale(2, 1);
      //content transition
      fadeOut(1, 1);
      fadeIn(2, 1);
    } else if(imageList.children[2].classList.contains('active')) {
      setState({isActive1: true, isActive3: false})
      slideLeft(2, 1, 3)
      slideLeft(0, 1, 0)
      slideLeft(1, 0, 0)
      scale(0, 1)
      fadeOut(2, 1)
      fadeIn(0, 1)
    }
  };

  const prevSlide = () => {
    if(imageList.children[0].classList.contains('active')) {
      setState({isActive1: false, isActive3: true})
      slideLeft(2, 0, 3)
      slideLeft(2, 1, 2)
      slideRight(0, 1)
      slideRight(1, 1)
      scale(2, 1)
      fadeOut(0, 1)
      fadeIn(2, 1)
    } else if(imageList.children[1].classList.contains('active')) {
      setState({isActive2: false, isActive1: true})
      //Image transition
      slideLeft(0, 0, 1);
      slideLeft(0, 1, 0);
      slideLeft(1, 1, 0)
      slideRight(2, 1, 0)
      scale(0, 1);
      //content transtion
      fadeOut(1, 1);
      fadeIn(0, 1);
    } else if(imageList.children[2].classList.contains('active')) {
      setState({isActive3: false, isActive2: true})
      slideLeft(1, 0, 2);
      slideLeft(1, 1, 1);
      slideLeft(2, 1, 1)
      slideRight(0, 1, 2)
      scale(1, 1);
      //content transtion
      fadeOut(2, 1);
      fadeIn(1, 1);
    }
  }

  return (
    <div className="container">
      <div className="container-testimonial">
        <div className="left arrow" onClick={prevSlide}>
          <span>
            <img src={leftArrow} alt="left arrow" />
          </span>
        </div>
        <div className="testimonial">
          <div className="image">
            <ul ref={(el) => (imageList = el)}>
              <li className={state.isActive1 ? "active" : ""}>
                <img src={testimonials[0].image} alt={testimonials[0].name} />
              </li>
              <li className={state.isActive2 ? "active" : ""}>
                <img src={testimonials[1].image} alt={testimonials[1].name} />
              </li>
              <li className={state.isActive3 ? "active" : ""}>
                <img src={testimonials[2].image} alt={testimonials[2].name} />
              </li>
            </ul>
          </div>
          <div className="content">
            <ul ref={(el) => (testimonialList = el)}>
              <li className={state.isActive1 ? "active" : ""}>
                <h1 className="quote">{testimonials[0].quote}</h1>
                <h3 className="name">{testimonials[0].name}</h3>
                <h4 className="title">{testimonials[0].title}</h4>
              </li>
              <li className={state.isActive2 ? "active" : ""}>
                <h1 className="quote">{testimonials[1].quote}</h1>
                <h3 className="name">{testimonials[1].name}</h3>
                <h4 className="title">{testimonials[1].title}</h4>
              </li>
              <li className={state.isActive3 ? "active" : ""}>
                <h1 className="quote">{testimonials[2].quote}</h1>
                <h3 className="name">{testimonials[2].name}</h3>
                <h4 className="title">{testimonials[2].title}</h4>
              </li>
            </ul>
          </div>
        </div>
        <div className="right arrow" onClick={nextSlide}>
          <span>
            <img src={rightArrow} alt="right arrow" />
          </span>
        </div>
      </div>
    </div>
  );
}
