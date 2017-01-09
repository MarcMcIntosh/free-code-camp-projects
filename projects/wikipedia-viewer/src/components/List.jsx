import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import ListItem from './ListItem';

const List = (props) => {
  const { children, results, ...args } = props;
  delete args.dispatch;
  return (<div {...args}>{results.map((d) => {
    const { title, extract, pageid } = d;
    return (<children
      key={pageid}
      title={title}
      extract={extract}
    />);
  })}</div>);
};

List.propTypes = {
  results: PropTypes.array,
  children: PropTypes.element,
};

List.defaultProps = {
  children: ListItem,
};

const mapStateToProps = state => ({
  results: state.results,
});


export default connect(mapStateToProps)(List);
