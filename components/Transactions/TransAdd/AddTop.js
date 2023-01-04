import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import MyText from '../../utils/MyText';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import Style from '../../../assets/style/styles';

const AddTop = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-row items-center justify-between py-3">
      <View>
        <View className="flex-row items-center justify-between gap-3">
          <TouchableOpacity
            className="py-2 pr-5"
            onPress={() => navigation.goBack()}>
            <MaterialIcons
              name="arrow-back"
              size={20}
              color={Style.textColor}
            />
          </TouchableOpacity>
          <MyText className="font-semibold text-xl">Income</MyText>
        </View>
      </View>
      <TouchableOpacity
        className="py-2 pl-5"
        onPress={() => navigation.goBack()}>
        <Feather name="bookmark" size={20} color={Style.textColor} />
      </TouchableOpacity>
    </View>
  );
};

export default AddTop;
