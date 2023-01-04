import React from 'react';
import { ScrollView, View } from 'react-native';
import MyText from '../../utils/MyText';

const TransantionList = () => {
  const transactions = [
    {
      id: 1,
      account: 'Account',
      category: 'Salary',
      amount: '5,12,456',
    },
    {
      id: 2,
      account: 'Bank',
      category: 'Other',
      amount: '5,12,456',
    },
    {
      id: 3,
      account: 'Cash',
      category: 'Health',
      amount: '5,12,456',
    },
    {
      id: 4,
      account: 'Account',
      category: 'Salary',
      amount: '5,12,456',
    },
    {
      id: 5,
      account: 'Bank',
      category: 'Other',
      amount: '5,12,456',
    },
    {
      id: 6,
      account: 'Cash',
      category: 'Health',
      amount: '5,12,456',
    },
  ];

  return (
    <ScrollView className="mb-40">
      {transactions.map(el => (
        <View className="bg-white shadow-sm mb-2" key={el.id}>
          <View className="border-b border-gray-100">
            <View className="w-11/12 py-2 mx-auto flex-row justify-between items-center">
              <View className="flex-row justify-between items-center gap-2">
                <MyText className="text-black text-lg">18</MyText>
                <MyText>Fri</MyText>
                <MyText>11.2022</MyText>
              </View>
              <MyText className="text-green-500">$ 5,12,333</MyText>
              <MyText className="text-red-500">$ 5,12,346</MyText>
            </View>
          </View>
          <View className="w-11/12 mx-auto">
            <View className="py-3 flex-row justify-between items-center">
              <MyText className="text-xs w-3/12">{el.account}</MyText>
              <MyText className="text-xs w-3/12">{el.category}</MyText>
              <MyText className="text-green-500">$ {el.amount}</MyText>
            </View>
            <View className="py-3 flex-row justify-between items-center">
              <MyText className="text-xs w-3/12">Bank</MyText>
              <MyText className="text-xs w-3/12">Other</MyText>
              <MyText className="text-red-500">$ 1,72,789</MyText>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default TransantionList;
