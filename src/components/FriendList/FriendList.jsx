import FriendListItem from "./FriendListItem/FriendListItem";

const FriendsList = ({ friends }) => {
  return (
    <ul>
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
