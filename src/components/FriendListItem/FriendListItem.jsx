import css from './FriendListItem.module.css';

const FriendListItem = ({ id, isOnline, avatar, name }) => {
  return (
    <li key={id} className={css.item}>
      <span className={isOnline ? css.statusOnline : css.statusOffline}></span>
      <img
        className={css.avatar}
        src={avatar}
        alt={name + ' avatar'}
        width="48"
      />
      <p className={css.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;
