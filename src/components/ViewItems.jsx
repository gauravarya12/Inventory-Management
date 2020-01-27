import React from 'react'
import { connect } from 'react-redux'

class ViewItems extends React.Component {
  render () {
    return (
      <>
        <div className='container mt-5 d-flex justify-content-center'>
          <div className='col-8'>
            <table className='table table-bordered shadow-lg'>
              <thead>
                <tr>
                  <td>Item Name</td>
                  <td>Quantity</td>
                </tr>
              </thead>
              <tbody>
                {this.props.items.map((e, i) => (<tr key={i} className={e.quantity > 10 ? 'text-success' : 'text-danger'}><td>{e.itemName.toUpperCase()}</td><td>{e.quantity}</td></tr>))}
                <tr>
                  <td>Total Quantity</td>
                  <td>{this.props.items.reduce((a, e) => a + e.quantity, 0)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = state => ({
  items: state.items
})

export default connect(mapStateToProps)(ViewItems)
