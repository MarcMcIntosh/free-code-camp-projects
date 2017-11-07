import React from 'react';
import { bool } from 'prop-types';
import Typography from 'material-ui/Typography';
import { LinearProgress } from 'material-ui/Progress';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

const Loader = ({
  loading,
}) => ((loading) ? (<Grid item xs={6}><Paper>
  <Typography type="caption" gutterBottom align="center">Loading</Typography>
  <LinearProgress />
</Paper></Grid>) : false);

Loader.propTypes = { loading: bool.isRequired };

export default Loader;
