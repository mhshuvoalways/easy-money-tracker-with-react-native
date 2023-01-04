import React from 'react';
import { Text } from 'react-native';

const MyText = ({ children, ...props }) => {
  return (
    <Text className="text-gray-600" {...props}>
      {children}
    </Text>
  );
};

export default MyText;
