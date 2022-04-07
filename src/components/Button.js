import React from 'react'
import styles from './Button.module.css'
// import { updateDoc } from 'firebase/firestore'
import { db } from '../firebase-config'
import { updateDoc, serverTimestamp, doc } from 'firebase/firestore'

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

export async function onMoneyTransactionPaid (id, getTransactions) {
  await updateDoc(doc(db, 'transactions', id), {
    paidAt: serverTimestamp()
  })
  await getTransactions()
}
