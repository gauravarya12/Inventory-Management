import React from 'react'
import { addItem, addHistory } from '../redux/Actions'
import { connect } from 'react-redux'

class AddItems extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      itemName: '',
      quantity: 0
    }
  }

  handleChange = (e) => {
      if (e.target.id === "quantity") {
          this.setState({
              [e.target.id]: Number(e.target.value.trim())
          });
      }
      else {
          this.setState({
              [e.target.id]: e.target.value.trim().toLowerCase()
          })
      }
  }

  handleClick = () => {
    this.props.addItem(this.state)
    this.props.addHistory({ ...this.state, time: (new Date(Date.now())).toLocaleString('en-US', {timeZone: "Asia/Kolkata"}), type: 'add' })
    this.setState({
        itemName: '',
        quantity: 0
    })
  }

  render () {
    return (
      <>
        <div className='contiainer mt-5 d-flex justify-content-center'>
          <div className='col-6'>
            <label htmlFor='itemName'>Item Name</label>
            <input type='text' id='itemName' className='form-control' value={this.state.itemName.toUpperCase()} onChange={this.handleChange} />
            <label htmlFor='quantity'>Quantity</label>
            <input type='number' id='quantity' className='form-control' value={this.state.quantity} onChange={this.handleChange} />
            <div className='justify-content-center d-flex'>
                <button className='btn btn-outline-primary mt-2' onClick={this.handleClick}>Add Item</button>
            </div>
          </div>
        </div>
      </>
    )
  }
}

const mapDispatchToProps = dispatch => ({
    addItem: (val) => dispatch(addItem(val)),
    addHistory: (val) => dispatch(addHistory(val))
})

export default connect(null, mapDispatchToProps)(AddItems)
