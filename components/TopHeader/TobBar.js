import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import MyText from '../utils/MyText';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { Motion } from '@legendapp/motion';
import PickYearMonth from './PickYearMonth';
import Style from '../../assets/style/styles';

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
        <View className="w-11/12 mx-auto py-2">
          <View className="flex-row justify-between items-center">
            <View className="flex-row items-center gap-2 justify-between">
              <TouchableOpacity onPress={() => monthHandler('decrease')}>
                <SimpleLineIcons
                  name="arrow-left"
                  size={15}
                  color={Style.textColor}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <MyText
                  className="font-semibold text-base capitalize"
                  onPress={pickmyHandler}>
                  {`${months[monthEffect]} ${yearEffect}`}
                </MyText>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => monthHandler('increase')}>
                <SimpleLineIcons
                  name="arrow-right"
                  size={15}
                  color={Style.textColor}
                />
              </TouchableOpacity>
            </View>
            <View>
              <MyText>Balance</MyText>
              <MyText className="text-green-500">1,34,450</MyText>
            </View>
            <View className="flex-row justify-between items-center gap-5">
              <AntDesign name="search1" size={20} color={Style.textColor} />
              <Feather name="bookmark" size={20} color={Style.textColor} />
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
