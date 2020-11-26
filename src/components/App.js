import React from 'react';
import Profile from './Profile/Profile';
import Statistics from './Statistic/Statistics';
import FriendList from './FriendList/FriendList';
import FriendListItem from './FriendList/FriendListItem';
import TransactionHistory from './Transaction/TransactionHistory';
import TransactionHistoryItem from './Transaction/TransactionHistoryItem';
import items from '../data/transactions.json';
import statisticalData from '../data/statistical-data.json';
import user from '../data/user.json';
import friends from '../data/friend-list.json';

function App() {
  return (
    <div>
      <div>
        <Profile user={user} />
      </div>
      <div>
        <Statistics title="Upload stats" stats={statisticalData} />
      </div>
      <div>
        <FriendList>
          <FriendListItem friends={friends} />
        </FriendList>
      </div>
      <div>
        <TransactionHistory>
          <TransactionHistoryItem items={items} />
        </TransactionHistory>
      </div>
    </div>
  );
}
export default App;
