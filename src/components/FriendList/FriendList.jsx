import s from "../FriendList/FriendList.module.css";
import FriendListItem from "./FriendListItem/FriendListItem";

const FriendsList = ({ friends }) => {
  return (
    <ul className={s.friendList}>
      {friends.map(({ id, name, isOnline, avatar }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
};

export default FriendsList;
