import React from 'react';
import PropTypes, { number, string } from 'prop-types';
import styles from '../components/module.css/Profile.module.css';

function Profile({ user }) {
  const { name, tag, location, avatar, stats } = user;
  const { followers, views, likes } = stats;

  return (
    <div className={styles.container}>
      <div className={styles.profileBlock}>
        <img className={styles.profileImg} src={avatar} alt={name} />
        <p className={styles.profileName}>{name}</p>
        <p className={styles.profileText}>{tag}</p>
        <p className={styles.profileText}>{location}</p>
      </div>
      <ul className={styles.infoBlock}>
        <li className={styles.infoBlockItem}>
          <span className={styles.itemTitle}>Followers</span>
          <span className={styles.itemInfo}>{followers}</span>
        </li>
        <li className={styles.infoBlockItem}>
          <span className={styles.itemTitle}>Views</span>
          <span className={styles.itemInfo}>{views}</span>
        </li>
        <li className={styles.infoBlockItem}>
          <span className={styles.itemTitle}>Likes</span>
          <span className={styles.itemInfo}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

// TODO
Profile.defaultProps = {
  location: 'unknown',
  avatar: 'unknown',
};

Profile.propTypes = {
  user: PropTypes.exact({
    name: string.isRequired,
    tag: string.isRequired,
    location: string,
    avatar: string,
    stats: PropTypes.exact({
      followers: number.isRequired,
      views: number.isRequired,
      likes: number.isRequired,
    }).isRequired,
  }),
};

export default Profile;
