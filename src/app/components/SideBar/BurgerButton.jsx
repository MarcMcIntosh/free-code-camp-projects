import React from 'react';
import { object } from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Menu from 'material-ui-icons/Menu';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

const BurgerButton = ({
  classes,
  ...props
}) => (<Button className={classes.button} {...props}><Menu /></Button>);

BurgerButton.propTypes = {
  classes: object.isRequired,
};

export default withStyles(styles)(BurgerButton);
