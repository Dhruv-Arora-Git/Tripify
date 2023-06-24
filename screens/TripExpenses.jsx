import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import ScreenWrapper from '../components/common/ScreenWrapper';
import ExpenseCard from '../components/common/trips/ExpenseCard';
import EmptyExpenses from '../components/common/trips/EmptyExpenses';
import COLORS from '../theme/theme';
import {useSelector} from 'react-redux';

const TripExpenses = ({navigation, route}) => {
  const selectedTrip = route.params;

  const expenses = useSelector(state => {
    const trips = state.trips.trips;
    const expensesToBeShown = trips.filter(trip => trip.id === selectedTrip.id);
    // console.log(expensesToBeShown[0].expenses);
    if (expensesToBeShown.length > 0) {
      return expensesToBeShown[0].expenses;
    }
    return [];
  });
  return (
    <ScreenWrapper>
      <View>
        <View style={styles.bannerContainer}>
          <Image source={selectedTrip.banner} style={styles.banner} />
          <View style={styles.placeContainer}>
            <Text style={styles.place}>{selectedTrip.place}</Text>
          </View>
        </View>
        <View style={styles.textBtn}>
          <Text style={styles.subHeaing}>Expenses</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Add Expense', selectedTrip)}>
            <Text style={styles.buttonText}>Add Expense</Text>
          </TouchableOpacity>
        </View>
        <View>
          {/* <SafeAreaView>
            <ScrollView>
              {MOCK.length > 0 ? (
                MOCK.map(item => <ExpenseCard expense={item} />)
              ) : (
                <EmptyExpenses />
              )}
            </ScrollView>
          </SafeAreaView> */}
          <FlatList
            horizontal={true}
            // numColumns={2}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            // columnWrapperStyle={styles.tripList}
            data={expenses}
            keyExtractor={item => item.id}
            ListEmptyComponent={<EmptyExpenses />}
            renderItem={({item}) => {
              return <ExpenseCard expense={item} />;
            }}
            // contentContainerStyle={{minHeight: '100%', minWidth: '100%'}}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default TripExpenses;

const styles = StyleSheet.create({
  banner: {
    marginTop: 10,
    height: 240,
    width: '100%',
    resizeMode: 'contain',
  },
  bannerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // position: 'relative',
  },
  buttonText: {
    color: COLORS.DARK_ORANGE,
    fontWeight: '700',
  },

  place: {
    textAlign: 'center',
    color: COLORS.DARK_ORANGE,
    fontSize: 20,
    fontWeight: '700',
  },
  placeContainer: {
    backgroundColor: COLORS.WHITE,
    minWidth: '50%',
    paddingVertical: 12,
    borderRadius: 18,
  },
  textBtn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32,
    marginBottom: 24,
  },
  subHeaing: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.TEXT,
  },
  // tripList: {
  //   justifyContent: 'space-around',
  // },
});
