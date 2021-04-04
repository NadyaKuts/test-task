import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/UI/Navbar/Navbar'
import GlobalStyle from './components/GlobalStyle'
import Friends from './components/pages/friends'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Route path='/friends' component={Friends} />
    </Router>
  )
}

export default App
