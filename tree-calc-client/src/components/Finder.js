import React from 'react'
import Card, { CardSection } from "@kiwicom/orbit-components/lib/Card";
import Grid from "@kiwicom/orbit-components/lib/utils/Grid";
import ButtonLink from "@kiwicom/orbit-components/lib/ButtonLink";
import ChevronDown from "@kiwicom/orbit-components/lib/icons/ChevronDown";
import Passengers from "@kiwicom/orbit-components/lib/icons/Passengers";
import InputFields from "./InputFields";

export default function Finder() {
  return (
    <>
      <Card>
        <CardSection>
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
            title="return-mode"
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
            title="flight-mode"
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
            title="passenger-mode"
            type="secondary"
            size="large"
            iconLeft={<Passengers />}
            iconRight={<ChevronDown />}
          > 1 Adult
      </ButtonLink>

        </CardSection>
        <CardSection>
          <Grid
            inline={true}
            columns="repeat(5,5fr)"
            rows="1"
            columnGap="10px"
            element="div"
          >
            <InputFields />
          </Grid>
        </CardSection>
      </Card>
    </>
  )
}
