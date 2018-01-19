import React from 'react';
import { func, array } from 'prop-types';
import LatestItem from './LatestItem';

const Latest = ({ recent, onClick }, { classnames }) => (<div className={classnames('latest')}>
  <div className={classnames('latest__link')}>
    <a href="" type="button" role="button" tabIndex="0" onClick={onClick} className={classnames('latest__button')}>latest searches</a>
  </div>
  <ul className={classnames('list')}>
    {recent.map(doc => (<LatestItem key={doc._id} term={doc.term} time={doc.updated_at} />))}
  </ul>
</div>);

Latest.propTypes = { recent: array.isRequired, onClick: func.isRequired };
Latest.contextTypes = { classnames: func.isRequired };

export default Latest;
