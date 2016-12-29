import React from 'react';
import task from './task';
import TaskBar from './src/Components/TaskBar/index';
import Page from './src/Components/Page/Container';

const App = () => (
  <main className="app_container">
    <TaskBar
      title={task.title}
      objective={task.objective}
      story={task.story}
    />
    <Page />
  </main>
);

export default App;
