import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import MyText from '../../utils/MyText';
import { Calendar } from 'react-native-calendars';
import { Motion } from '@legendapp/motion';

const AddForm = ({
  categorySelect,
  dateHandler,
  calenderToggle,
  onMonthChange,
  onDayPress,
  categoryHandler,
  incomeExpenseSelect,
  incomeExpenseHandler,
}) => {
  return (
    <View>
      <View className="flex-row justify-between items-center py-5">
        <View className="flex-row gap-3 items-center">
          <MyText
            className={`border px-3 text-base py-1 rounded-md text-center ${
              incomeExpenseSelect === 'income' &&
              'border-[#40B5AD] text-[#40B5AD] font-bold'
            }`}
            onPress={() => incomeExpenseHandler('income')}>
            Income
          </MyText>
          <MyText
            className={`border px-3 text-base py-1 rounded-md text-center ${
              incomeExpenseSelect === 'expense' && 'border-red-500 text-red-500 font-bold'
            }`}
            onPress={() => incomeExpenseHandler('expense')}>
            Expense
          </MyText>
        </View>
        <TouchableOpacity className="px-10 font-semibold text-base py-2 rounded-md bg-[#40B5AD]">
          <MyText className="text-white">Save</MyText>
        </TouchableOpacity>
      </View>
      <View>
        <View>
          <View className="flex-row gap-3 items-center justify-between mt-1">
            <MyText className="w-2/12">Date</MyText>
            {calenderToggle && (
              <Motion.View
                className="absolute inset-0 z-50 h-96"
                animate={{ opacity: 1, y: -50 }}>
                <Calendar
                  onMonthChange={onMonthChange}
                  onDayPress={onDayPress}
                  enableSwipeMonths={true}
                />
                <View className="bg-white mx-auto py-4 pr-5 w-full">
                  <View className="flex-row justify-end gap-10 items-center">
                    <TouchableOpacity
                      onPress={dateHandler}
                      className="py-1 pl-3">
                      <MyText className="font-bold text-[#40B5AD]">
                        CANCEL
                      </MyText>
                    </TouchableOpacity>
                    <TouchableOpacity className="py-1 pl-3">
                      <MyText
                        className="font-bold text-[#40B5AD] "
                        onPress={dateHandler}>
                        OK
                      </MyText>
                    </TouchableOpacity>
                  </View>
                </View>
              </Motion.View>
            )}
            <MyText
              className={`font-semibold border-b border-gray-300 p-3 w-9/12 ${
                categorySelect === 'Date' &&
                (incomeExpenseSelect === 'income'
                  ? 'border-[#40B5AD]'
                  : 'border-red-500')
              }`}
              onPress={
                dateHandler
              }>{`${new Date().toDateString()} ${new Date().toTimeString()}`}</MyText>
          </View>
          <View className="flex-row gap-3 items-center justify-between mt-1">
            <MyText className="w-2/12">Account</MyText>
            <MyText
              className={`font-semibold border-b border-gray-300 p-3 w-9/12 ${
                categorySelect === 'Account' &&
                (incomeExpenseSelect === 'income'
                  ? 'border-[#40B5AD]'
                  : 'border-red-500')
              }`}
              onPress={() => categoryHandler('Account')}
            />
          </View>
          <View className="flex-row gap-3 items-center justify-between mt-1">
            <MyText className="w-2/12">Category</MyText>
            <MyText
              className={`font-semibold border-b border-gray-300 p-3 w-9/12 ${
                categorySelect === 'Category' &&
                (incomeExpenseSelect === 'income'
                  ? 'border-[#40B5AD]'
                  : 'border-red-500')
              }`}
              onPress={() => categoryHandler('Category')}
            />
          </View>
          <View className="flex-row gap-3 items-center justify-between mt-1">
            <MyText className="w-2/12">Amount</MyText>
            <TextInput
              className={`font-semibold border-b border-gray-300 p-3 w-9/12 text-gray-500 ${
                categorySelect === 'Amount' &&
                (incomeExpenseSelect === 'income'
                  ? 'border-[#40B5AD]'
                  : 'border-red-500')
              }`}
              onFocus={() => categoryHandler('Amount')}
            />
          </View>
          <View className="flex-row gap-3 items-center justify-between mt-1">
            <MyText className="w-2/12">Note</MyText>
            <TextInput
              className={`font-semibold border-b border-gray-300 p-3 w-9/12 text-gray-500 ${
                categorySelect === 'Note' &&
                (incomeExpenseSelect === 'income'
                  ? 'border-[#40B5AD]'
                  : 'border-red-500')
              }`}
              onFocus={() => categoryHandler('Note')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default AddForm;
