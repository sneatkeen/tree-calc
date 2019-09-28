import React from 'react'
import ButtonLink from "@kiwicom/orbit-components/lib/ButtonLink";
import ChevronRight from "@kiwicom/orbit-components/lib/icons/ChevronRight";
import DateFields from './DateFields'
import PortFields from './PortFields'


export default function InputFields() {
  return (
    <>
      <PortFields />
      <DateFields />
      {/* submit field */}
      <ButtonLink
        disabled={false}
        block={false}
        type="secondary"
        size="large"
        href=""
        dataTest="test"
        iconRight={<ChevronRight />}
        width={0}
        external={false}
        transparent={false}
        submit={false}
        ariaExpanded={false}
        ariaControls="element ID"
        spaceAfter={null}
      > Submit
      </ButtonLink>

    </>
  )
}
