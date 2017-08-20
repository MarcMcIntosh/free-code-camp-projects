import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';

const Page = ({
  title,
  link,
  meta,
  children,
}) => (<div>
  <Helmet title={title} link={link} meta={meta} />
  { children }
  <ul>
    <li><Link to="/tribute-page/about">About</Link></li>
    <li><Link to="/tribute-page">main</Link></li>
  </ul>
</div>);

Page.propTypes = {
  title: PropTypes.string,
  link: PropTypes.array,
  meta: PropTypes.array,
  children: PropTypes.node.isRequired,
};

Page.defaultProps = { title: '', link: [], meta: [] };

export default Page;
