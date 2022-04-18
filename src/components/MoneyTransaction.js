import { React, useState, useEffect } from 'react'
import styles from './MoneyTransaction.module.css'
import { Button, logOut } from './Button'
import { Table } from './Table'
import { CreateEntry } from './Form'
import { Heading, HeadingDisabled } from './Text'
import { db } from '../firebase-config'
import { collection, getDocs, addDoc } from 'firebase/firestore'

export const MoneyTransaction = ({ user = [] }) => {
  const [moneyTransactions, setTransactions] = useState([])
  const [users, setUsers] = useState([])
  const userCollection = collection(db, 'users')
  const transactionCollection = collection(db, 'transactions')
  const [ownId] = useState(user.uid)

  useEffect(() => { getUsers() }, [])
  useEffect(() => { getTransactions() }, [])

  async function getUsers () {
    const data = await getDocs(userCollection)
    // We generate our own user objects which match our expected schema
    const parsedData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    // to delete the ownId from array
    // eslint-disable-next-line array-callback-return
    parsedData.findIndex(function (item, i) {
      if (item.id === ownId) {
        delete parsedData[i]
      }
    })

    // somehow this doesn't work, but we don't really know why
    // const usersChoosable = useMemo(() => parsedData.map((oneUser) => oneUser.id !== ownId), [user])

    await setUsers(parsedData)
  }

  async function getTransactions () {
    const data = await getDocs(transactionCollection)
    // We generate our own user objects which match our expected schema
    const parsedData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    await setTransactions(parsedData)
  }

  async function handleSubmit (debitor, creditor, amount) {
    if (debitor !== creditor) {
      await addDoc(collection(db, 'transactions'), {
        debitor: debitor,
        creditor: creditor,
        amount: amount,
        paidAt: null
      })
    }
    await getUsers()
    await getTransactions()
  }

  return (
        <div className = {styles.page}>
            <div className = {styles.right}><Button onClick={logOut}>logout</Button></div>
            <div className = {styles.header}>
                    <Heading>I owe somebody</Heading>
                    <HeadingDisabled>Somebody owes me</HeadingDisabled>
            </div>
            <CreateEntry data={users} ownId = {ownId} onSubmit={handleSubmit} />
            <Table users={users} ownId = {ownId} moneyTransactions={moneyTransactions} getTransactions={getTransactions}/>
        </div>
  )
}
