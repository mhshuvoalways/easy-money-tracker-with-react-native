import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import MyText from '../../utils/MyText';
import { useNavigation } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';

const AddBtn = () => {
  const navigation = useNavigation();

  return (
    <View className="absolute bottom-44 right-3 flex-row items-center gap-2">
      <TouchableOpacity
        className=" bg-[#40B5AD] w-11 h-11 rounded-full shadow-lg flex-row items-center justify-center"
        onPress={() => navigation.navigate('TransAddScreen')}>
        <MyText className="text-white text-4xl">
          <Entypo name="text" color="#efefef" size={20} />
        </MyText>
      </TouchableOpacity>
      <TouchableOpacity
        className="bg-[#40B5AD] w-14 h-14 rounded-full shadow-lg flex-row items-center justify-center"
        onPress={() => navigation.navigate('TransAddScreen')}>
        <MyText className="text-white text-4xl">+</MyText>
      </TouchableOpacity>
    </View>
  );
};

export default AddBtn;
