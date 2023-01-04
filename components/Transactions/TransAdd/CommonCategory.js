import React, { useState } from 'react';
import { View, TouchableOpacity, ScrollView, Pressable } from 'react-native';
import MyText from '../../utils/MyText';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { useNavigation } from '@react-navigation/native';

const CommonCategory = ({
  categories,
  incomeExpenseSelect,
  categorySelect,
}) => {
  const [subCategory, setSubCategory] = useState([]);
  const navigation = useNavigation();

  const onPressHandler = sub => {
    setSubCategory(sub);
  };

  return (
    <View className="h-2/4 mt-2">
      <View className="bg-black py-2">
        <View className="w-11/12 mx-auto">
          <View className="flex-row justify-between items-center">
            <MyText className="text-white font-semibold text-lg">
              {categorySelect}
            </MyText>
            {categorySelect === 'Account' && (
              <View className="flex-row justify-between items-center gap-8">
                <TouchableOpacity
                  onPress={() => navigation.navigate('AccountEditScreen')}>
                  <MaterialIcons name="edit" size={30} color="#ffffff" />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('AccountAddScreen')}>
                  <AntDesign name="plus" size={30} color="#ffffff" />
                </TouchableOpacity>
              </View>
            )}
            {categorySelect === 'Category' && (
              <View className="flex-row justify-between items-center gap-8">
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('CategoryEditScreen', {
                      incomeExpenseSelect: incomeExpenseSelect,
                    })
                  }>
                  <MaterialIcons name="edit" size={30} color="#ffffff" />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('CategoryAddScreen', {
                      incomeExpenseSelect: incomeExpenseSelect,
                    })
                  }>
                  <AntDesign name="plus" size={30} color="#ffffff" />
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </View>
      <View className="flex-row justify-between mb-14">
        <ScrollView className="w-6/12" showsVerticalScrollIndicator={false}>
          {categories.map(el => (
            <Pressable
              className="flex-row items-center justify-between py-4 px-5 border-b border-gray-400 border-r"
              key={el.id}
              onPress={() => onPressHandler(el.sub)}>
              <MyText className="font-semibold text-base">{el.name}</MyText>
              <MyText>
                {el.sub.length ? (
                  <SimpleLineIcons name="arrow-right" size={18} />
                ) : null}
              </MyText>
            </Pressable>
          ))}
        </ScrollView>
        <ScrollView className="w-6/12" showsVerticalScrollIndicator={false}>
          {subCategory.map(el => (
            <View className="py-4 px-5 border-b border-gray-400" key={el.id}>
              <MyText className="font-semibold text-base">{el.name}</MyText>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default CommonCategory;
