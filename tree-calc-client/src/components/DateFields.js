import React, { Component } from 'react'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

export default class DateFields extends Component {
  render() {
    return (
      <>
      <DayPickerInput onDayChange={day => console.log(day)} />
      <DayPickerInput onDayChange={day => console.log(day)} />
      </>
    )
  }
}
