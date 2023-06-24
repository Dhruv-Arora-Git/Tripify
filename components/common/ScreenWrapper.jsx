import {Platform, StyleSheet, View} from 'react-native';
import COLORS from '../../theme/theme';
import React from 'react';

const ScreenWrapper = ({children}) => {
  return <View style={styles.screenWrapper}>{children}</View>;
};

export default ScreenWrapper;

const styles = StyleSheet.create({
  screenWrapper: {
    paddingTop: Platform.OS === 'ios' ? 50 : 15,
    paddingHorizontal: 16,
    paddingBottom: 32,
    backgroundColor: COLORS.BACKGROUND,
    minHeight: '100%',
  },
});
