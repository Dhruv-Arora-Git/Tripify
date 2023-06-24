import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import COLORS from '../../theme/theme';

const AddButton = props => {
  const {buttonText, onPress, marginTopValue} = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.addButton, {marginTop: marginTopValue}]}>
        <Text style={styles.buttonText}>{buttonText ? buttonText : 'ADD'}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  addButton: {
    backgroundColor: COLORS.ORANGE_SECOND,
    paddingVertical: 12,
    borderRadius: 18,
    display: 'flex',
    alignItems: 'center',
  },
  buttonText: {color: COLORS.WHITE, fontSize: 20, fontWeight: '700'},
});
export default AddButton;
