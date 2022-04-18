import React from 'react'
import styles from './Form.module.css'
import { DecimalInput, DropdownInput, EmailInput, PasswordInput, TextInput } from './InputField'
import { FormButton, InfoLink, createNewUser, loginUser } from './Button'
import { useFormik } from 'formik'
import { addons, mockChannel } from '@storybook/addons'
import { Navigate } from 'react-router-dom'

addons.setChannel(mockChannel())

const DEFAULT_USERS = []

export const SignIn = ({ user }) => {
  const formik = useFormik({
    initialValues: { email: '', password: '' },
    onSubmit: values => loginUser(values.email, values.password)
  })

  if (user) return <Navigate to='/money-transaction'></Navigate>
  return (
    <form className={styles.form} onSubmit = {formik.handleSubmit}>
      <EmailInput name="email" onChange={formik.handleChange} value={formik.values.email}></EmailInput>
      <PasswordInput name="password" onChange={formik.handleChange} value={formik.values.password}></PasswordInput>
      <FormButton>Sign in</FormButton>
      <InfoLink href="/SignUp">Sign up</InfoLink>
    </form>
  )
}

export const SignUp = ({ user }) => {
  const formik = useFormik({
    initialValues: { email: '', password: '', name: '' },
    onSubmit: values => createNewUser(values.name, values.password, values.email)
  })
  if (user) return <Navigate to='/money-transaction'></Navigate>
  return (
    <form className={styles.form} onSubmit = {formik.handleSubmit}>
      <TextInput name="name" onChange={formik.handleChange} value={formik.values.name}></TextInput>
      <EmailInput name="email" onChange={formik.handleChange} value={formik.values.email}></EmailInput>
      <PasswordInput name="password" onChange={formik.handleChange} value={formik.values.password}></PasswordInput>
      <FormButton>Sign up</FormButton>
      <InfoLink href="/SignIn">Sign in</InfoLink>
    </form>
  )
}

export const CreateEntry = ({ data = DEFAULT_USERS, ownId, onSubmit }) => {
  const formik = useFormik({
    initialValues: { creditorid: ownId, debitorid: 0, amount: 0 },
    onSubmit: values => onSubmit(values.debitorid, values.creditorid, values.amount)
  })
  return (
    <form className={styles.formHorizontal} onSubmit = {formik.handleSubmit}>
      <div className = {styles.labelInput}>
      <DropdownInput name="debitorid" onChange={formik.handleChange} debitorid={formik.values.debitorid} data={data}></DropdownInput>
      </div>
      <div className = {styles.labelInput}>
      <DecimalInput name="amount" onChange={formik.handleChange} value={formik.values.amount}>Amount</DecimalInput>
      </div>
      <button type="submit" className={styles.button}>Create</button>
    </form>
  )
}
