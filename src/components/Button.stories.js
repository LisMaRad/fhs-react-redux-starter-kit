import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Button, InfoLink, FormButton } from './Button'

storiesOf('Button', module).add('primary (default)', () => (
  <Button onClick={action('clicked')}>Click me</Button>
))
storiesOf('Button', module).add('InfoLink', () => (
  <InfoLink onClick={action('clicked')}>Click me</InfoLink>
))

storiesOf('Button', module).add('FormButton', () => (
  <FormButton onClick={action('submit')}>Submit</FormButton>
))
