import React from 'react'
import styles from './Button.module.css'

export const FormButton = ({ onClick, children }) => {
  return (
  <button onClick={onClick} className={`${styles.button} ${styles.primary}`}>
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
