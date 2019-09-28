import {
  GET_FLIGHTS_LOADING,
  GET_FLIGHTS_SUCCESS,
  GET_FLIGHTS_NOTHING,
  GET_FLIGHTS_FAILURE,
  CLEAR_FLIGHTS,
  APPLY_FILTER,
} from './action';

import filterFlights from '../lib/filterFlights';
import updateFilters from '../lib/updateFilters';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FLIGHTS_LOADING:
      return { ...state, ui: { flight_container: 'loading' } };
    case GET_FLIGHTS_SUCCESS:
      return {
        ...state,
        data: {
          flights: action.payload,
        },
        ui: {
          flight_container: 'success',
        },
      };
    case GET_FLIGHTS_NOTHING:
      return { ...state, ui: { flight_container: 'nothing' } };
    case GET_FLIGHTS_FAILURE:
      return { ...state, ui: { flight_container: 'failure' } };
    case CLEAR_FLIGHTS:
      return {
        ...state,
        data: {
          flights: [],
          filters: {},
        },
        ui: {
          flight_container: 'start',
        },
      };
    case APPLY_FILTER:
      return {
        ...state,
        data: {
          flights: [filterFlights(state.data.flights, ...action.payload)],
          filters: updateFilters(state.data.filters, action.payload),
        },
      };
    default:
      return state;
  }
};
