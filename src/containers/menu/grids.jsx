import React from "react";
import { connect } from "react-redux";

import TreeviewMenu from "components/sidebar/treeview/treeview-menu";
import TreeviewItem from "components/sidebar/treeview/treeview-item";
import TreeviewNotification from "components/sidebar/treeview/treeview-notification";

const Grids = ({ notifications }) => {
  return (
    <li className="treeview" onClick={ e => console.log(e.target) }>
          <a href="#">
            <i className="fa fa-share"></i> <span>Multilevel</span>
            <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul className="treeview-menu" >
            <li><a href="#"><i className="fa fa-circle-o"></i> Level One</a></li>        
            <li className="treeview">
              <a href="#"><i className="fa fa-circle-o"></i> Level One
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right"></i>
                </span>
              </a>
              <ul className="treeview-menu">
                <li><a href="#"><i className="fa fa-circle-o"></i> Level Two</a></li>
                <li className="treeview">
                  <a href="#"><i className="fa fa-circle-o"></i> Level Two
                    <span className="pull-right-container">
                      <i className="fa fa-angle-left pull-right"></i>
                    </span>
                  </a>
                  <ul className="treeview-menu">
                    <li><a href="#"><i className="fa fa-circle-o"></i> Level Three</a></li>
                    <li><a href="#"><i className="fa fa-circle-o"></i> Level Three</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><a href="#"><i className="fa fa-circle-o"></i> Level One</a></li>
          </ul>
      </li>
  );
};

const mapStateToProps = ({ notifications: { data } }) => ({
  notifications: data.notifications.length
});

export default connect(mapStateToProps)(Grids);
