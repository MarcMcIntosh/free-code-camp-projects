import React from 'react';
import Li from './Li';

const TaskBar = ({ title, objective, story }) => {
  const tasks = objective.map((d, i) => (
    <Li type="Objective" text={d} index={i} />
  )).concat(story.map((d, i) => (
    <Li type="User Story" text={d} index={i} />
  )));

  return (
    <div className="taskbar">
      <div className="taskbar__title">{title}</div>
      <ul className="taskbar__tasks">{tasks}</ul>
    </div>);
};

TaskBar.propTypes = {
  title: React.PropTypes.string.isRequired,
  objective: React.PropTypes.Array,
  story: React.PropTypes.Array,
};

export default TaskBar;
