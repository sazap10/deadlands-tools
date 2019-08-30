const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})
const withSass = require('@zeit/next-sass')

const config = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  serverRuntimeConfig: {
    BUGSNAG_API_KEY: process.env.BUGSNAG_SERVER_API_KEY
  },
  publicRuntimeConfig: { // Will be available on both server and client
    BUGSNAG_API_KEY: process.env.BUGSNAG_BROWSER_API_KEY // Pass through env variables
  }
}

module.exports = withSass(withMDX(config))
