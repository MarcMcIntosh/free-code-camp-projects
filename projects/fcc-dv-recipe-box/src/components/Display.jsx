import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = () => ({});
const mapDispatchToProps = () => ({});

const Display = () => (
  <section className="content"> Hello </section>
);

export default connect(mapStateToProps, mapDispatchToProps)(Display);
