import css from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ isOnline, avatar, name }) => (
        <FriendListItem isOnline={isOnline} avatar={avatar} name={name} />
      ))}
    </ul>
  );
};

export default FriendList;
