import React from 'react'
import { storiesOf } from '@storybook/react'
import { CreateEntry, SignIn, SignUp } from './Form'

storiesOf('Forms', module).add('SignIn Form', () => (
    <SignIn />
))

storiesOf('Forms', module).add('SignUp Form', () => (
    <SignUp />
))

storiesOf('Forms', module).add('CreateEntry Form', () => (
    <CreateEntry />
))
