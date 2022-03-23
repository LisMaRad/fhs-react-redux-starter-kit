import React from 'react'
import styles from './Text.module.css'

export const Heading = ({ children }) => {
  return (
        <h1 className={`${styles.heading1}`}>{children}</h1>
  )
}

export const HeadingDisabled = ({ children }) => {
  return (
        <h1 className={`${styles.heading1} ${styles.disabled}`}>{children}</h1>
  )
}
