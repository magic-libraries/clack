export const View = state => [
  h1(state.title),

  p(state.description),

  GitBadges('@magic-libraries/http'),

  h3({ id: 'installation' }, 'installation'),

  Pre('npm install --save-exact magic-libraries/http'),

  h3({ id: 'usage' }, 'usage'),
  p('in a page / component, just use the lib.http function as effect.'),

  h4({ id: 'usage-plaintext' }, 'plaintext'),

  p([
    'see ',
    Link({
      text: 'ExampleButton',
      to: 'https://github.com/magic-libraries/http/blob/master/example/assets/ExampleButton.mjs',
    }),
    ' for a reference implementation',
  ]),

  p('use it in a page:'),

  Pre(`
export const View = state => ExampleButton({ ...state, url: 'https://jaeh.at')
  `),

  p('renders:'),

  ExampleButton({ ...state, url: 'https://jaeh.at' }),

  h4({ id: 'usage-json' }, 'json'),

  p([
    'see ',
    Link({
      text: 'JsonExampleButton',
      to: 'https://github.com/magic-libraries/http/blob/master/example/assets/JsonExampleButton.mjs',
    }),
    ' for a reference implementation',
  ]),

  p('use it in a page:'),

  Pre(`
export const View = state => JsonExampleButton({
  ...state,
  url: 'https://magic-libraries.github.io/http/hello.json',
})
  `),

  p('renders:'),

  JsonExampleButton({ ...state, url: '/http/hello.json' }),

  div([
    h3({ id: 'source' }, 'source'),

    p([
      'the source for this page is in the ',
      Link({
        text: 'example directory',
        to: 'https://github.com/magic-libraries/http/tree/master/example',
      }),
      ' and gets built and published to github using ',
      Link({ text: '@magic/core', to: 'https://github.com/magic/core/' }),
    ]),
  ]),
]
