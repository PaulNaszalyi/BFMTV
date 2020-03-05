import React from 'react'
import {
  Route,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom'
import Home from '../components/home'
import Article from '../components/page_article'
import CreateArticle from "../components/create_article.js"

const Routing = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/article/:id' component={Article} />
          <Route exact path='/new-article' component={CreateArticle} />
      </Switch>
    </Router>
  )
}

export default Routing
