import React from 'react';
import { ScrollView, Text, View, Animated } from 'react-native';
import useSwipe from '../hoc/useSwipe';

const TransantionList = () => {
  const { panResponder, pan, dx } = useSwipe();

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
    <ScrollView>
      <Animated.View
        {...panResponder.panHandlers}
        style={{
          transform: [{ translateX: pan.x }],
        }}>
        {transactions.map(el => (
          <View className="bg-white shadow-sm mb-2" key={el.id}>
            <View className="border-b border-gray-100">
              <View className="w-11/12 py-2 mx-auto flex-row justify-between items-center">
                <View className="flex-row justify-between items-center gap-2">
                  <Text className="text-black text-lg">18</Text>
                  <Text>Fri</Text>
                  <Text>11.2022</Text>
                </View>
                <Text className="text-green-500">$ 5,12,333</Text>
                <Text className="text-red-500">$ 5,12,346</Text>
              </View>
            </View>
            <View className="w-11/12 mx-auto">
              <View className="py-3 flex-row justify-between items-center">
                <Text className="text-xs w-3/12">Account</Text>
                <Text className="text-xs w-3/12">Salary</Text>
                <Text className="text-green-500">$ 5,12,346</Text>
              </View>
              <View className="py-3 flex-row justify-between items-center">
                <Text className="text-xs w-3/12">Bank</Text>
                <Text className="text-xs w-3/12">Other</Text>
                <Text className="text-red-500">$ 1,72,789</Text>
              </View>
            </View>
          </View>
        ))}
      </Animated.View>
    </ScrollView>
  );
};

export default TransantionList;
