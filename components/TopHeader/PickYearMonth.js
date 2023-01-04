import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import MyText from '../utils/MyText';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Style from '../../assets/style/styles';

const PickYearMonth = ({ months, yearHandler, yearEffect, pickmyHandler }) => {
  return (
    <View className="bg-white rounded-md absolute left-4 right-4 border-r border-b border-l border-gray-200">
      <View
        className="flex-row justify-between items-center py-3 px-4 rounded-t-md"
        style={{ backgroundColor: '#40B5AD' }}>
        <MyText className="text-white font-bold text-lg">Date</MyText>
        <TouchableOpacity onPress={pickmyHandler}>
          <AntDesign name="close" size={18} color="#ffffff" />
        </TouchableOpacity>
      </View>

      <View className="flex-row items-center gap-2 justify-between px-4 py-2">
        <TouchableOpacity onPress={() => yearHandler('decrease')}>
          <SimpleLineIcons name="arrow-left" size={18} color={Style.textColor}/>
        </TouchableOpacity>
        <MyText className="text-lg">{yearEffect}</MyText>
        <TouchableOpacity onPress={() => yearHandler('increase')}>
          <SimpleLineIcons name="arrow-right" size={18} color={Style.textColor}/>
        </TouchableOpacity>
      </View>

      <View className="flex-row items-center px-4 pt-10 justify-between gap-14 flex-wrap">
        {months.map((el, index) => (
          <TouchableOpacity key={index}>
            <MyText className="font-bold">{el}</MyText>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default PickYearMonth;
