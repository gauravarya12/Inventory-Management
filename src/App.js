import React from 'react'
import Routes from './Routes'
import { Link } from 'react-router-dom'

class App extends React.Component {
  render () {
    return (
      <>
        <nav className='navbar navbar-dark bg-dark sticky-top shadow'>
          <Link to='/'><h4>Home</h4></Link>
          <Link to='/history'><button className='btn btn-dark'>View History</button></Link>
        </nav>
        <Routes />
      </>
    )
  }
}

export default App
