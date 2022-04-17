import React from 'react'
import styles from './Table.module.css'
import { Button, Placeholder, onMoneyTransactionPaid } from './Button'

const DEFAULT_ARRAY = []

export const Table = ({ idField, ownId, users = DEFAULT_ARRAY, moneyTransactions = DEFAULT_ARRAY, getTransactions }) => {
  return (
    <div id={idField} className={`${styles.table}`}>
      {
      moneyTransactions.map((transaction) => {
        if (transaction.creditor === ownId) {
          const user = users.find((user) => user.id === transaction.debitor)
          return (
            <div key= {transaction.id} className={`${transaction.paidAt != null && styles.paid} ${styles.tablerow}`}>
              <p>{user.name}</p>
              <div className={styles.amount}>
                <p>{transaction.amount}$</p>
                  {transaction.paidAt != null && <Placeholder></Placeholder>}
                  {transaction.paidAt === null && <Button onClick={() => onMoneyTransactionPaid(transaction.id, getTransactions)}>paid</Button>}
                </div>
            </div>
          )
        } else {
          return (
            null
          )
        }
      })}
    </div>
  )
}
