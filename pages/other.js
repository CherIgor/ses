import React from 'react'
import {connect} from 'react-redux'

import exampleActionCreators from '../actions/example'
import Page from '../components/page'

class Other extends React.Component {
  static async getInitialProps (props) {
    const { store, isServer } = props.ctx
    store.dispatch(exampleActionCreators.tickClock(isServer))
    return { isServer }
  }

  componentDidMount () {
    this.props.dispatch(exampleActionCreators.startClock())
  }

  render () {
    return <Page title='Other Page' linkTo='/' navigateTo='Index Page' />
  }
}

export default connect()(Other)
