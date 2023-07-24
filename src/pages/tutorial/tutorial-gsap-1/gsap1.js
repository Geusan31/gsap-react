import logo from "./logo.svg";
import "./gsap1.css";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

function GSAP1() {
  let logoItem = useRef(null);
  let textItem = useRef(null);

  useEffect(() => {
    console.log(logoItem);
    gsap.to(logoItem, {
      duration: 0.8,
      y: -20,
      opacity: 1,
      // ease: 'power3.easeOut'
    });
    gsap.to(textItem, {
      duration: 0.8,
      y: -20,
      opacity: 1,
      delay: 1
      // ease: 'power3.easeOut'
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img
          ref={(el) => {
            logoItem = el;
          }}
          src={logo}
          className="App-logo"
          alt="logo"
        />
        <p ref={(el) => {textItem = el}}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default GSAP1;
