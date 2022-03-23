import React from 'react'
import { storiesOf } from '@storybook/react'
import { EmailInput, PasswordInput, TextInput, DecimalInput, DropdownInput } from './InputField'

storiesOf('InputField', module).add('Email Input', () => (
    <EmailInput id="newField"></EmailInput>
))

storiesOf('InputField', module).add('Password Input', () => (
    <PasswordInput id="newField"></PasswordInput>
))

storiesOf('InputField', module).add('Text Input', () => (
    <TextInput id="newField"></TextInput>
))

storiesOf('InputField', module).add('Decimal Input', () => (
    <DecimalInput id="newField"></DecimalInput>
))

storiesOf('InputField', module).add('Dropdown Input', () => (
    <DropdownInput id="newField"></DropdownInput>
))
