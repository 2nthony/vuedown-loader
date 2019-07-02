const vuedown = require('vuedown')
const { getOptions } = require('loader-utils')

module.exports = function(source) {
  const options = getOptions(this)
  return vuedown(source, options)
}
