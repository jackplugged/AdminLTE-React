import React, { PureComponent } from "react";

// Setup a timer
var timeout;

// Listen for resize events
window.addEventListener("resize", function(event) {
    console.log("no debounce");

    // If there's a timer, cancel it
    if (timeout) {
      window.cancelAnimationFrame(timeout);
    }

    // Setup the new requestAnimationFrame()
    timeout = window.requestAnimationFrame(function() {
      // Run our scroll functions
      console.log("debounced");
    });
  },
  false
);


class MainContentWrapper extends PureComponent {


  active = () =>{
    this.fix()

    const body = document.querySelector('body')

    /*
    $('body').removeClass(ClassName.holdTransition);


    if (this.options.resetHeight) {
      $('body, html, ' + Selector.wrapper).css({
        'height'    : 'auto',
        'min-height': '100%'
      });
    }

    if (!this.bindedResize) {
      $(window).resize(function () {
        this.fix();
        

        $(Selector.logo + ', ' + Selector.sidebar).one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
          this.fix();         
        }.bind(this));
      }.bind(this));

      this.bindedResize = true;
    }

    $(Selector.sidebarMenu).on('expanded.tree', function () {
      this.fix();      
    }.bind(this));

    $(Selector.sidebarMenu).on('collapsed.tree', function () {
      this.fix();   
    }.bind(this));
    */
  }

  fix  = () =>{

  }

  render() {
    return (
      <div className="content-wrapper">
        <section className="content">{this.props.children}</section>
      </div>
    );
  }
}

export default MainContentWrapper;
