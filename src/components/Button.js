import React from 'react'
import styles from './Button.module.css'
import { auth, db } from '../firebase-config'
import { setDoc, updateDoc, serverTimestamp, doc } from 'firebase/firestore'
// import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { Navigate } from 'react-router-dom'

export const FormButton = ({ children, handleSubmit }) => {
  return (
  <button type="submit" className={`${styles.button} ${styles.primary}`} onClick={handleSubmit}>
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

// const navigate = useNavigate()

export async function createNewUser (name, password, email) {
  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )

    const uid = userCredentials.user.uid
    await setDoc(doc(db, 'users', uid), { name: name })
    // navigate('/money-transaction')
  } catch (error) {
    return null
  }
}

export async function loginUser (email, password) {
  try {
    await signInWithEmailAndPassword(auth, email, password)
    // navigate('money-transaciton')
  } catch (error) {
    return null
  }
}

export async function logOut ({ user }) {
  await signOut(auth).then(() => {
  })
  if (!user) return <Navigate to='/'></Navigate>
}
