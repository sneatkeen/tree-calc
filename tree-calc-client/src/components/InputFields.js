import React, { Component } from 'react'
import ButtonLink from "@kiwicom/orbit-components/lib/ButtonLink";
import ChevronRight from "@kiwicom/orbit-components/lib/icons/ChevronRight";
// import DateFields from './DateFields'
// import PortFields from './PortFields'
import InputField from "@kiwicom/orbit-components/lib/InputField";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default class InputFields extends Component {
  constructor() {
    super();
    this.state = {
      airportName1: '',
      airportName2: '',
      date1: new Date(),
      date2: new Date()
    }
    console.log('stateThing', this.state);
  }

  handleChangePorts = (event) => {
    // AirportInput("from");
    // AirportInput("to");
    const { name, value } = event.target;
    this.setState({ [name]: value });
    console.log('the state: ',this.state);
  }

  handleChange = date => {
    this.setState({
      date1: date,
      date2: date
    });
    console.log('the state: ', this.state);

  };

  // handleSubmit = (event) => {
  //   event.preventDefault();
    
  //   // const  {player1Score , player2Score,player1Id,player2Id, tournament} = this.state;
  //   // console.log('sendind: ',player1Score,player2Score,player1Id,player2Id,tournament);

  //   // calls.modifyPlayer(player1Score,player1Id)
  //   // .then((updatedScores) => {
  //   //   console.log('updatedScores', updatedScores);
  //   //   this.setState({ player1Score: 0 });
  //   });


    // calls.modifyPlayer(player2Score,player2Id)
    // .then((updatedScores) => {
    //   console.log('updatedScores', updatedScores);
    //   this.setState({ player2Score: 0, redirect: true });
    // })
  // }

  render() {
    return (
      <>

        {/* from field */}
        <InputField
          size="small"
          type="text"
          name="airportName1"
          value={this.state.airportName1}
          label="From"
          required={true}
          onChange={this.handleChangePorts}
          id="from"
        />

        {/* To field */}
        <InputField
          size="small"
          type="text"
          name="airportName2"
          value={this.state.airportName2}
          label="To"
          required={true}
          onChange={this.handleChangePorts}
            id="to"
        />

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

        <ButtonLink
          title="input-submit"
          disabled={false}
          block={false}
          type="secondary"
          size="large"
          iconRight={<ChevronRight />}
        > Submit
      </ButtonLink>

      </>
    )
  }
}
