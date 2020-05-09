import React from 'react'
import PropTypes from 'prop-types';
import ErrorPage from 'next/error'
import Bugsnag from '@bugsnag/js'
export default class Page extends React.Component {
  static propTypes = {
    statusCode: PropTypes.number
  };
  static async getInitialProps (ctx) {
    if (ctx.err) Bugsnag.notify(ctx.err)
    return ErrorPage.getInitialProps(ctx)
  }
  render () {
    return <ErrorPage statusCode={this.props.statusCode || '¯\\_(ツ)_/¯'} />
  }
}
