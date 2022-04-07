import React from 'react'
import styles from './InputField.module.css'

export const EmailInput = ({ name, onChange, value }) => {
  return (
        <label htmlFor="email">Email:
            <input type="email" id={name} name={name} onChange={onChange} value={value} className={`${styles.inputField}`}></input>
        </label>
  )
}

export const PasswordInput = ({ name, onChange, value }) => {
  return (
        <label id="password">Password:
            <input type="password" id={name} name={name} onChange={onChange} value={value} className={`${styles.inputField}`}></input>
        </label>
  )
}

export const TextInput = ({ name, onChange, value }) => {
  return (
    <label id="name">Name:
      <input type="test" id={name} name={name} onChange={onChange} value={value} className={`${styles.inputField}`}></input>
    </label>
  )
}

export const DecimalInput = ({ name, onChange, value }) => {
  return (
        <label htmlFor="amount">Amount:
            <input type="number" id={name} name={name} onChange={onChange} value={value} className={`${styles.inputField} ${styles.decimal}`}></input>
        </label>
  )
}

export const DropdownInput = ({ name, onChange, debitorId, data }) => {
  return (
    <label htmlFor={name}>User:
        <select id={name} name={name} onChange={onChange} debitorid={debitorId} className={`${styles.inputField}`}>
          <option value="">Select</option>
          {data.map((user) => {
            return (
              <option key = {user.id} value={user.id}>{user.name}</option>
            )
          })}
        </select>
    </label>
  )
}
