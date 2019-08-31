
import React from 'react'
import bugsnag from '@bugsnag/js'
import bugsnagReact from '@bugsnag/plugin-react'

const bugsnagClient = bugsnag({
  apiKey: process.env.BUGSNAG_API_KEY
})
bugsnagClient.use(bugsnagReact, React)

export default bugsnagClient
