import React from 'react'
import styles from './Form.module.css'
import { DecimalInput, DropdownInput, EmailInput, PasswordInput } from './InputField'
import { FormButton, InfoLink } from './Button'
import { useFormik } from 'formik'
import { addons, mockChannel } from '@storybook/addons'

addons.setChannel(mockChannel())

export const SignIn = () => {
  const formik = useFormik({
    initialValues: { username: '', password: '' },
    onSubmit: values => console.log(values)
  })
  return (
    <form className={styles.form} onSubmit = {formik.handleSubmit}>
      <EmailInput name="username" onChange={formik.handleChange} value={formik.values.username}></EmailInput>
      <PasswordInput name="password" onChange={formik.handleChange} value={formik.values.password}></PasswordInput>
      <FormButton>Sign in</FormButton>
      <InfoLink href="/SignUp">Sign up</InfoLink>
    </form>
  )
}

export const SignUp = () => {
  const formik = useFormik({
    initialValues: { username: '', password: '' },
    onSubmit: values => console.log(values)
  })
  return (
    <form className={styles.form} onSubmit = {formik.handleSubmit}>
     <EmailInput name="username" onChange={formik.handleChange} value={formik.values.username}></EmailInput>
      <PasswordInput name="password" onChange={formik.handleChange} value={formik.values.password}></PasswordInput>
      <FormButton>Sign up</FormButton>
      <InfoLink href="/SignIn">Sign in</InfoLink>
    </form>
  )
}

export const CreateEntry = ({ data = [], ownId, onSubmit }) => {
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
