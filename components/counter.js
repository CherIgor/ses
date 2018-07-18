import React, {Component} from 'react'
import {connect} from 'react-redux'

import exampleActionCreators from '../actions/example'

class Counter extends Component {
  increment = () => {
    this.props.dispatch(exampleActionCreators.increment())
  }

  decrement = () => {
    this.props.dispatch(exampleActionCreators.decrement())
  }

  reset = () => {
    this.props.dispatch(exampleActionCreators.reset())
  }

  render () {
    const {count} = this.props
    return (
      <div>
        <style jsx>{`
          div {
            padding: 0 0 20px 0;
          }
        `}</style>
        <h1>
          Count: <span>{count}</span>
        </h1>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    )
  }
}

const mapStateToProps = ({example: {count}}) => ({count})
export default connect(mapStateToProps)(Counter)
