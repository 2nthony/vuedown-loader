# vuedown-loader

> Webpack loader for [vuedown](https://github.com/evillt/vuedown)

Please consider starring the project to show your ❤️ and support.

[![NPM version](https://badgen.net/npm/v/@evillt/vuedown-loader?icon=npm)](https://npmjs.com/package/@evillt/vuedown-loader)
[![NPM download](https://badgen.net/npm/dm/@evillt/vuedown-loader?icon=npm)](https://npmjs.com/package/@evillt/vuedown-loader)
[![CircleCI](https://badgen.net/circleci/github/evillt/vuedown-loader?icon=circleci)](https://circleci.com/gh/evillt/vuedown-loader/tree/master)
[![License](https://badgen.net/npm/license/@evillt/vuedown-loader)](./LICENSE)
[![donate](https://badgen.net/badge/support%20me/donate/f2a)](https://donate.evila.me)

## Install

```console
yarn add vuedown @evillt/vuedown-loader --dev
```

## Usage

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          {
            loader: 'vue-loader'
          },
          {
            loader: '@evillt/vuedown-loader'
          }
        ]
      }
    ]
  }
}
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

**vuedown-loader** © [evillt](https://github.com/evillt), Released under the [MIT](./LICENSE) License.

Authored and maintained by **EVILLT** with help from contributors ([list](https://github.com/evillt/vuedown-loader/contributors)).

> [evila.me](https://evila.me) · GitHub [@evillt](https://github.com/evillt) · Twitter [@evillt](https://twitter.com/evillt)
