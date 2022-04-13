import { React, useState, useEffect } from 'react'
import { SignIn, SignUp } from './components/Form'
import { MoneyTransaction } from './components/MoneyTransaction'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import styles from './App.module.css'
import { auth } from './firebase-config'
import ProtectedRoute from './components/ProtectedRoutes'

const App = () => {
  const [user, setUser] = useState()

  useEffect(() => {
    auth.onAuthStateChanged((user) => setUser(user))
  }, [])
  if (!user) {
    return (
      <Router>
        <div>
          <nav className = {styles.navigation}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/sign-in">SignIn</Link>
              </li>
              <li>
                <Link to="/sign-up">SignUp</Link>
              </li>
            </ul>
          </nav>
          <Routes>
          <Route path="/" element={<h1 className = {styles.headline}>Welcome to Money Transaction!</h1>} >
            </Route>
            <Route exact path="/sign-in" element={<SignIn user={user} />}>
            </Route>
            <Route path="/sign-up" element={<SignUp user={user} />}>
            </Route>
            <Route path="/money-transaction" element={<ProtectedRoute user={user}><MoneyTransaction /></ProtectedRoute>}>
            </Route>
          </Routes>
        </div>
      </Router>
    )
  } else {
    return (
      <Router>
        <div>
          <nav className = {styles.navigation}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/money-transaction">Money Transaction</Link>
              </li>
            </ul>
          </nav>
          <Routes>
          <Route path="/" element={<h1 className = {styles.headline}>Welcome to Money Transaction!</h1>} >
            </Route>
          <Route path="/sign-in" element={<ProtectedRoute user={user}><SignIn /></ProtectedRoute>}>
            </Route>
          <Route path="/sign-up" element={<ProtectedRoute user={user}><SignUp /></ProtectedRoute>}>
            </Route>
            <Route path="/money-transaction" element={<ProtectedRoute user={user}><MoneyTransaction /* user={user} */ /></ProtectedRoute>}>
            </Route>
          </Routes>
        </div>
      </Router>
    )
  }
}

export default App
