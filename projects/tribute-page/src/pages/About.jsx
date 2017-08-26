import React from 'react';
import { string, node } from 'prop-types';

const Ln = ({ url, children, ...props }) => (<a
  {...props}
  target="_blank"
  rel="noopener noreferrer"
  href={url}
>{children || url}</a>);

Ln.propTypes = { url: string.isRequired, children: node };
Ln.defaultProps = { children: false };

const About = () => (<div>
  <h3>About this task</h3>
  <ul>
    <li><b>Title:</b>Build a Tribute Page</li>

    <li><b>Link:</b><Ln url="https://www.freecodecamp.com/challenges/build-a-tribute-page" />.</li>

    <li><b>Objective:</b>{' '}Build an app that is functionally similar to{' '}<Ln url="https://codepen.io/FreeCodeCamp/full/NNvBQW/" >this</Ln>.</li>

    <li><b>User story:</b>{' '}I can view a tribute page with an image and text.</li>

    <li><b>User story:</b>{' '}I can click on a link that will take me to an external website with further information on the topic.</li>
  </ul>
</div>);

export default About;
