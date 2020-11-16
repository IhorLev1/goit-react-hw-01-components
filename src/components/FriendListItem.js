import React from 'react';
import PropTypes, { string, bool, number } from 'prop-types';
import styles from './module.css/FriendList.module.css';

function FriendList({ friends }) {
  return friends.map(friend => (
    <li key={friend.id} className={styles.friendListItem}>
      <span
        className={
          (styles.friendOnlineStatus = friend.isOnline
            ? styles.isOnline
            : styles.isOffline)
        }
        isOnline={friend.isOnline}
      ></span>
      <img
        className={styles.friendImg}
        src={friend.avatar}
        alt={friend.name}
        width="48"
      />
      <p className={styles.friendName}>{friend.name}</p>
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
