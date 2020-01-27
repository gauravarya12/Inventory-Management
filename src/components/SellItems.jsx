import React from 'react'
import { connect } from 'react-redux'
import { sellItem, addHistory } from '../redux/Actions'

class SellItems extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      itemName: '',
      quantity: 0
    }
  }

  handleChange = (e) => {
    if (e.target.id === 'qty') {
      this.setState({
        [e.target.name]:Number(e.target.value.trim())
      })
    }
    else {
      this.setState({
        [e.target.id]: e.target.value.trim()
      })
    }
  }

  handleClick = () => {
    this.props.sellItem(this.state)
    this.props.addHistory({ ...this.state, time: (new Date(Date.now())).toLocaleString("en-US", {timeZone: 'Asia/Kolkata'}), type: 'sell' })
    this.setState({
      itemName: '',
      quantity: 0
    })
  }

  render () {
    return (
      <>
        <div className='container mt-5 d-flex justify-content-center'>
          <div className='col-6'>
            <select className='custom-select' onClick={this.handleChange} id='itemName'>
              <option value={this.state.itemName}>Select Item</option>
              {this.props.items.map((e,i) => (<option value={e.itemName.toLowerCase()} key={i}>{e.itemName.toUpperCase()}</option>)) }
            </select>
            <label htmlFor='qty'>Quantity</label>
            <input type='number' value={this.state.quantity} onChange={this.handleChange} className='form-control' id='qty' name='quantity' placeholder='Enter Quantity'></input>
            <div className='d-flex justify-content-center'>
              <button className='btn btn-outline-danger mt-2' onClick={this.handleClick}>Update Stock</button>
            </div>
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = state => ({
  items: state.items
})

const mapDispatchToProps = dispatch => ({
  sellItem: (val) => dispatch(sellItem(val)),
  addHistory: (val) => dispatch(addHistory(val))
})

export default connect(mapStateToProps, mapDispatchToProps)(SellItems)
