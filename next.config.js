const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})
const withSass = require('@zeit/next-sass')

const config = {
  target: 'serverless',
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  env: {
    BUGSNAG_API_KEY: process.env.BUGSNAG_API_KEY
  }
}

module.exports = withSass(withMDX(config))
