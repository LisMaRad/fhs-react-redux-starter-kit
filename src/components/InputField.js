import React from 'react'
import styles from './InputField.module.css'

export const EmailInput = (idField) => {
  return (
        <label htmlFor="email">Email:
            <input type="text" id={idField} className={`${styles.inputField}`}></input>
        </label>
  )
}

export const PasswordInput = (idField) => {
  return (
        <label id="password">Password:
            <input type="password" id={idField} className={`${styles.inputField}`}></input>
        </label>
  )
}

export const TextInput = (idField) => {
  return (
        <input type="text" id={idField} className={`${styles.inputField}`}></input>
  )
}

export const DecimalInput = (idField) => {
  return (
        <label htmlFor="amount">Amount:
            <input type="number" id={idField} className={`${styles.inputField} ${styles.decimal}`}></input>
        </label>
  )
}

export const DropdownInput = (idField) => {
  const users = [
    {
      id: 1,
      name: 'Hansi',
      amount: 10.45,
      paid: true
    },
    {
      id: 2,
      name: 'Heidi',
      amount: 10.45,
      paid: false
    },
    {
      id: 3,
      name: 'Marianne',
      amount: 10.45,
      paid: false
    }
  ]
  return (
    <label htmlFor="user">User:
        <select name={idField} id={idField} className={`${styles.inputField}`}>
          <option value="">Select</option>
          {users.map((user) => {
            return (
              <option key = {user.id} value={`${user.name}`}>{user.name}</option>
            )
          })}
        </select>
    </label>
        
  )
}
