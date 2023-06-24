import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import ScreenWrapper from '../components/common/ScreenWrapper';
import AddButton from '../components/common/addButton';
import {IMAGES} from '../assets/assets';
import COLORS from '../theme/theme';
import {useDispatch} from 'react-redux';
import {addExpense} from '../redux/slice/trips';

const CATEGORIES = ['Shopping', 'Food', 'Commute', 'Entertainment', 'Others'];

const AddExpense = ({navigation, route}) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const selectedTrip = route.params;

  const dispatch = useDispatch();
  const handleExpenseAdded = () => {
    const expenses = {
      id: Date.now(),
      title,
      amount,
      category,
    };
    const data = {
      tripID: selectedTrip.id,
      expenses,
    };
    dispatch(addExpense(data));
    navigation.navigate('Trip Expenses', selectedTrip);
  };
  return (
    <ScreenWrapper>
      <View style={styles.addExpenseWrapper}>
        <View style={styles.bannerContainer}>
          <Image source={IMAGES.ADD_EXPENSES_BANNER} style={styles.banner} />
          <View style={styles.subHeadingContainer}>
            <Text style={styles.subHeading}>Add New Expense</Text>
          </View>
          <View style={styles.form}>
            <View style={styles.formItem}>
              <Text style={styles.label}>For What?</Text>
              <TextInput
                value={title}
                onChangeText={e => setTitle(e)}
                style={styles.input}
              />
            </View>
            <View style={styles.formItem}>
              <Text style={styles.label}>How Much?</Text>
              <TextInput
                keyboardType="numeric"
                value={amount}
                onChangeText={e => setAmount(+e)}
                style={styles.input}
              />
            </View>
            <View style={styles.formItem}>
              <Text style={styles.label}>Category?</Text>
              <View style={styles.categoryOptions}>
                {CATEGORIES.map(cat => (
                  <TouchableOpacity
                    style={[
                      styles.category,
                      {
                        backgroundColor:
                          category === cat ? COLORS.DARK_ORANGE : COLORS.WHITE,

                        zIndex: 10,
                      },
                    ]}
                    onPress={() => {
                      setCategory(cat);
                    }}>
                    <Text
                      style={[
                        styles.categoryLabel,
                        {color: category === cat ? COLORS.WHITE : COLORS.BLACK},
                      ]}>
                      {cat}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>
        </View>
        <AddButton onPress={handleExpenseAdded} />
      </View>
    </ScreenWrapper>
  );
};

export default AddExpense;

const styles = StyleSheet.create({
  addExpenseWrapper: {
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  banner: {
    height: 200,
    width: '100%',
    resizeMode: 'contain',
  },
  bannerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  category: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginRight: 6,
    marginBottom: 16,
    borderRadius: 18,
  },
  categoryLabel: {
    fontSize: 12,
    fontWeight: '600',
  },
  categoryOptions: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 12,
  },
  form: {
    marginVertical: 18,
    marginBottom: 0,
  },
  formItem: {
    // marginVertical: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.TEXT,
  },
  input: {
    backgroundColor: COLORS.WHITE,
    color: COLORS.BLACK,
    marginTop: 12,
    fontSize: 16,
    padding: 12,
    borderRadius: 18,
  },
  subHeading: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.TEXT,
  },
  subHeadingContainer: {
    paddingVertical: 10,
    width: '70%',
    backgroundColor: COLORS.WHITE,
    borderRadius: 18,
  },
});
