
import React, { Component } from "react";

/*
window.addEventListener("resize", resizeThrottler, false);

var resizeTimeout;
function resizeThrottler() {
  // ignore resize events as long as an actualResizeHandler execution is in the queue
  if ( !resizeTimeout ) {
    resizeTimeout = setTimeout(function() {
      resizeTimeout = null;
      actualResizeHandler();
     // The actualResizeHandler will execute at a rate of 15fps
     }, 500);
  }
}

function actualResizeHandler() {
  // handle the resize event
   console.log('alterado');
}
*/

class MainContentWrapper extends Component {
  componentDidMount() {
    this.active();
  }

  active = () => {
    this.fix();

    let resetHeight = true;
    let bindedResize = false;
    let html = "";

    let body = document.querySelector("body").classList;
    body.remove("hold-transition");

    if (resetHeight) {
      html = document.querySelector("body, html, .wrapper");
      html.style.height = "auto";
      html.style.minHeight = "100%";
    }

    if (!bindedResize) {
     //this.fix();
      bindedResize = true;
    }
  };

  fix = () => {
    const footerHeight  = document.querySelector(".main-footer").getBoundingClientRect().height || 0;
    const neg = document.querySelector(".main-header").getBoundingClientRect().height || 0;
    const windowHeight =  window.outerHeight || 0;
    const sidebarHeight = document.querySelector('.sidebar').getBoundingClientRect().height || 0;

    console.log(footerHeight, neg, windowHeight, sidebarHeight);

  };

  render() {
    return (
      <div className="content-wrapper">
        <section className="content">{this.props.children}</section>
      </div>
    );
  }
}

export default MainContentWrapper;
