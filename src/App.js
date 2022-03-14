import React, { useState } from 'react'
import { SignIn } from './components/Form'

function App () {
  const [user, setUser] = useState({ name: 'sepp' })
  return (
    <div>
        <SignIn user={user} onUpdateUser={setUser} />
    </div>
  )
}

export default App
