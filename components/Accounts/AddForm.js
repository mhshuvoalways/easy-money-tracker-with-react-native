import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import MyText from '../utils/MyText';
import Style from '../../assets/style/styles';

const AddForm = () => {
  const [currencyToggle, setCurrencyToggle] = useState(false);
  return (
    <View>
      <View className="flex-row gap-3 items-center justify-between mt-1">
        <MyText className="w-2/12">Group</MyText>
        <TextInput className="font-semibold border-b border-gray-300 px-3 w-9/12 text-gray-500" />
      </View>
      <View className="flex-row gap-3 items-center justify-between mt-1">
        <MyText className="w-2/12">Name</MyText>
        <TextInput className="font-semibold border-b border-gray-300 px-3 w-9/12 text-gray-500" />
      </View>
      <View className="flex-row gap-3 items-center justify-between mt-1 relative">
        <MyText className="w-2/12">Balance</MyText>
        <TextInput
          placeholder="$ 100,00"
          className="font-semibold border-b border-gray-300 px-3 w-9/12 text-gray-500"
          placeholderTextColor="#9CA3AF"
        />
        <MyText
          className="absolute right-0 border w-9 h-9 border-[#40B5AD] text-[#40B5AD] rounded-md text-center py-2"
          onPress={() => setCurrencyToggle(!currencyToggle)}>
          $
        </MyText>
      </View>
      {currencyToggle && (
        <View className="flex-row gap-3 items-center justify-between mt-1">
          <MyText className="w-2/12">Currency</MyText>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="px-5 w-9/12">
            <MyText
              className="border w-9 h-9 border-[#40B5AD] text-[#40B5AD] rounded-md text-center py-2 mr-2"
              onPress={() => setCurrencyToggle(!currencyToggle)}>
              $
            </MyText>
            <MyText
              className="border w-9 h-9 border-gray-500 rounded-md text-center py-2 mr-2"
              onPress={() => setCurrencyToggle(!currencyToggle)}>
              $
            </MyText>
            <MyText
              className="border w-9 h-9 border-gray-500 rounded-md text-center py-2 mr-2"
              onPress={() => setCurrencyToggle(!currencyToggle)}>
              $
            </MyText>
            <MyText
              className="border w-9 h-9 border-gray-500 rounded-md text-center py-2 mr-2"
              onPress={() => setCurrencyToggle(!currencyToggle)}>
              $
            </MyText>
            <MyText
              className="border w-9 h-9 border-gray-500 rounded-md text-center py-2 mr-2"
              onPress={() => setCurrencyToggle(!currencyToggle)}>
              $
            </MyText>
            <MyText
              className="border w-9 h-9 border-gray-500 rounded-md text-center py-2 mr-2"
              onPress={() => setCurrencyToggle(!currencyToggle)}>
              $
            </MyText>
            <MyText
              className="border w-9 h-9 border-gray-500 rounded-md text-center py-2 mr-2"
              onPress={() => setCurrencyToggle(!currencyToggle)}>
              $
            </MyText>
            <MyText
              className="border w-9 h-9 border-gray-500 rounded-md text-center py-2 mr-2"
              onPress={() => setCurrencyToggle(!currencyToggle)}>
              $
            </MyText>
            <MyText
              className="border w-9 h-9 border-gray-500 rounded-md text-center py-2 mr-2"
              onPress={() => setCurrencyToggle(!currencyToggle)}>
              $
            </MyText>
          </ScrollView>
        </View>
      )}
      <View className="flex-row gap-3 items-center justify-between mt-1">
        <MyText className="w-2/12">Note</MyText>
        <TextInput className="font-semibold border-b border-gray-300 px-3 w-9/12 text-gray-500" />
      </View>
      <TouchableOpacity>
        <MyText className="bg-[#40B5AD] py-3 rounded-md text-white text-center text-base mt-10">
          Save
        </MyText>
      </TouchableOpacity>
    </View>
  );
};

export default AddForm;
