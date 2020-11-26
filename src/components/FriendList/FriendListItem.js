import React from 'react';
import PropTypes, { string, bool, number } from 'prop-types';
import s from './FriendList.module.css';

function FriendList({ friends }) {
  const { avatar, name, isOnline } = friends;
  return friends.map(friend => (
    <li key={friend.id} className={s.friendListItem}>
      <span
        className={
          (s.friendOnlineStatus = isOnline ? s.isOnline : s.isOffline)
        }
        isOnline={isOnline}
      ></span>
      <img
        className={s.friendImg}
        src={avatar}
        alt={name}
        width="48"
      />
      <p className={s.friendName}>{friend.name}</p>
    </li>
  ));
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: string.isRequired,
      name: string.isRequired,
      isOnline: bool.isRequired,
      id: number.isRequired,
    }),
  ).isRequired,
};

export default FriendList;
