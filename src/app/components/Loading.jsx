import React from 'react';
import { func } from 'prop-types';

const Loading = (props, { classnames }) => (<div className={classnames('loading')} {...props} >Loading...</div>);

Loading.contextTypes = { classnames: func.isRequired };

export default Loading;
