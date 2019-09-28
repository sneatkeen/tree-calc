import React, { Component } from 'react'
import ButtonLink from "@kiwicom/orbit-components/lib/ButtonLink";
import ChevronRight from "@kiwicom/orbit-components/lib/icons/ChevronRight";
// import DateFields from './DateFields'
// import PortFields from './PortFields'
import InputField from "@kiwicom/orbit-components/lib/InputField";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import SearchRequest from '../model/searchRequest';
import httpService from '../services/httpService';


export default class InputFields extends Component {
  apiPath = 'http://localhost:3003/search';

  initFetch = (method, body) => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return {
      headers,
      method,
      mode: 'cors',
      body: JSON.stringify(body),
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      cityFrom: '',
      cityTo: '',
      depDate: '',
      depDateObj: new Date(),
      returnDate: '',
      returnDateObj: new Date(),
    }
    console.log('stateThing', this.state);
  }

  handleChangePorts = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    console.log('the state: ',this.state);
  }

  handleChange = date => {
    this.setState({
      depDate: `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`,
      returnDate: `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`
    });
    console.log('the state: ', this.state);

  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const {
      cityFrom,
      cityTo,
      depDate,
      returnDate,
    } = this.state;

    const flights = await httpService(this.apiPath, this.initFetch('post', new SearchRequest({ cityFrom, cityTo, depDate, returnDate })));
    this.props.writeToState(flights);
    console.log(flights);
    
  }

  render() {
    return (
      <>

        {/* from field */}
        <InputField
          size="small"
          type="text"
          name="cityFrom"
          value={this.state.cityFrom}
          label="From"
          required={true}
          onChange={this.handleChangePorts}
          id="from"
        />

        {/* To field */}
        <InputField
          size="small"
          type="text"
          name="cityTo"
          value={this.state.cityTo}
          label="To"
          required={true}
          onChange={this.handleChangePorts}
            id="to"
        />

        <DatePicker
          className="date-field"
          selected={this.state.depDateObj}
          onChange={this.handleChange}

        />

        <DatePicker
          className="date-field"
          selected={this.state.returnDateObj}
          onChange={this.handleChange}

        />

        <ButtonLink
          title="input-submit"
          disabled={false}
          block={false}
          type="secondary"
          size="large"
          iconRight={<ChevronRight />}
          onClick={this.handleSubmit}
        > Submit
      </ButtonLink>

      </>
    )
  }
}
