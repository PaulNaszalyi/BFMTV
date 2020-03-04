import React from 'react'
import {
  Route,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom'
import Home from '../components/home'
import Article from '../components/page_article'

const Routing = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/article/:id' component={Article} />
      </Switch>
    </Router>
  )
}

export default Routing
