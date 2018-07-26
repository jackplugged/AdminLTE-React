import React, { Component } from "react";
import PropTypes from "prop-types";

class Treeview extends Component {
  constructor(props){
    super(props);      
    this.state = {
      open: false
    }
  }
  
  handleClick = e =>{
    e.preventDefault();  

    const treeview = document.querySelectorAll('.treeview-menu');
    Array.from(treeview).map(child =>  {
      console.log(child.style.display);
      //   child.classList.add('menu-open');
      
    
         //let treeview2 = document.querySelectorAll('.treeview-menu');
         //child.classList.add('menu-open');
    });
   
       this.setState(prevState => ({
         ['open']: !prevState.open
    }));   
  }

  shouldComponentUpdate(nextProps, nextState){
   // console.log(this.state.open, nextState.open);
    return true;
  }

  render(){
   const { id, icon, text, href, children, notifications } = this.props;
    return (
    <li onClick={this.handleClick} id={'_'+id} className={`treeview ${this.state.open ? 'menu-open' : ''}`}>
      <a href={href}>
        <i className={`fa fa-${icon}`} /> <span>{text}</span>
        <span className="pull-right-container">
        <i className="fa fa-angle-left pull-right" />    
          {notifications}  
        </span>
      </a>
      {children(this.state)}
    </li>
    )
  }
}

Treeview.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

Treeview.defaultProps = {
  href: "",
  icon: "list",
  text: "Menu"
};

export default Treeview;
