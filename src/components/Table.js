import React from 'react'
import styles from './Table.module.css'
import { Button, Placeholder, onMoneyTransactionPaid } from './Button'

export const Table = ({ idField, data }) => {
  return (
        <div id={idField} className={`${styles.table}`}>
                {data.transactions.map((transaction) => {
                  const user = data.users.find((user) => user.id === transaction.debitorId)
                  return (
                        <div key= {transaction.id} className={`${transaction.paidAt != null && styles.paid} ${styles.tablerow}`}>
                            <p>{user.name}</p>
                            <div className={styles.amount}>
                                <p>{transaction.amount}$</p>

                                    {transaction.paidAt != null && <Placeholder>/</Placeholder>}
                                    {transaction.paidAt === null && <Button onClick={() => onMoneyTransactionPaid(data, transaction.id)}>paid</Button>}

                            </div>
                        </div>
                  )
                })}
        </div>
  )
}
