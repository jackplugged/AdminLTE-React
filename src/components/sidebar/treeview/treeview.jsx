import React, { Component } from "react";
import PropTypes from "prop-types";

class Treeview extends Component {
  constructor(props){
    super(props);
    const { id } = this.props;
    this.state = {
      ['id_'+ id ]: false,
      id:id
    }
  }
  
  handleClick = e =>{
    e.preventDefault();    
    this.setState(prevState => ({
      //['id_'+ this.state ]: !prevState.open
    }));    
  }

  render(){
   const { icon, text, href, children, notifications } = this.props;
   console.log(this.state);
    return (
    <li onClick={this.handleClick} className={`treeview ${this.state.open ? 'menu-open' : ''}`}>
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
