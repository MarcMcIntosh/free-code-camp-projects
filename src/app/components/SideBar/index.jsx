import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import List, { ListItem, ListItemText } from 'material-ui/List';
// import List from 'material-ui/List';
import { Link } from 'react-router-dom';

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ open: !this.state.open });
  }
  render() {
    return (<div>
      <Button onClick={this.handleClick}>O</Button>
      <Drawer
        open={this.state.open}
        onRequestClose={this.handleClick}
      >
        <List>
          <ListItem button component={Link} to="/">
            <ListItemText primary="Projects" />
          </ListItem>
          <Divider />
          <ListItem button component={Link} to="/about">
            <ListItemText primary="About" />
          </ListItem>
        </List>
      </Drawer>
    </div>);
  }
}

export default SideBar;
