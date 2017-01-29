import React from 'react';
import { task } from '../../../lib/tribute-page';
import TaskBar from '../../../lib/taskbar';

const config = {
  OBJECTIVE: {
    className: 'objective',
    EXAMPLE: { className: 'link' },
  },
  USER_STORIES: {
    className: 'stories',
    STORY: { className: 'story' },
  },
  TITLE: { className: 'title' },
  CHALLENGE: { className: 'link' },
};

const Task = () => (<TaskBar task={task} config={config} />);

export default Task;
