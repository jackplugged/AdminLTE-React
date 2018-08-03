
import React, { Component } from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import { connect } from "react-redux";

import { openTreviewMenu } from "store/treeview/actions";

class TreeviewItem extends Component{

  constructor(props){
    super(props);
    this.state = {
      isOpen: false
    };
  }
  
  shouldComponentUpdate(nextProps, nextState){
    return true;
  }

  treeviewParent = event =>{
    const element = event.target;
    const parent = element.parentElement;
    const child = element.nextElementSibling;
  
    console.log(this.props.dropdown);

    return event;
  }


  handleToggle = e => {   
    e.preventDefault();

    this.treeviewParent(e);

    this.setState( prevState => (
      {...prevState, isOpen: !prevState.isOpen }
    ));
  }

  render(){      
    const { href, icon, text, menu, dropdown } = this.props;
    const treeview = dropdown ? "treeview" : "";
    const isOpen = this.state.isOpen ? "menu-open" : "";

    return (
     <li onClick={this.handleToggle} className={`${treeview} ${isOpen}`}>
      <Link to={href}>
        <i className={`fa fa-${icon}`} />
        {text}
        <span className="pull-right-container">
          {this.notifications}
          {!dropdown || <small className="fa fa-angle-left pull-right" />}
        </span>
      </Link>
      {menu(this.state)}
    </li>
    );
  }
}

TreeviewItem.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

TreeviewItem.defaultProps = {
  href: "",
  icon: "circle-o",
  text: "Menu Item",
  menu: ()=>{},
  level: null
};

const mapStateToProps = ({ notifications: { data }, treeview: { menu } }) => ({
  notifications: data.notifications.length,
  tasks: data.tasks.length,
  messages: data.messages.length,
  treeview: menu,
});

const mapDispatchToProps = dispatch => ({
  openTreviewMenu: () => dispatch(openTreviewMenu("parent"))
});

export default connect( mapStateToProps, mapDispatchToProps )(TreeviewItem);


