import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { toggleMenu } from '../../actions';
import Button from '../Buttons';

const mapStateToProps = state => ({
  isActive: state.menu,
});
const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(toggleMenu()),
});

const Toggle = ({ isActive, ...props }) => (
  <Button {...props}><i className="material-icons">{
    (isActive) ? 'close' : 'menu'
  }</i>Menu</Button>
);

Toggle.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Toggle);
