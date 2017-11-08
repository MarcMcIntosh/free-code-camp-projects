import React from 'react';
import { string, func } from 'prop-types';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

const ErrorMessage = ({
  message,
  onClick,
}) => ((!message) ? false : (<Grid item xs={6}>
  <Paper>
    <Typography type="caption" gutterBottom align="center">Error</Typography>
    <Typography gutterBottom noWrap>{message}</Typography>
    <div>
      <Button onClick={onClick}>Reload</Button>
    </div>
  </Paper>
</Grid>));

ErrorMessage.propTypes = {
  message: string.isRequired,
  onClick: func.isRequired,
};

export default ErrorMessage;
