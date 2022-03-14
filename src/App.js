import { React, useState } from 'react'
import { SignIn } from './components/Form'

// function App () {
//   return (
//     <div>
//         <SignIn />
//     </div>
//   )
// }

const App = () => {
  const Input = () => {
    const [username, setUsername] = useState('')
    return <input
    name="username"
    onChange={(evt) => setUsername(evt.target.value)}
    // ^^^^^^^^^^^
    // 1) whenever onChange setUsername is called with new value
    value={ username }
    // 2) setUsername triggers a rerender with the new username
    />
   }
  const [username, setUsername] = useState('');
  // ^^^^^^^^^^^^
  // define a new state with an initial value of empty string
  return (
    <div>
      <input onChange={(evt) => setUsername(evt.target.value)} value={username} />

      <button onClick={() => console.log({username})}>submit</button>
    </div>

    // <button>Submit</button>>
    // <button>hallo</button>
  // <div>
  // <input onChange={(evt) => setUsername(evt.target.value)} value={username}>
  // { /* ^^^^^^^^^^^^^^^^^^ */}
  // { /* set the state of the username */}
  // <button onClick={() => console.log({ username })}>Submit form</button>
  // </div>
  );
 }
 

export default App
