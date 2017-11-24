import React, { Component } from 'react';
import Drawer from "material-ui/Drawer";

import "./WsSidebar.css"

class WsSidebar extends Component {
  constructor(props) {
    super(props);

    this.styles = {
      "height": "100%",
      "background-color": "#333",
      "color": "white"
    }
  }
  render() {
    return (
      <Drawer
        open={true}
        openSecondary={true}>
        <div style={this.styles}>
          <div className="sidebar-header"></div>
          <b>Gallery</b>
        </div>
      </Drawer>
    );
  }
}

export default WsSidebar;
