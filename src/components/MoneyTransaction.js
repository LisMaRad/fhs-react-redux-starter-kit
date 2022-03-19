import React from 'react'
import styles from './MoneyTransaction.module.css'
import { action } from '@storybook/addon-actions'
import { Button } from './Button'
import { Table } from './Table'
import { CreateEntry } from './Form'
import { Heading, HeadingDisabled } from './Text'

export const MoneyTransaction = () => {
  return (
        <div className = {styles.page}>
            <div className = {styles.right}><Button onClick={action('clicked')}>Click me</Button></div>
            <div className = {styles.header}>
                    <Heading>I owe somebody</Heading>
                    <HeadingDisabled>Somebody owes me</HeadingDisabled>
            </div>
            <CreateEntry />
            <Table />
        </div>
  )
}
