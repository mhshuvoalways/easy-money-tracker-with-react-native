import React, { useState } from 'react';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Motion } from '@legendapp/motion';
import { useNavigation } from '@react-navigation/native';
import MyText from '../utils/MyText';

const CategoryEdit = ({ deleteTop, categories }) => {
  const [clickCircle, setClickCircle] = useState(false);

  const navigation = useNavigation();

  return (
    <ScrollView className="mb-20">
      {categories.map(el => (
        <View key={el.id}>
          {deleteTop ? (
            <View className="border-t border-gray-200">
              <View className="w-11/12 mx-auto flex-row items-center">
                <Motion.View
                  animate={{ rotate: clickCircle ? '90deg' : '0deg' }}>
                  <FontAwesome5
                    name="minus-circle"
                    size={25}
                    color="red"
                    onPress={() => setClickCircle(!clickCircle)}
                  />
                </Motion.View>
                <MyText className="text-black font-base py-4 ml-10">
                  {el.name} {el.sub.length !== 0 && `(${el.sub.length})`}
                </MyText>
                <Motion.View
                  className="bg-red-600 px-4 py-3 absolute right-0"
                  animate={{ x: clickCircle ? 15 : 100 }}>
                  <MaterialIcons
                    name="delete-outline"
                    size={25}
                    color="#ffffff"
                  />
                </Motion.View>
              </View>
            </View>
          ) : (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('CategoryAddScreen', {
                  incomeExpenseSelect: 'Edit',
                  items: el,
                })
              }
              className="border-t border-gray-200">
              <View className="w-11/12 mx-auto flex-row items-center justify-between">
                <MyText className="text-black font-base py-4">
                  {el.name} {el.sub.length !== 0 && `(${el.sub.length})`}
                </MyText>
                <SimpleLineIcons name="arrow-right" size={15} color="#000000" />
              </View>
            </TouchableOpacity>
          )}
        </View>
      ))}
    </ScrollView>
  );
};

export default CategoryEdit;
