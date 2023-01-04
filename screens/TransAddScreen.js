import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import AddTop from '../components/Transactions/TransAdd/AddTop';
import AddForm from '../components/Transactions/TransAdd/AddForm';
import CommonCategory from '../components/Transactions/TransAdd/CommonCategory';
import DB from '../db.json';

const TransAddScreen = () => {
  const [incomeExpenseSelect, setIncomeExpenseSelect] = useState('expense');
  const [categorySelect, setCategorySelect] = useState('Account');
  const [calenderToggle, setCalenderToggle] = useState(false);
  const [categories, setCategories] = useState([]);

  const dateHandler = () => {
    setCalenderToggle(!calenderToggle);
    categoryHandler('Date');
  };

  const onMonthChange = month => {};

  const onDayPress = day => {
    setCalenderToggle(!calenderToggle);
  };

  const incomeExpenseHandler = value => {
    setIncomeExpenseSelect(value);
    setCategorySelect('Account');
  };

  const categoryHandler = value => {
    setCategorySelect(value);
  };

  useEffect(() => {
    if (categorySelect === 'Account') {
      setCategories(DB.accounts);
    } else if (
      categorySelect === 'Category' &&
      incomeExpenseSelect === 'income'
    ) {
      setCategories(DB.incomeCategory);
    } else if (
      categorySelect === 'Category' &&
      incomeExpenseSelect === 'expense'
    ) {
      setCategories(DB.expenseCategory);
    }
  }, [categorySelect, incomeExpenseSelect]);

  return (
    <View>
      {calenderToggle && (
        <Text
          className="absolute inset-0 bg-black opacity-60 h-screen z-0"
          onPress={dateHandler}
        />
      )}
      <ScrollView
        className={
          categorySelect === 'Category' || categorySelect === 'Account'
            ? 'w-11/12 mx-auto h-2/4'
            : 'w-11/12 mx-auto'
        }
        showsVerticalScrollIndicator={false}>
        <AddTop />
        <AddForm
          categorySelect={categorySelect}
          dateHandler={dateHandler}
          calenderToggle={calenderToggle}
          onMonthChange={onMonthChange}
          onDayPress={onDayPress}
          categoryHandler={categoryHandler}
          incomeExpenseHandler={incomeExpenseHandler}
          incomeExpenseSelect={incomeExpenseSelect}
        />
      </ScrollView>
      {(categorySelect === 'Category' || categorySelect === 'Account') && (
        <CommonCategory
          categorySelect={categorySelect}
          categories={categories}
          incomeExpenseSelect={incomeExpenseSelect}
        />
      )}
    </View>
  );
};

export default TransAddScreen;
