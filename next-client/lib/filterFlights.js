export default function (flights, filterType, filterValue) {
  switch (filterType) {
    case 'stops':
      return flights.filter((flight) => +flight.pnr_count <= +filterValue);
    case 'maxTravelTime':
      return flights
        .filter((flight) => (
          +flight.duration.departure <= +filterValue
          && +flight.duration.return <= +filterValue
        ));
    case 'price':
      return flights.filter((flight) => flight.price <= +filterValue);
    case 'treePrice':
      return flights.filter((flight) => flight.tree_count <= +filterValue);
    default:
      return flights;
  }
}
