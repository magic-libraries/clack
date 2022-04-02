## @magic-libraries/http

promisified XMLHttpRequest for
[@magic](https://magic.github.io/core)

[html-docs](https://magic-libraries.github.io/http)

[![NPM version][npm-image]][npm-url]
[![Linux Build Status][travis-image]][travis-url]
[![Windows Build Status][appveyor-image]][appveyor-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]

[npm-image]: https://img.shields.io/npm/v/@magic-libraries/http.svg
[npm-url]: https://www.npmjs.com/package/@magic-libraries/http
[travis-image]: https://img.shields.io/travis/com/magic-libraries/http/master
[travis-url]: https://travis-ci.com/magic-libraries/http
[appveyor-image]: https://img.shields.io/appveyor/ci/magiclibraries/http/master.svg
[appveyor-url]: https://ci.appveyor.com/project/magiclibraries/http/branch/master
[coveralls-image]: https://coveralls.io/repos/github/magic-libraries/http/badge.svg
[coveralls-url]: https://coveralls.io/github/magic-libraries/http
[greenkeeper-image]: https://badges.greenkeeper.io/magic-libraries/http.svg
[greenkeeper-url]: https://badges.greenkeeper.io/magic-libraries/http.svg
[snyk-image]: https://snyk.io/test/github/magic-libraries/http/badge.svg
[snyk-url]: https://snyk.io/test/github/magic-libraries/http

#### <a name="install"></a>installation
```bash
npm install --save-exact @magic-libraries/http
```

#### <a name="usage"></a>usage

lib.http is an promisified http request,
it expects a done and an error action as well as a url to point the request to.

see [ExampleButton](https://github.com/magic-libraries/http/tree/master/example/assets/ExampleButton)
for a usage example

#### changelog

##### 0.0.1
first release

##### 0.0.2
* add responseType and json handling
* add requestType, json.stringify the request body if it is set
* add timeoutSeconds and timeout handler function

##### 0.0.3
update dependencies

##### 0.0.4 - unreleased
...
