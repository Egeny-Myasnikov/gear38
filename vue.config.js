const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/gear38/'
    : '/'
}

module.exports = {
  // ...Other Vue config options here, possibly
  pwa: {
    name: "gear38",
    themeColor: "#493CA6",
    short_name: "gear38"
  }
};