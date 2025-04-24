import { username, tag, location, avatar, stats } from "./data/userData.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";

import Profile from "./components/Profile/Profile";
import FriendsList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import Container from "./components/Container/Container";

const App = () => {
  return (
    <Container>
      <Profile
        name={username}
        tag={tag}
        location={location}
        image={avatar}
        stats={stats}
      />
      <FriendsList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </Container>
  );
};

export default App;
