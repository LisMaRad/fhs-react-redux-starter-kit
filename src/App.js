import { React, useState, useEffect, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import styles from './App.module.css'
import { auth } from './firebase-config'
import ProtectedRoute from './components/ProtectedRoutes'

const SignIn = lazy(() => import('./components/Form').then(module => ({
  default: module.SignIn
})))
const SignUp = lazy(() => import('./components/Form').then(module => ({
  default: module.SignUp
})))
const MoneyTransaction = lazy(() => import('./components/MoneyTransaction').then(module => ({
  default: module.MoneyTransaction
})))
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
            <Route exact path="/sign-in" element={
              <Suspense fallback={<div>Loading...</div>}>
                <SignIn user={user} />
              </Suspense>}>
            </Route>
            <Route exact path="/sign-up" element={
              <Suspense fallback={<div>Loading...</div>}>
                <SignUp user={user} />
              </Suspense>}>
            </Route>
            <Route path="/money-transaction" element={
              <Suspense fallback={<div>Loading...</div>}>
                <ProtectedRoute user={user}><MoneyTransaction /></ProtectedRoute>
              </Suspense>}>
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
            <Route path="/money-transaction" element={
              <Suspense fallback={<div>Loading...</div>}>
                <ProtectedRoute user={user}><MoneyTransaction/></ProtectedRoute>
              </Suspense>}>
            </Route>
          </Routes>
        </div>
      </Router>
    )
  }
}

export default App
