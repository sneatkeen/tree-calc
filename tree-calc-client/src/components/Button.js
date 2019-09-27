import React, { Component } from 'react'
import Button from "@kiwicom/orbit-components/lib/Button"
import ChevronRight from "@kiwicom/orbit-components/lib/icons/ChevronRight"

export default class button extends Component {
  render() {
    return (
      <>
              <Button iconRight={<ChevronRight />}>Continue to payment</Button>
              <Button iconRight={<ChevronRight />}>Explore</Button>

      </>
    )
  }
}



