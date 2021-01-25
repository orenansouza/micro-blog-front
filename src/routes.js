import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Login from './pages/Login'
import HomePage from './pages/Home-Page'

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Login} />
      <Route path='/home' component={HomePage} />
    </BrowserRouter>
  )
}
