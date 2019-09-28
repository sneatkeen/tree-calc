export default class SearchRequest {
  constructor(formData) {
    const {
      cityFrom,
      cityTo,
      depDate,
      returnDate,
      tripType,
      tripClass,
      adults,
      children,
      infants,
    } = formData;

    this.cityFrom = cityFrom;
    this.cityTo = cityTo || null;
    this.dateFrom = depDate;
    this.dateTo = depDate;
    this.returnFrom = returnDate || null;
    this.returnTo = returnDate || null;
    this.flightType = tripType;
    this.selectedCabins = tripClass;
    this.adults = adults;
    this.children = children;
    this.infants = infants;
  }
}
