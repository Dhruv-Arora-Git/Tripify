import {createSlice} from '@reduxjs/toolkit';

const initialTripsState = {
  trips: [],
};

export const tripSlice = createSlice({
  name: 'Trips',
  initialState: initialTripsState,
  reducers: {
    addTrip: (state, action) => {
      state.trips = [...state.trips, action.payload];
    },
    addExpense: (state, action) => {
      const tripID = action.payload.tripID;
      // console.log(tripID);
      state.trips = state.trips.map(trip => {
        // console.log(trip.id, tripID);
        if (trip.id === tripID) {
          trip.expenses = [...trip.expenses, action.payload.expenses];
          console.log(trip.expenses);
        }
        return trip;
      });
    },
  },
});

export const {addExpense, addTrip} = tripSlice.actions;
export default tripSlice.reducer;
