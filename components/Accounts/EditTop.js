import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import MyText from '../utils/MyText';
import Style from '../../assets/style/styles';

const AddTop = ({ deleteTopHandler, deleteTop }) => {
  const navigation = useNavigation();

  return (
    <View className="w-11/12 mx-auto flex-row items-center justify-between py-3">
      <View>
        {deleteTop ? (
          <View className="flex-row items-center justify-between gap-3">
            <TouchableOpacity className="py-3 pr-5" onPress={deleteTopHandler}>
              <MaterialIcons
                name="arrow-back"
                size={20}
                color={Style.textColor}
              />
            </TouchableOpacity>
            <MyText className="font-semibold text-xl">Delete Account</MyText>
          </View>
        ) : (
          <View className="flex-row items-center justify-between gap-3">
            <TouchableOpacity
              className="py-3 pr-5"
              onPress={() => navigation.goBack()}>
              <MaterialIcons
                name="arrow-back"
                size={20}
                color={Style.textColor}
              />
            </TouchableOpacity>
            <MyText className="font-semibold text-xl">Account Setting</MyText>
          </View>
        )}
      </View>
      {!deleteTop && (
        <TouchableOpacity className="pl-5" onPress={deleteTopHandler}>
          <MaterialIcons
            name="delete-outline"
            size={25}
            color={Style.textColor}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default AddTop;
