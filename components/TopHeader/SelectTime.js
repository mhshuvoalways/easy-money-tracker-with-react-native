import React from 'react';
import { View } from 'react-native';
import MyText from '../utils/MyText';

const TopBarSelectTime = () => {
  return (
    <View className="bg-white shadow-sm">
      <View className="w-11/12 mx-auto py-2 flex-wrap flex-row justify-between items-center">
        <MyText style={{ color: '#40B5AD' }}>Daily</MyText>
        <MyText>Calender</MyText>
        <MyText>Weekly</MyText>
        <MyText>Monthly</MyText>
        <MyText>Total</MyText>
      </View>
    </View>
  );
};

export default TopBarSelectTime;
