import React from 'react'
import styles from './Form.module.css'
import { DecimalInput, DropdownInput, EmailInput, PasswordInput } from './InputField'
import { action } from '@storybook/addon-actions'
import { FormButton, InfoLink } from './Button'

export const SignIn = () => {
  return (
    <form className={styles.form}>
      <EmailInput id="email"></EmailInput>
      <PasswordInput id="password"></PasswordInput>
      <FormButton onClick={action('clicked')}>Sign in</FormButton>
      <InfoLink href="/SignUp">Sign up</InfoLink>
    </form>
  )
}

export const SignUp = () => {
  return (
    <form className={styles.form}>
      <EmailInput id="email"></EmailInput>
      <PasswordInput id="password"></PasswordInput>
      <FormButton onClick={action('clicked')}>Sign up</FormButton>
      <InfoLink href="/SignIn">Sign in</InfoLink>
    </form>
  )
}

export const CreateEntry = () => {
  return (
    <form className={styles.formHorizontal}>
      <div className = {styles.labelInput}>
      <DropdownInput id="user"></DropdownInput>
      </div>
      <div className = {styles.labelInput}>
      <DecimalInput id="amount"></DecimalInput>
      </div>
      <button type="submit" className = {styles.button}>Create</button>
    </form>
  )
}

// const handleSubmit = () => {
//   alert('Create entry');
// }
