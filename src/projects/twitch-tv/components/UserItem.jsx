import React from 'react';
import { string, func, any, number, oneOfType } from 'prop-types';

const UserItem = (props, { classnames }) => (<li className={classnames('twitch-tv__user-item')}>
  <img src={props.logo} alt="" className={classnames('twitch-tv__user-item__start-detail')} title={props.message || props.status} />
  <span className={classnames('twitch-tv__user-item__text')}>
    <b>{props.display_name || props.name}</b>
    <span className={classnames('twitch-tv__user-item__text__secondary')}>{props.error || props.game}</span>
  </span>
  <a
    className={classnames('twitch-tv__user-item__end-detail', {
      'twitch-tv__user-item__end-detail--disabled': !!props.error,
      'twtich-tv__user-item__end-detail--active': !!props.stream,
    })}
    href={props.url || void (0)}
    target="_blank"
    rel="noopener norefferer"
  >{(props.stream && 'live_tv') || (props.error && 'error_outline') || 'info_outline'}</a>
</li>);

UserItem.propTypes = { logo: string, display_name: string, name: string, game: string, error: string, message: string, status: oneOfType([string, number]), url: string, stream: any };

UserItem.defaultProps = { logo: '', display_name: '', name: '', game: '', error: '', message: '', status: '', url: '', stream: false };

UserItem.contextTypes = { classnames: func.isRequired };

export default UserItem;
