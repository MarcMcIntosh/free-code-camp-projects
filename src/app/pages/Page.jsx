import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

const Page = ({
  title,
  link,
  meta,
  children,
}) => (<div>
  <Helmet title={title} link={link} meta={meta} />
  { children }
</div>);

Page.propTypes = {
  title: PropTypes.string,
  link: PropTypes.array,
  meta: PropTypes.array,
  children: PropTypes.node.isRequired,
};

Page.defaultProps = { title: '', link: [], meta: [] };

export default Page;
