import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import MyText from '../utils/MyText';
import Entypo from 'react-native-vector-icons/Entypo';
import Style from '../../assets/style/styles';

const CategoryAddForm = ({ subCount, decreaseSubHandler }) => {
  return (
    <View>
      <View className="flex-row gap-3 items-center justify-between mt-1">
        <MyText className="w-3/12">Category</MyText>
        <TextInput
          className="font-semibold border-b border-gray-300 px-3 w-8/12 text-gray-500"
          value={subCount.name}
        />
      </View>
      {subCount.sub.map((el, index) => (
        <View
          className="flex-row gap-3 items-center justify-between mt-1 relative"
          key={el.id}>
          <MyText className="w-4/12">Sub Category ({index + 1})</MyText>
          <TextInput
            className="font-semibold border-b border-gray-300 pl-3 pr-8 w-7/12 text-gray-500"
            value={el.name}
          />
          <MyText
            className="absolute right-0 top-3"
            onPress={() => decreaseSubHandler(el.id)}>
            <Entypo
              name="circle-with-cross"
              size={20}
              color={Style.textColor}
            />
          </MyText>
        </View>
      ))}
      <TouchableOpacity>
        <MyText className="bg-[#40B5AD] py-3 rounded-md text-white text-center text-base mt-10">
          Save
        </MyText>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryAddForm;
