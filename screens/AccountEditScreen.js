import React, { useState } from 'react';
import { View } from 'react-native';
import EditTop from '../components/Accounts/EditTop';
import EditAccount from '../components/Accounts/EditAccount';

const AccountEditScreen = () => {
  const [deleteTop, setDeleteTop] = useState(false);

  const deleteTopHandler = () => {
    setDeleteTop(!deleteTop);
  };

  return (
    <View>
      <EditTop deleteTopHandler={deleteTopHandler} deleteTop={deleteTop}/>
      <EditAccount deleteTop={deleteTop} />
    </View>
  );
};

export default AccountEditScreen;
