import React from 'react'
import styles from './Button.module.css'

export const FormButton = ({ onClick, children }) => {
  console.log(onClick)
  return (
  <button onClick={onClick} className={`${styles.button} ${styles.primary}`}>
    {children}
  </button>
  )
}

export const InfoButton = ({ page, children }) => {
  return (
  <a href={page} className={`${styles.button} ${styles.primary} ${styles.info}`}>
    {children}
  </a>
  )
}

export const Button = ({ onClick, children }) => {
  console.log(onClick)
  return (
  <button onClick={onClick} className={`${styles.button} ${styles.small}`}>
    {children}
  </button>
  )
}

export const Placeholder = () => {
  return (
  <div className={`${styles.button} ${styles.placeholder}`}></div>
  )
}
