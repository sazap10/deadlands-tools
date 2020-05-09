import React from 'react'
import App from 'next/app'
import Layout from '../components/Layout'

import BugsnagPluginReact from '@bugsnag/plugin-react'
import Bugsnag from '@bugsnag/js'

Bugsnag.start({ apiKey: process.env.BUGSNAG_API_KEY, plugins: [new BugsnagPluginReact(React)] })

import Error from './_error'

const ErrorBoundary = Bugsnag.getPlugin('react')

export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <ErrorBoundary FallbackComponent={Error}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ErrorBoundary>
    )
  }
}
