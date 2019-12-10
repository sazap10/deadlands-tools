
import React from 'react'
import bugsnag from '@bugsnag/js'
import bugsnagReact from '@bugsnag/plugin-react'

console.log(process.env.npm_package_version)

const bugsnagClient = bugsnag({
  apiKey: process.env.BUGSNAG_API_KEY,
  appVersion: process.env.APP_VERSION
})
bugsnagClient.use(bugsnagReact, React)

export default bugsnagClient
