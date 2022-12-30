import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { Motion } from '@legendapp/motion';
import PickYearMonth from './PickYearMonth';

const TobBar = ({
  pickymModal,
  pickmyHandler,
  yearEffect,
  monthEffect,
  yearHandler,
  monthHandler,
}) => {
  
  const months = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DES',
  ];

  return (
    <View>
      <View className="bg-white shadow-sm">
        <View className="w-11/12 mx-auto py-3">
          <View className="flex-row justify-between items-center">
            <View className="flex-row items-center gap-2 justify-between">
              <TouchableOpacity onPress={() => monthHandler('decrease')}>
                <SimpleLineIcons name="arrow-left" size={18} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Text className="text-lg capitalize" onPress={pickmyHandler}>
                  {`${months[monthEffect]} ${yearEffect}`}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => monthHandler('increase')}>
                <SimpleLineIcons name="arrow-right" size={18} />
              </TouchableOpacity>
            </View>
            <View>
              <Text className="font-bold">Balance</Text>
              <Text className="text-green-500">1,34,450</Text>
            </View>
            <View className="flex-row justify-between items-center gap-5">
              <AntDesign name="search1" size={20} />
              <Octicons name="filter" size={20} />
            </View>
          </View>
        </View>
      </View>
      <Motion.View
        animate={{
          opacity: pickymModal ? 1 : 0,
          scale: pickymModal ? 1 : 0.7,
          zIndex: 10,
        }}>
        <PickYearMonth
          months={months}
          yearHandler={yearHandler}
          yearEffect={yearEffect}
          pickmyHandler={pickmyHandler}
        />
      </Motion.View>
    </View>
  );
};

export default TobBar;
