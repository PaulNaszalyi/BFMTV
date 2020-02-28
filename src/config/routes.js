import React from 'react'
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router
} from 'react-router-dom'
import Home from '../components/home'

const routing = (...props) => {
  const token = !!localStorage.getItem('token')

  const PrivateRoute = ({ component: Component, ...props }) => {
    return (
      <Route
        {...props}
        render={innerProps =>
          token ? <Component {...innerProps} /> : <Redirect to='/'/>
        }
      />
    )
  }

  const PublicRoute = ({ component: Component, ...props }) => {
    return (
      <Route
        {...props}
        render={innerProps =>
          token ? <Redirect to='/characters' /> : <Component {...innerProps} />
        }
      />
    )
  }

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </div>
    </Router>
  )
}

export default routing
