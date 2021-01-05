import { is } from '@magic/test'

class XMLHttpRequest {
  constructor() {
    this.status = 200
    this.readyState = 0
    this.calledFunctions = []
  }

  open() {
    this.loaded()
  }

  send() {}

  loaded() {
    this.readyState = 4
    this.status = 200
    this.onload(this)
  }

  error() {
    this.readyState = 4
    this.status = 400
    this.onerror(this)
  }
}

globalThis.XMLHttpRequest = XMLHttpRequest

import httpDefault, { http } from '../src/index.mjs'

const dispatch = (done, xhr) => {
  done(xhr)
}

export default [
  { fn: () => httpDefault, expect: is.fn, info: 'http default export is a function' },
  { fn: () => http, expect: is.fn, info: 'http named export is a function' },
  {
    fn: () => http,
    expect: is.deep.equal(httpDefault),
    info: 'default and named export are equal',
  },
  {
    fn: new Promise(done => http(dispatch, { done, url: 'ohai' })),
    expect: t => t.status === 200 && t.readyState === 4,
    info: 'http request mock status and readyState get set correctly',
  },
]
