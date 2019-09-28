import React from 'react'
import Card, { CardSectionHeader } from "@kiwicom/orbit-components/lib/Card";
// import Select from "@kiwicom/orbit-components/lib/Select";
// import Text from "@kiwicom/orbit-components/lib/Text";
import ButtonLink from "@kiwicom/orbit-components/lib/ButtonLink";
import ChevronDown from "@kiwicom/orbit-components/lib/icons/ChevronDown";
import Passengers from "@kiwicom/orbit-components/lib/icons/Passengers";
import InputFields from "./InputFields";

export default function Finder() {
  return (

    <Card>
      <CardSectionHeader>
        {/* <Select
          id="select-id"
          required={false}
          placeholder="Select value from list"
          size="normal"
          options={[
            { value: 0, label: 'Return' },
            { value: 1, label: 'One Way' },
            { value: 2, label: 'Multicity' },
            { value: 3, label: 'Nomad' },
          ]}
          disabled={false}
          name="name"
          label={null}
          onChange={null}
          dataTest="test"
          value={null}
          customValueText={null}
          spaceAfter={null}
        /> */}

        <ButtonLink
          disabled={false}
          block={false}
          type="secondary"
          size="large"
          href=""

          iconRight={<ChevronDown />}
          width={0}

        > Return
      </ButtonLink>
        <ButtonLink
          disabled={false}
          block={false}
          type="secondary"
          size="large"
          href=""
          dataTest="test"
          iconRight={<ChevronDown />}
          width={0}
          external={false}
          transparent={false}
          submit={false}
          ariaExpanded={false}
          ariaControls="element ID"
          spaceAfter={null}
        > Economy
      </ButtonLink>
        <ButtonLink
          disabled={false}
          block={false}
          type="secondary"
          size="large"
          href=""
          dataTest="test"
          iconLeft={<Passengers />}
          iconRight={<ChevronDown />}
          width={0}
          external={false}
          transparent={false}
          submit={false}
          ariaExpanded={false}
          ariaControls="element ID"
          spaceAfter={null}
        > 1 Adult
      </ButtonLink>
      </CardSectionHeader>
      <CardSectionHeader>
        <InputFields />
      </CardSectionHeader>
    </Card>

  )
}
