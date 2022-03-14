import React from 'react'
import styles from './Table.module.css'
import { Button, Placeholder } from './Button'

export const Table = (idField) => {
  const users = [
    {
      id: 1,
      name: 'Hansi',
      amount: 10.45,
      paid: true
    },
    {
      id: 2,
      name: 'Heidi',
      amount: 10.45,
      paid: false
    },
    {
      id: 3,
      name: 'Marianne',
      amount: 10.45,
      paid: false
    }
  ]
  return (
        <table id={idField} className={`${styles.table}`}>
            <tbody>
                {users.map((user) => {
                  return (
                        <tr key= {user.id} className={`${user.paid && styles.paid}`}>
                            <p>{user.name}</p>
                            <div>
                                <p>{user.amount}$</p>

                                    {user.paid && <Placeholder>/</Placeholder>}
                                    {!user.paid && <Button>paid</Button>}

                            </div>
                        </tr>
                  )
                })}
            </tbody>
        </table>
  )
}
