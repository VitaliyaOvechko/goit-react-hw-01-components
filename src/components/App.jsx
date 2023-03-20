import { Profile } from "./Profile/Profile";
import user from 'data/user';
import { Statistics } from "./Statistics/Statistics";
import data from 'data/data';
import { Friends } from "./Friend/FriendList";
import friends from 'data/friends';
import { TransactionHistory } from "./TransactionHistory/TransactionItem";
import items from 'data/transactions';



export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <Friends friends={friends} />
      <TransactionHistory items={items} />
    </div>
  );
};
