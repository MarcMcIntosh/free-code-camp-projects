import React from 'react';
import { func } from 'prop-types';

const NotFound = (props, { classnames }) => (<div className={classnames('not-found')} {...props}><h1 className={classnames('not-found__text')}>Not Found</h1></div>);

NotFound.contextTypes = { classnames: func.isRequired };


export default NotFound;
