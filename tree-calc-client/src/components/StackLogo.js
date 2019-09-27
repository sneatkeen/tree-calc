import React from 'react'
import logo from '../kiwi-logo.png'
import ButtonLink from "@kiwicom/orbit-components/lib/ButtonLink";
import AirplaneUp from "@kiwicom/orbit-components/lib/icons/AirplaneUp";
import ChevronDown from "@kiwicom/orbit-components/lib/icons/ChevronDown";


export default function StackLogo() {
  return (
    <div className="stack-logo">
      <img src={logo} alt='logo'></img>
      <ButtonLink
        iconLeft={<AirplaneUp />}
        iconRight={<ChevronDown />}>
      </ButtonLink>
    </div>
  )
}
