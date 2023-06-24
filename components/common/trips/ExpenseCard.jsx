import {StyleSheet, Text, View, ViewComponent} from 'react-native';
import React from 'react';
import COLORS, {CATEGORY_BG} from '../../../theme/theme';

const ExpenseCard = ({expense}) => {
  console.log(expense);
  return (
    <View
      style={[
        styles.cardWrapper,
        {backgroundColor: CATEGORY_BG[expense.category]},
      ]}>
      <View>
        <Text style={styles.expenseTitle}>{expense.title}</Text>
        <Text style={styles.expenseCategory}>{expense.category}</Text>
      </View>
      <View>
        <Text style={styles.amount}> ₹ {expense.amount}/-</Text>
      </View>
    </View>
  );
};

export default ExpenseCard;

const styles = StyleSheet.create({
  amount: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.TEXT,
  },
  cardWrapper: {
    padding: 12,
    marginLeft: 12,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderRadius: 18,
    alignItems: 'center',
  },
  expenseCategory: {
    fontSize: 12,
    marginVertical: 4,
    color: COLORS.FADED_TEXT,
  },
  expenseTitle: {
    fontSize: 16,
    // marginVertical:4,
    fontWeight: '500',
    color: COLORS.TEXT,
  },
});
