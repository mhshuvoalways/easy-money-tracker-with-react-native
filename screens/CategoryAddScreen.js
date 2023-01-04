import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import CategoryTop from '../components/Category/CategoryAddTop';
import CategoryAddForm from '../components/Category/CategoryAddForm';

const CategoryAddScreen = ({ route }) => {
  const [subCount, setSubCount] = useState({
    id: 1,
    name: '',
    sub: [{ id: 1, name: '' }],
  });
  const { incomeExpenseSelect, items } = route.params;

  const increaseSubHandler = () => {
    const temp = [...subCount.sub];
    const obj = {
      id: temp.length + 1,
      sub: '',
    };
    temp.push(obj);
    setSubCount({
      ...subCount,
      sub: temp,
    });
  };

  const decreaseSubHandler = id => {
    const temp = [...subCount.sub];
    const newSub = temp.filter(el => el.id !== id);
    setSubCount({
      ...subCount,
      sub: newSub,
    });
  };

  useEffect(() => {
    if (incomeExpenseSelect === 'Edit') {
      setSubCount(items);
    }
  }, []);

  return (
    <View className="w-11/12 mx-auto">
      <CategoryTop
        incomeExpenseSelect={incomeExpenseSelect}
        increaseSubHandler={increaseSubHandler}
      />
      <CategoryAddForm
        subCount={subCount}
        decreaseSubHandler={decreaseSubHandler}
        items={items}
      />
    </View>
  );
};

export default CategoryAddScreen;
