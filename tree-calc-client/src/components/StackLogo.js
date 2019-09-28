import React from 'react'
import logo from '../kiwi-logo.png'
import ButtonLink from "@kiwicom/orbit-components/lib/ButtonLink";
import AirplaneUp from "@kiwicom/orbit-components/lib/icons/AirplaneUp";
import ChevronDown from "@kiwicom/orbit-components/lib/icons/ChevronDown";
import '../style.css'


export default function StackLogo() {
  return (
    <div className="stack-logo">
      <img className="logo" src={logo} alt='logo'></img>
      <ButtonLink
        title="input-header-plane"
        disabled={false}
        block={false}
        type="secondary"
        size="large"
        href=""
        dataTest="test"
        iconLeft={<AirplaneUp />}
        iconRight={<ChevronDown />}
        width={0}
        external={false}
        transparent={false}
        submit={false}
        ariaExpanded={false}
        ariaControls="element ID"
        tabIndex="0"
        spaceAfter={null}
      >
      </ButtonLink>
    </div>
  )
}
