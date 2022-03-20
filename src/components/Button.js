import React from 'react'
import styles from './Button.module.css'

export const FormButton = ({ children }) => {
  return (
  <button type="submit" className={`${styles.button} ${styles.primary}`}>
    {children}
  </button>
  )
}

export const InfoLink = ({ href, children }) => {
  return (
  <a href={href} className={`${styles.button} ${styles.primary} ${styles.info}`}>
    {children}
  </a>
  )
}

export const Button = ({ onClick, children }) => {
  return (
  <button onClick={onClick} className={`${styles.button} ${styles.small}`}>
    {children}
  </button>
  )
}

export const Placeholder = () => {
  return (
  <button className={`${styles.button} ${styles.placeholder}`}></button>
  )
}

export function onMoneyTransactionPaid (data, id) {
  const transaction = data.transactions.find((current) => current.id === id)
  transaction.paidAt = new Date().toISOString()
  console.log(id, transaction.paidAt)
}
