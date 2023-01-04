import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import MyText from '../utils/MyText';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import Style from '../../assets/style/styles';

const CategoryTop = ({ incomeExpenseSelect, increaseSubHandler }) => {
  const navigation = useNavigation();

  return (
    <View className="py-3">
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center gap-3">
          <TouchableOpacity
            className="py-2 pr-5"
            onPress={() => navigation.goBack()}>
            <MaterialIcons
              name="arrow-back"
              size={20}
              color={Style.textColor}
            />
          </TouchableOpacity>
          <MyText className="font-semibold text-xl capitalize">
            {incomeExpenseSelect === 'income' ||
            incomeExpenseSelect === 'expense'
              ? `Add ${incomeExpenseSelect} Category`
              : `${incomeExpenseSelect} Category`}
          </MyText>
        </View>
        <TouchableOpacity className="py-2 pl-5" onPress={increaseSubHandler}>
          <AntDesign name="plus" size={20} color={Style.textColor} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CategoryTop;
