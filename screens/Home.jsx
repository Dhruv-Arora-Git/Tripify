import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';

import React from 'react';

import ScreenWrapper from '../components/common/ScreenWrapper';
import EmptyList from '../components/home/EmptyList';
import COLORS from '../theme/theme';
import {IMAGES, RANDOM_THUMBNAIL} from '../assets/assets';
import {useSelector} from 'react-redux';

const Home = ({navigation}) => {
  const tripList = useSelector(state => state.trips.trips);
  return (
    <ScreenWrapper>
      <View>
        <View style={styles.homeHeader}>
          <Text style={styles.homeHeading}>Tripify</Text>
        </View>
        <View style={styles.bannerContainer}>
          <Image source={IMAGES.TRIPIFY_BANNER} style={styles.banner} />
          <TouchableOpacity
            onPress={() => {
              // console.log('pressed');
              navigation.navigate('Add Trip');
            }}>
            <View style={styles.addTripButton}>
              <Text style={styles.addButtonText}>Add Trip</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.subHeading}>RECENT TRIPS</Text>
      <View style={styles.listWrapper}>
        <FlatList
          data={tripList}
          keyExtractor={item => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={styles.tripList}
          ListEmptyComponent={<EmptyList />}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Trip Expenses', item)}>
              <View style={styles.tripCard}>
                <Image source={item.banner} style={styles.tripBanner} />
                <Text style={styles.place}>{item.place}</Text>
                <Text style={styles.coutry}>{item.coutry}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </ScreenWrapper>
  );
};

export default Home;

const styles = StyleSheet.create({
  addButtonText: {
    color: COLORS.TEXT,
    fontWeight: '700',
  },
  addTripButton: {
    position: 'absolute',
    backgroundColor: COLORS.WHITE,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    left: 40,
    top: '-50%',
    zIndex: 1,
  },
  banner: {
    width: '150%',
    height: 235,
    resizeMode: 'contain',
  },
  bannerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    zIndex: 1,
  },
  coutry: {
    color: COLORS.BLACK,
    fontSize: 10,
    fontWeight: '600',
    marginLeft: 6,
  },
  homeHeader: {},
  homeHeading: {
    fontSize: 28,
    fontWeight: '600',
    color: COLORS.TEXT,
  },
  listWrapper: {
    flex: 1,
    flexGrow: 1,
    marginTop: 35,
  },
  place: {
    color: COLORS.BLACK,
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 6,
  },
  subHeading: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.TEXT,
    zIndex: -1,
  },
  tripBanner: {
    height: 140,
    width: 140,
  },
  tripCard: {
    backgroundColor: COLORS.WHITE,
    marginBottom: 12,
    padding: 4,
    borderRadius: 18,
  },
  tripList: {
    justifyContent: 'space-around',
  },
});
