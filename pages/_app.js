import React from 'react'
import App from 'next/app'
import Layout from '../components/Layout'

import bugsnagClient from '../lib/bugsnag'
import Error from './_error'

const ErrorBoundary = bugsnagClient.getPlugin('react')

export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

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
