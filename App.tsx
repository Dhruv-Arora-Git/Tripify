import {StyleSheet} from 'react-native';
import React from 'react';
import ScreenWrapper from './components/common/ScreenWrapper';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import {Provider} from 'react-redux';
import {store} from './redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <ScreenWrapper>
          <AppNavigator />
        </ScreenWrapper>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({});
