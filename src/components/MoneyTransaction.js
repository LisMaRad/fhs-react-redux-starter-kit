import React from 'react'
import styles from './MoneyTransaction.module.css'
import { action } from '@storybook/addon-actions'
import { Button } from './Button'
import { Table } from './Table'
import { CreateEntry } from './Form'
import { Heading, HeadingDisabled } from './Text'

export const MoneyTransaction = () => {
  const data = {
    users: [
      { id: 1, name: 'Sepp' },
      { id: 2, name: 'Mike' },
      { id: 3, name: 'Fabian' }
    ],
    transactions: [
      { id: 1, creditorId: 1, debitorId: 2, amount: 10.00, paidAt: null },
      { id: 2, creditorId: 3, debitorId: 1, amount: 11.20, paidAt: '2000-01-01T00:00:00+01+00' }
    ]
  }
  return (
        <div className = {styles.page}>
            <div className = {styles.right}><Button onClick={action('clicked')}>Click me</Button></div>
            <div className = {styles.header}>
                    <Heading>I owe somebody</Heading>
                    <HeadingDisabled>Somebody owes me</HeadingDisabled>
            </div>
            <CreateEntry data={data}/>
            <Table data={data}/>
        </div>
  )
}
