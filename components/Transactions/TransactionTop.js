import React from 'react';
import { Text, View } from 'react-native';

const TransactionTop = () => {
  return (
    <View className="bg-white shadow-sm">
      <View className="border-y border-gray-200">
        <View className="w-11/12 py-2 mx-auto flex-row justify-between items-center">
          <View>
            <Text className="text-sm">Income</Text>
            <Text className="text-green-500">1,34,456</Text>
          </View>
          <View>
            <Text className="text-sm">Expenses</Text>
            <Text className="text-red-500">1,34,456</Text>
          </View>
          <View>
            <Text className="text-sm">Total</Text>
            <Text>1,34,456</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TransactionTop;
