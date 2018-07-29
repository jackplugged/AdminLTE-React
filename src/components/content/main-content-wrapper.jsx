
import React, { Component } from "react";
import debounceEvent from "utils/debounce-event";

class MainContentWrapper extends Component {

  constructor(props) {
    super(props);
    this.state = {
      minHeight: "100%"
    };
  }

  componentDidMount() {
    this.handleResize();

    let html, body;
    body = document.querySelector("body").classList;
    body.remove("hold-transition");

    html = document.querySelector("body, html, .wrapper");
    html.style.height = "auto";
    html.style.minHeight = "100%";

    window.addEventListener("resize", debounceEvent(() => this.handleResize(), 500), false);
  }

  handleResize = () => {
    const footerHeight = document.querySelector(".main-footer").getBoundingClientRect().height || 0;
    const headerHeight = (document.querySelector(".main-header").getBoundingClientRect().height || 0);
    const windowHeight = window.innerHeight || 0;
    const postSetHeight = (windowHeight - (footerHeight + headerHeight));

    this.setState({ minHeight: postSetHeight });
  }

  render() {
    return (
      <div className="content-wrapper" style={{ minHeight: this.state.minHeight }}>
        <section className="content">{this.props.children}</section>
      </div>
    );
  }
}

export default MainContentWrapper;
