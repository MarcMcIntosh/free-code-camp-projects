import React from 'react';
import { func } from 'prop-types';
import Dropzone from 'react-dropzone';
import Img from '../assets/ic_note_add_black_48px.svg';

const FileInput = ({ onDrop }, { classnames }) => (<ul className={classnames('list', 'list--avatar')}>
  <li className={classnames('list-item')}>
    <Dropzone className={classnames('list-item__start-detail')} onDrop={onDrop}><img src={Img} alt="" /></Dropzone>
    <span className={classnames('list-item__text')}>File size app
      <span className={classnames('list-item__secondary')}>Click, or drag and drop file over Icon</span>
    </span>
  </li>
</ul>);

FileInput.propTypes = { onDrop: func.isRequired };
FileInput.contextTypes = { classnames: func.isRequired };

export default FileInput;
