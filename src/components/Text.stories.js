import React from 'react'
import { storiesOf } from '@storybook/react'
import { Heading, HeadingDisabled } from './Text'

storiesOf('Text', module).add('Heading', () => (
    <Heading>Heading Text</Heading>
))

storiesOf('Text', module).add('Heading disabled', () => (
    <HeadingDisabled>Heading Text</HeadingDisabled>
))
