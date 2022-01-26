import React from 'react';
import Coin from './Coin';
import Transact from './Transact';

const Transaction = ({ coins }) => {
  return (
    <div>
      <Transact />
      <Coin coins={coins} />
    </div>
  );
};

export default Transaction;
