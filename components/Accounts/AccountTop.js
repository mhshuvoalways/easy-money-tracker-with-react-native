import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import MyText from '../utils/MyText';
import Style from '../../assets/style/styles';

const AccountTop = () => {
  const navigation = useNavigation();

  return (
    <View className="py-3">
      <View>
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
          <MyText className="font-semibold text-xl">Add Account</MyText>
        </View>
      </View>
    </View>
  );
};

export default AccountTop;
