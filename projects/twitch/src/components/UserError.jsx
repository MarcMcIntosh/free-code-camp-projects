import React, { PropTypes } from 'react';
import UserImg from './UserImg';

const UserError = (props) => {
  const { name, message, logo, ...rest } = props;
  return (<div {...rest}>
    <UserImg name={name} logo={logo} />
    <p>{message}</p>
  </div>);
};

UserError.propTypes = {
  name: PropTypes.string,
  message: PropTypes.string,
  logo: PropTypes.string,
};
UserError.defaultProps = {
  name: '',
  message: '',
  logo: 'https://dummyimage.com/300x300/effee7/ff5457.jpg&text=%20ERROR',
};

export default UserError;
