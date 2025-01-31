import { React, useState, useEffect } from 'react'
import styles from './MoneyTransaction.module.css'
import { action } from '@storybook/addon-actions'
import { Button } from './Button'
import { Table } from './Table'
import { CreateEntry } from './Form'
import { Heading, HeadingDisabled } from './Text'
import { db } from '../firebase-config'
import { collection, getDocs, addDoc } from 'firebase/firestore'

export const MoneyTransaction = () => {
  const [moneyTransactions, setTransactions] = useState([])
  const [users, setUsers] = useState([])
  const userCollection = collection(db, 'users')
  const transactionCollection = collection(db, 'transactions')
  const [ownId] = useState('2Ntiu0k4W4Df7NeVk792')

  useEffect(() => { getUsers() }, [])
  useEffect(() => { getTransactions() }, [])

  async function getUsers () {
    const data = await getDocs(userCollection)
    // We generate our own user objects which match our expected schema
    const parsedData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    // wanted to delete the ownId from array
    // const me = parsedData.indexOf(ownId)
    // console.log(me)
    // parsedData.splice(me, 1)
    // console.log(parsedData)
    parsedData.shift()
    await setUsers(parsedData)
  }

  async function getTransactions () {
    const data = await getDocs(transactionCollection)
    // We generate our own user objects which match our expected schema
    const parsedData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    console.log(parsedData)
    await setTransactions(parsedData)
  }

  async function handleSubmit (debitor, creditor, amount) {
    await addDoc(collection(db, 'transactions'), {
      debitor: debitor,
      creditor: creditor,
      amount: amount,
      paidAt: null
    })
    await getUsers()
    await getTransactions()
  }

  return (
        <div className = {styles.page}>
            <div className = {styles.right}><Button onClick={action('clicked')}>Click me</Button></div>
            <div className = {styles.header}>
                    <Heading>I owe somebody</Heading>
                    <HeadingDisabled>Somebody owes me</HeadingDisabled>
            </div>
            <CreateEntry data={users} ownId = {ownId} onSubmit={handleSubmit} />
            <Table users={users} ownId = {ownId} moneyTransactions={moneyTransactions} getTransactions={getTransactions}/>
        </div>
  )
}
