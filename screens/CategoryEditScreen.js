import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import CategoryEditTop from '../components/Category/CategoryEditTop';
import CategoryEdit from '../components/Category/CategoryEdit';
import DB from '../db.json';

const CategoryEditScreen = ({ route }) => {
  const [deleteTop, setDeleteTop] = useState(false);
  const [categories, setCatgories] = useState([]);
  const { incomeExpenseSelect } = route.params;

  const deleteTopHandler = () => {
    setDeleteTop(!deleteTop);
  };

  useEffect(() => {
    if (incomeExpenseSelect === 'income') {
      setCatgories(DB.incomeCategory);
    } else if (incomeExpenseSelect === 'expense') {
      setCatgories(DB.expenseCategory);
    }
  }, []);

  return (
    <View className="">
      <CategoryEditTop
        deleteTopHandler={deleteTopHandler}
        deleteTop={deleteTop}
      />
      <CategoryEdit deleteTop={deleteTop} categories={categories} />
    </View>
  );
};

export default CategoryEditScreen;
