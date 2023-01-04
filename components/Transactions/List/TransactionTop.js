import React from 'react';
import { View } from 'react-native';
import MyText from '../../utils/MyText';

const TransactionTop = () => {
  return (
    <View className="bg-white shadow-sm">
      <View className="border-y border-gray-200">
        <View className="w-11/12 py-2 mx-auto flex-row justify-between items-center">
          <View>
            <MyText className="text-sm">Income</MyText>
            <MyText className="text-green-500">1,34,456</MyText>
          </View>
          <View>
            <MyText className="text-sm">Expenses</MyText>
            <MyText className="text-red-500">1,34,456</MyText>
          </View>
          <View>
            <MyText className="text-sm">Total</MyText>
            <MyText>1,34,456</MyText>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TransactionTop;
