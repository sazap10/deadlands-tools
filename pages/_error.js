import React from 'react'
import PropTypes from 'prop-types';
import ErrorPage from 'next/error'
import bugsnagClient from '../lib/bugsnag'

export default class Page extends React.Component {
  static propTypes = {
    statusCode: PropTypes.number
  };
  static async getInitialProps (ctx) {
    if (ctx.err) bugsnagClient.notify(ctx.err)
    return ErrorPage.getInitialProps(ctx)
  }
  render () {
    return <ErrorPage statusCode={this.props.statusCode || '¯\\_(ツ)_/¯'} />
  }
}
