import { React, useState } from 'react'
import { SignIn, SignUp } from './components/Form'
import { MoneyTransaction } from './components/MoneyTransaction'
import { BrowserRouter as Router, Route, Switch, Redirect, Routes } from "react-router-dom";
import { Link } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <nav>
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
            <li>
              <Link to="/money-transaction">Money Transaction</Link>
            </li>
          </ul>
        </nav>

        <Routes>
        <Route path="/" element={<h1>Startpage</h1>}>
          </Route>
          <Route exact path="/sign-in" element={<SignIn />}>
          </Route>
          <Route path="/sign-up" element={<SignUp />}>
          </Route>
          <Route path="/money-transaction" element={<MoneyTransaction />}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
} 

export default App
