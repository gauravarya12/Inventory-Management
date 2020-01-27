import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AddItems from './components/AddItems'
import Dashboard from './components/Dashboard'
import SellItems from './components/SellItems'
import ViewItems from './components/ViewItems'
import History from './components/History'

class Routes extends React.Component {
  render () {
    return (
      <Switch>
        <Route exact path='/' render={() => <Dashboard />} />
        <Route path='/add' render={() => <AddItems />} />
        <Route path='/sell' render={() => <SellItems />} />
        <Route path='/view' render={() => <ViewItems />} />
        <Route path='/history' render={() => <History />} />
      </Switch>
    )
  }
}

export default Routes
