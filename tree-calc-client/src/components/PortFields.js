import React, {Component} from 'react'
import InputField from "@kiwicom/orbit-components/lib/InputField";
import AirportInput from 'airport-autocomplete-js';
import ButtonLink from "@kiwicom/orbit-components/lib/ButtonLink";


class PortFields extends Component {
constructor(){
  super();
  this.state = {
    code:'',
    name:''
  }
  console.log('stateThing',this.state);
}

  componentDidMount(){
    AirportInput("from");
    AirportInput("to");
  }

  handleChange = (event) => {

    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render(){
  return (
    <div>    

      {/* from field */}
      <InputField
        size="small"
        type="text"
        name="input"
        value="from"
        placeholder="From"
        required={true}
        suffix={<ButtonLink />}
        onChange={this.handleChange}
        spaceAfter={null}
        id="from"
      />

      {/* To field */}
      <InputField
        size="small"
        type="text"
        name="input"
        label="Label"
        value="to"
        placeholder="To"
        required={true}
        suffix={<ButtonLink />}
        onChange={this.handleChange}
        id="to"
      />

    </div>
  )
  }
}

export default PortFields;
