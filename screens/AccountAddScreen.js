import React from 'react';
import { View } from 'react-native';
import AccountTop from '../components/Accounts/AccountTop';
import AddForm from '../components/Accounts/AddForm';

const AccountAddScreen = () => {
  return (
    <View className="w-11/12 mx-auto">
      <AccountTop />
      <AddForm />
    </View>
  );
};

export default AccountAddScreen;
