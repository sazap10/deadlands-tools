const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})
const withSass = require('@zeit/next-sass')

const withSourceMaps = require('@zeit/next-source-maps')()

const { BugsnagSourceMapUploaderPlugin } = require('webpack-bugsnag-plugins')

const config = {
  target: 'serverless',
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  env: {
    BUGSNAG_API_KEY: process.env.BUGSNAG_API_KEY
  },
  webpack(config) {
    config.plugins.push(
      new BugsnagSourceMapUploaderPlugin({
        apiKey: process.env.BUGSNAG_API_KEY,
        appVersion: process.env.npm_package_version,
        publicPath: 'http://localhost:3000/_next/'
      })
    )
    return config
  }
}

module.exports = withSass(withSourceMaps(withMDX(config)))
