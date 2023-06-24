import React, {useState, useEffect} from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';

import ScreenWrapper from '../components/common/ScreenWrapper';
import COLORS from '../theme/theme';
import {RANDOM_THUMBNAIL} from '../assets/assets';
import AddButton from '../components/common/addButton';
import {useDispatch} from 'react-redux';
import {addTrip} from '../redux/slice/trips';

const AddTrip = ({navigation}) => {
  const path = require('../assets/images/trips-thumbnail/1.png');
  const [placeBanner, setPlaceBanner] = useState(path);
  const [place, setPlace] = useState('');
  const [country, setCountry] = useState('');

  useEffect(() => {
    setPlaceBanner(RANDOM_THUMBNAIL());
  }, []);

  const dispatch = useDispatch();
  const handleAddTrip = () => {
    const tripData = {
      id: Date.now(),
      place,
      country,
      banner: placeBanner,
      expenses: [],
    };
    dispatch(addTrip(tripData));
    navigation.navigate('Home');
  };

  return (
    <ScreenWrapper>
      <View style={styles.addTripWrapper}>
        <View style={styles.form}>
          <View style={styles.formItem}>
            <Text style={styles.subHeading}>Where on Earth?</Text>
            <TextInput
              value={place}
              onChangeText={e => setPlace(e)}
              style={styles.input}
            />
          </View>
        </View>
        <View style={styles.form}>
          <View style={styles.formItem}>
            <Text style={styles.subHeading}>Which Country?</Text>
            <TextInput
              value={country}
              onChangeText={e => setCountry(e)}
              style={styles.input}
            />
          </View>
        </View>
        <View style={styles.bannerContainer}>
          <Image source={placeBanner} style={styles.banner} />
        </View>
        <View>
          <AddButton
            marginTopValue={25}
            buttonText={'ADD TRIP'}
            onPress={handleAddTrip}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default AddTrip;

const styles = StyleSheet.create({
  addTripWrapper: {
    display: 'flex',
    // justifyContent: 'space-evenly',
    height: '100%',
  },
  banner: {
    height: 240,
    width: '80%',
    resizeMode: 'cover',
  },
  bannerContainer: {
    marginTop: 16,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    // marginVertical: 24,
  },
  formItem: {},
  input: {
    backgroundColor: COLORS.WHITE,
    color: COLORS.BLACK,
    marginTop: 12,
    fontSize: 16,
    padding: 12,
    borderRadius: 18,
  },
  subHeading: {
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.TEXT,
  },
});
