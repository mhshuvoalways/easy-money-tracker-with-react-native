import React, { useState } from 'react';
import { Text, View } from 'react-native';
import TobBar from '../components/TopHeader/TobBar';
import SelectTime from '../components/TopHeader/SelectTime';
import TransactionTop from '../components/Transactions/List/TransactionTop';
import TransantionList from '../components/Transactions/List/TransantionList';
import AddBtn from '../components/Transactions/TransAdd/AddBtn';

const TransScreen = () => {
  const [pickymModal, setPickmyModal] = useState(false);
  const [yearEffect, setYearEffect] = useState(new Date().getFullYear());
  const [monthEffect, setMonthEffect] = useState(new Date().getMonth());

  const yearHandler = value => {
    if (value === 'increase') {
      setYearEffect(prev => prev + 1);
    } else {
      setYearEffect(prev => prev - 1);
    }
  };

  const monthHandler = value => {
    if (value === 'increase') {
      setMonthEffect(prev => prev + 1);
      if (monthEffect === 11) {
        setMonthEffect(0);
        setYearEffect(prev => prev + 1);
      }
    } else if (value === 'decrease') {
      setMonthEffect(prev => prev - 1);
      if (monthEffect === 0) {
        setMonthEffect(11);
        setYearEffect(prev => prev - 1);
      }
    }
  };

  const pickmyHandler = () => {
    setPickmyModal(!pickymModal);
  };

  return (
    <View>
      <TobBar
        pickymModal={pickymModal}
        pickmyHandler={pickmyHandler}
        yearEffect={yearEffect}
        monthEffect={monthEffect}
        yearHandler={yearHandler}
        monthHandler={monthHandler}
      />
      <SelectTime />
      <TransactionTop />
      <TransantionList />
      <AddBtn />
      {pickymModal && (
        <Text className="absolute inset-0 h-screen" onPress={pickmyHandler}></Text>
      )}
    </View>
  );
};

export default TransScreen;
