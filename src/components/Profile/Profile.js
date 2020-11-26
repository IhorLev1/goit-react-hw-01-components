import React from 'react';
import PropTypes, { number, string } from 'prop-types';
import s from './Profile.module.css';

function Profile({ user }) {
  const { name, tag, location, avatar, stats } = user;
  const { followers, views, likes } = stats;

  return (
    <div className={s.container}>
      <div className={s.profileBlock}>
        <img className={s.profileImg} src={avatar} alt={name} />
        <p className={s.profileName}>{name}</p>
        <p className={s.profileText}>{tag}</p>
        <p className={s.profileText}>{location}</p>
      </div>
      <ul className={s.infoBlock}>
        <li className={s.infoBlockItem}>
          <span className={s.itemTitle}>Followers</span>
          <span className={s.itemInfo}>{followers}</span>
        </li>
        <li className={s.infoBlockItem}>
          <span className={s.itemTitle}>Views</span>
          <span className={s.itemInfo}>{views}</span>
        </li>
        <li className={s.infoBlockItem}>
          <span className={s.itemTitle}>Likes</span>
          <span className={s.itemInfo}>{likes}</span>
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
