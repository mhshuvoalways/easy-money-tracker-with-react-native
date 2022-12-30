import React from 'react';
import { Text, View } from 'react-native';

const TopBarSelectTime = () => {
  return (
    <View className="bg-white shadow-sm">
      <View className="w-11/12 mx-auto py-2 flex-wrap flex-row justify-between items-center">
        <Text style={{ color: '#40B5AD' }}>Daily</Text>
        <Text>Calender</Text>
        <Text>Weekly</Text>
        <Text>Monthly</Text>
        <Text>Total</Text>
      </View>
    </View>
  );
};

export default TopBarSelectTime;
