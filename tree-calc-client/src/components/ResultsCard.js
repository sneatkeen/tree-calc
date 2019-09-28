import React, { Component } from 'react'
import Card, { CardSection } from "@kiwicom/orbit-components/lib/Card";
import Text from "@kiwicom/orbit-components/lib/Text";

export default class ResultsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityFrom: '',
      cityTo: '',
      depDate: new Date(),
      returnDate: new Date()
    }
    console.log('stateThing', this.state);
  }



  render() {
    return (
      <div>
        <Card>
          <CardSection>
<Text>{this.state.depDate}</Text>
          </CardSection>
        </Card>

      </div>
    )
  }
}
