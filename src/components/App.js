import React from 'react';
import Profile from './Profile.js';
import Statistics from '../components/Statistics.js';
import FriendList from '../components/FriendList.js';
import FriendListItem from '../components/FriendListItem.js';
import TransactionHistory from '../components/TransactionHistory.js';
import TransactionHistoryItem from '../components/TransactionHistoryItem.js';
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
