import React from 'react'
import ButtonLink from "@kiwicom/orbit-components/lib/ButtonLink";
import '../style.css'
import MenuHamburger from "@kiwicom/orbit-components/lib/icons/MenuHamburger";
import CountryFlag from "@kiwicom/orbit-components/lib/CountryFlag";

export default function StackOptions() {
  return (
    <div className="stack-options">
    <ButtonLink
        disabled={false}
        block={false}
        type="secondary"
        size="large"
        href=""
        dataTest="test"
        iconLeft={<CountryFlag code="us" name="United States" />}
        width={0}
        external={false}
        transparent={false}
        submit={false}
        ariaExpanded={false}
        ariaControls="element ID"
        tabIndex="0"
        spaceAfter={null}
      > English(United States)
      </ButtonLink>
      <ButtonLink
        disabled={false}
        block={false}
        type="secondary"
        size="large"
        href=""
        dataTest="test"

        width={0}
        external={false}
        transparent={false}
        submit={false}
        ariaExpanded={false}
        ariaControls="element ID"
        tabIndex="0"
        spaceAfter={null}
      > Euro - €
      </ButtonLink>
      <ButtonLink
        disabled={false}
        block={false}
        type="secondary"
        size="large"
        href=""
        dataTest="test"

        width={0}
        external={false}
        transparent={false}
        submit={false}
        ariaExpanded={false}
        ariaControls="element ID"
        tabIndex="0"
        spaceAfter={null}
      > Help
      </ButtonLink>
      <ButtonLink
        disabled={false}
        block={false}
        type="secondary"
        size="large"
        href=""
        dataTest="test"

        width={0}
        external={false}
        transparent={false}
        submit={false}
        ariaExpanded={false}
        ariaControls="element ID"
        tabIndex="0"
        spaceAfter={null}
      > Starred
      </ButtonLink>
      <ButtonLink
        disabled={false}
        block={false}
        type="secondary"
        size="large"
        href=""
        dataTest="test"

        width={0}
        external={false}
        transparent={false}
        submit={false}
        ariaExpanded={false}
        ariaControls="element ID"
        tabIndex="0"
        spaceAfter={null}
      > Manage My Booking
      </ButtonLink>
      <MenuHamburger />

    </div>
  )
}
