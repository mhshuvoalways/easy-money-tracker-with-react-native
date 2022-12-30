import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const PickYearMonth = ({ months, yearHandler, yearEffect, pickmyHandler }) => {
  return (
    <View className="bg-white rounded-md absolute left-4 right-4 shadow-md">
      <View
        className="flex-row justify-between items-center py-3 px-3 rounded-t-md"
        style={{ backgroundColor: '#40B5AD' }}>
        <Text className="text-white font-bold text-lg">Date</Text>
        <TouchableOpacity onPress={pickmyHandler}>
          <AntDesign name="close" size={18} color="#ffffff" />
        </TouchableOpacity>
      </View>

      <View className="flex-row items-center gap-2 justify-between px-3 py-2">
        <TouchableOpacity onPress={() => yearHandler('decrease')}>
          <SimpleLineIcons name="arrow-left" size={18} />
        </TouchableOpacity>
        <Text className="text-lg">{yearEffect}</Text>
        <TouchableOpacity onPress={() => yearHandler('increase')}>
          <SimpleLineIcons name="arrow-right" size={18} />
        </TouchableOpacity>
      </View>

      <View className="flex-row items-center px-4 pt-10 justify-between gap-12 flex-wrap">
        {months.map((el, index) => (
          <TouchableOpacity key={index}>
            <Text className="font-bold">{el}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default PickYearMonth;
