// In App.js in a new project

import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import AddTrip from '../screens/AddTrip';
import AddExpense from '../screens/AddExpense';
import TripExpenses from '../screens/TripExpenses';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Add Trip" component={AddTrip} />
      <Stack.Screen name="Add Expense" component={AddExpense} />
      <Stack.Screen name="Trip Expenses" component={TripExpenses} />
    </Stack.Navigator>
  );
}
