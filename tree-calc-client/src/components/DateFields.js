import React, { Component } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class DateFields extends Component {
  constructor() {
    super();
    this.state = {
      date1: new Date(),
      date2: new Date()
    }
    console.log('stateThing', this.state);
  }

  handleChange = date => {
    this.setState({
      date1: date,
      date2: date
    });
    console.log('the state: ', this.state);

  };


  render() {
    return (
      <>
        <DatePicker
          className="date-field"
          selected={this.state.date1}
          onChange={this.handleChange}

        />

        <DatePicker
          className="date-field"
          selected={this.state.date2}
          onChange={this.handleChange}

        />
      </>
    )
  }
}
