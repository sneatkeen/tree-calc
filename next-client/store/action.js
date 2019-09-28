export const GET_FLIGHTS_LOADING = 'GET_FLIGHTS_LOADING';
export const GET_FLIGHTS_SUCCESS = 'GET_FLIGHTS_SUCCESS';
export const GET_FLIGHTS_NOTHING = 'GET_FLIGHTS_NOTHING';
export const GET_FLIGHTS_FAILURE = 'GET_FLIGHTS_FAILURE';
export const CLEAR_FLIGHTS = 'CLEAR_FLIGHTS';
export const APPLY_FILTER = 'APPLY_FILTER';

export const getFlightsLoading = () => ({
  type: GET_FLIGHTS_LOADING,
});

export const getFlightsSuccess = (flights) => ({
  type: GET_FLIGHTS_LOADING,
  payload: flights,
});

export const getFlightsNothing = () => ({
  type: GET_FLIGHTS_NOTHING,
});

export const getFlightsFailure = () => ({
  type: GET_FLIGHTS_FAILURE,
});

export const clearFlights = () => ({
  type: CLEAR_FLIGHTS,
});

export const applyFilter = (filter) => ({
  type: GET_FLIGHTS_LOADING,
  payload: filter,
});
