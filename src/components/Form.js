import React, { useState } from 'react'
import styles from './Form.module.css'
import { DecimalInput, DropdownInput, EmailInput, PasswordInput } from './InputField'
import { action } from '@storybook/addon-actions'
import { FormButton, InfoButton, CreateEntryButton } from './Button'

// Storybook error: Buttons are inside of a form --> try to send arguments via post request

export const SignIn = ({ user, onUpdateUser }) => {
  const [formUser, setFormUser] = useState(user)
  return (
    <form className={`${styles.form}`} onSubmit={(evt) => {
      evt.preventDefault()
      onUpdateUser({ name: formUser.name })
    }}>
      <label htmlFor="email">Email:</label>
      <input onChange={(evt) => setFormUser({ name: evt.target.value.trim() })}
      value ={formUser.name}/>
      { formUser.name.length === 0 && (<span>cannot be blank</span>)}
      <button type='submit'>Submit</button>
      {/* <EmailInput id="email"></EmailInput>
      <label id="password">Password:</label>
      <PasswordInput id="password"></PasswordInput>
      <FormButton onClick={action('clicked')}>Sign in</FormButton>
      <InfoButton href="/SignUp">Sign up</InfoButton> */}
    </form>
  )
}

export const SignUp = () => {
  return (
    <form className={`${styles.form}`}>
      <label htmlFor="email">Email:</label>
      <EmailInput id="email"></EmailInput>
      <label id="password">Password:</label>
      <PasswordInput id="password"></PasswordInput>
      <FormButton onClick={action('clicked')}>Sign up</FormButton>
      <InfoButton href="/SignIn">Sign in</InfoButton>
    </form>
  )
}

export const CreateEntry = () => {
  return (
    <form className={`${styles.formHorizontal}`}>
      <div className = {`${styles.labelInput}`}>
      <label htmlFor="user">User:</label>
      <DropdownInput id="user"></DropdownInput>
      </div>
      <div className = {`${styles.labelInput}`}>
      <label htmlFor="amount">Amount:</label>
      <DecimalInput id="amount"></DecimalInput>
      </div>
      <CreateEntryButton onClick={action('clicked')}>Create</CreateEntryButton>
    </form>
  )
}
