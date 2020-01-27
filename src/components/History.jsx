import React from 'react'
import { connect } from 'react-redux'

class History extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
        itemHistory: [],
        buttonClicked: 1
      }
  }
  componentDidMount () {
    const items = this.props.itemHistory.filter((e, i) => i >= 0 && i < 5)
    this.setState({
      itemHistory: items
    })
  }

  handlePagination = (e) => {
    let page = parseInt(e.target.id)
    let itemsToShow = this.props.itemHistory.filter((e, i) => i >= (page-1)*5 && i < page*5)
    this.setState({
      buttonClicked: page,
      itemHistory: itemsToShow
    })
  }

  render () {
    const num = parseInt(Math.ceil(this.props.itemHistory.length/5))
    const btnArr = []
    for (let i = 1; i <= num; i++) {
      btnArr.push(i)
    }
    return (
      <>
        <div className='container mt-5'>
          <table className='col-6 table table-bordered shadow mx-auto'>
            <thead>
              <tr>
                <td>Item Name</td>
                <td>Quantity</td>
                <td>Time</td>
              </tr>
            </thead>
            <tbody>
              {this.state.itemHistory.map(e => <tr key={Math.random()} className={e.type === 'add' ? 'text-success' : 'text-danger'}>
                <td>{e.itemName.toUpperCase()}</td>
                <td>{e.quantity}</td>
                <td>{e.time}</td>
              </tr>)}
              <tr>
                <td>Total Added</td>
                <td colSpan={2}>{this.props.itemHistory.reduce((a,e) =>e.type === 'add' ? a + e.quantity : a, 0)}</td>
              </tr>
              <tr>
                <td>Total Sales</td>
                <td colSpan={2}>{this.props.itemHistory.reduce((a,e) =>e.type === 'sell' ? a + e.quantity : a, 0)}</td>
              </tr>
            </tbody>
          </table>
          <div className='col-6 mx-auto'>
            {btnArr.map((e, i) => <button key={e} className={this.state.buttonClicked === e ? 'btn btn-outline-primary active mr-2' : 'btn btn-outline-primary mr-2'} id={e} onClick={this.handlePagination}>{e}</button>)}
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = state => ({
  itemHistory: state.itemHistory
})

export default connect(mapStateToProps)(History)
