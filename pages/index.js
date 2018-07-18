import React from 'react'
import {connect} from 'react-redux'

import exampleActionCreators from '../actions/example'
import Page from '../components/page'

class Index extends React.Component {
  static async getInitialProps (props) {
    const { store, isServer } = props.ctx
    store.dispatch(exampleActionCreators.tickClock(isServer))

    if (!store.getState().placeholderData) {
      store.dispatch(exampleActionCreators.loadData())
    }

    return { isServer }
  }

  componentDidMount () {
    this.props.dispatch(exampleActionCreators.startClock())
  }

  render () {
    return <Page title='Index Page' linkTo='/other' navigateTo='Other Page' />
  }
}

export default connect()(Index)
