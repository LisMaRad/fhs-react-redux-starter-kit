import { React, useState, useEffect } from 'react'
import styles from './MoneyTransaction.module.css'
import { action } from '@storybook/addon-actions'
import { Button } from './Button'
import { Table } from './Table'
import { CreateEntry } from './Form'
import { Heading, HeadingDisabled } from './Text'

export const MoneyTransaction = () => {
  const [moneyTransactions, setTransactions] = useState([])
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetch('http://localhost:3001/users')
      .then((response) => response.json())
      .then((json) => setUsers(json))
    fetch('http://localhost:3001/money-transaction')
      .then((response) => response.json())
      .then((json) => setTransactions(json))
  }, [loading])

  const handleSubmit = (debitor, creditor, amount) => {
    fetch('http://localhost:3001/money-transaction', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ debitorId: parseInt(debitor), creditorId: creditor, amount: amount, paidAt: null })
    })
      .then(
        setLoading(true)
      )
  }

  return (
        <div className = {styles.page}>
            <div className = {styles.right}><Button onClick={action('clicked')}>Click me</Button></div>
            <div className = {styles.header}>
                    <Heading>I owe somebody</Heading>
                    <HeadingDisabled>Somebody owes me</HeadingDisabled>
            </div>
            <CreateEntry data={users} onSubmit={handleSubmit} />
            <Table users={users} moneyTransactions={moneyTransactions}/>
        </div>
  )
}
