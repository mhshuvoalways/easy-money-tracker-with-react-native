import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Motion } from '@legendapp/motion';
import { useNavigation } from '@react-navigation/native';
import MyText from '../utils/MyText';

const EditAccount = ({ deleteTop }) => {
  const [clickCircle, setClickCircle] = useState(false);

  const navigation = useNavigation();

  return (
    <View>
      <View>
        <View className="bg-gray-200 py-4">
          <MyText className="w-11/12 mx-auto">Card</MyText>
        </View>
        {deleteTop ? (
          <View className="w-11/12 mx-auto flex-row items-center">
            <Motion.View animate={{ rotate: clickCircle ? '90deg' : '0deg' }}>
              <FontAwesome5
                name="minus-circle"
                size={25}
                color="red"
                onPress={() => setClickCircle(!clickCircle)}
              />
            </Motion.View>
            <MyText className="text-black font-base py-4 ml-10">DBBl</MyText>
            <Motion.View
              className="bg-red-600 px-4 py-3 absolute right-0"
              animate={{ x: clickCircle ? 20 : 100 }}>
              <MaterialIcons name="delete-outline" size={25} color="#ffffff" />
            </Motion.View>
          </View>
        ) : (
          <TouchableOpacity
            onPress={() => navigation.navigate('AccountAddScreen')}
            className="w-11/12 mx-auto flex-row items-center justify-between">
            <MyText className="text-black font-base py-4">DBBl</MyText>
            <SimpleLineIcons name="arrow-right" size={15} color="#000000" />
          </TouchableOpacity>
        )}
      </View>
      <View>
        <View className="bg-gray-200 py-4">
          <MyText className="w-11/12 mx-auto">Card</MyText>
        </View>
        {deleteTop ? (
          <View className="w-11/12 mx-auto flex-row items-center">
            <Motion.View animate={{ rotate: clickCircle ? '90deg' : '0deg' }}>
              <FontAwesome5
                name="minus-circle"
                size={25}
                color="red"
                onPress={() => setClickCircle(!clickCircle)}
              />
            </Motion.View>
            <MyText className="text-black font-base py-4 ml-10">DBBl</MyText>
            <Motion.View
              className="bg-red-600 px-4 py-3 absolute right-0"
              animate={{ x: clickCircle ? 20 : 100 }}>
              <MaterialIcons name="delete-outline" size={25} color="#ffffff" />
            </Motion.View>
          </View>
        ) : (
          <TouchableOpacity
            onPress={() => navigation.navigate('AccountAddScreen')}
            className="w-11/12 mx-auto flex-row items-center justify-between">
            <MyText className="text-black font-base py-4">DBBl</MyText>
            <SimpleLineIcons name="arrow-right" size={15} color="#000000" />
          </TouchableOpacity>
        )}
      </View>
      <View>
        <View className="bg-gray-200 py-4">
          <MyText className="w-11/12 mx-auto">Card</MyText>
        </View>
        {deleteTop ? (
          <View className="w-11/12 mx-auto flex-row items-center">
            <Motion.View animate={{ rotate: clickCircle ? '90deg' : '0deg' }}>
              <FontAwesome5
                name="minus-circle"
                size={25}
                color="red"
                onPress={() => setClickCircle(!clickCircle)}
              />
            </Motion.View>
            <MyText className="text-black font-base py-4 ml-10">DBBl</MyText>
            <Motion.View
              className="bg-red-600 px-4 py-3 absolute right-0"
              animate={{ x: clickCircle ? 20 : 100 }}>
              <MaterialIcons name="delete-outline" size={25} color="#ffffff" />
            </Motion.View>
          </View>
        ) : (
          <TouchableOpacity
            onPress={() => navigation.navigate('AccountAddScreen')}
            className="w-11/12 mx-auto flex-row items-center justify-between">
            <MyText className="text-black font-base py-4">DBBl</MyText>
            <SimpleLineIcons name="arrow-right" size={15} color="#000000" />
          </TouchableOpacity>
        )}
      </View>
      <View>
        <View className="bg-gray-200 py-4">
          <MyText className="w-11/12 mx-auto">Card</MyText>
        </View>
        {deleteTop ? (
          <View className="w-11/12 mx-auto flex-row items-center">
            <Motion.View animate={{ rotate: clickCircle ? '90deg' : '0deg' }}>
              <FontAwesome5
                name="minus-circle"
                size={25}
                color="red"
                onPress={() => setClickCircle(!clickCircle)}
              />
            </Motion.View>
            <MyText className="text-black font-base py-4 ml-10">DBBl</MyText>
            <Motion.View
              className="bg-red-600 px-4 py-3 absolute right-0"
              animate={{ x: clickCircle ? 20 : 100 }}>
              <MaterialIcons name="delete-outline" size={25} color="#ffffff" />
            </Motion.View>
          </View>
        ) : (
          <TouchableOpacity
            onPress={() => navigation.navigate('AccountAddScreen')}
            className="w-11/12 mx-auto flex-row items-center justify-between">
            <MyText className="text-black font-base py-4">DBBl</MyText>
            <SimpleLineIcons name="arrow-right" size={15} color="#000000" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default EditAccount;
