module.exports = {
  reactStrictMode: true,
}

// enable sass
const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

// external image link
module.exports = {
  images: {
    domains: ['www.gravatar.com'],
  },
}