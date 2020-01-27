import React from 'react'
import { Link } from 'react-router-dom'

class Dashboard extends React.Component {
  render () {
    return (
      <>
        <div className='container'>
          <div className='col-12 mt-2 justify-content-center d-flex'>
            <Link to='/add'><button className='btn btn-outline-primary mx-2'>Add Items</button></Link>
            <Link to='/sell'><button className='btn btn-outline-primary mx-2'>Sell Items</button></Link>
            <Link to='/view'><button className='btn btn-outline-primary mx-2'>View Items</button></Link>
          </div>
        </div>
      </>
    )
  }
}

export default Dashboard
