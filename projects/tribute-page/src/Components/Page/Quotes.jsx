import React from 'react';

const List = [
  'And lowers it when he\'s going to dodge, m\'lady.',
  'Hold the door....',
  'holdthedoor...',
  'holthdor...',
  'holdor...',
  'hodor...',
  'hodor...',
  'hodor.',
];

const Quotes = () => (
  <div className="tribute__quotes">
    <h3>Memorable Quotes</h3>
    <ul>{List.map((d, i) => (
      <li key={`quote:${i}`}><q>{d}</q></li>
    ))}</ul>
  </div>
);

export default Quotes;
