export const View = state => [
  h1(state.title),

  p(state.description),

  GitBadges('@magic-libraries/http'),

  h3('installation'),

  Pre('npm install --save-exact magic-libraries/http'),

  h3('usage'),
  p('in a page / component, just use the lib.http function as effect.'),

  p([
    'see ',
    Link({
      text: 'ExampleButton',
      to: 'https://github.com/magic-libraries/http/tree/master/example/assets/ExampleButton',
    }),
    ' for a reference implementation',
  ]),

  p('use it in a page:'),

  Pre(`
export const View = state => ExampleButton({ ...state, url: 'https://jaeh.at')
  `),

  p('renders:'),

  ExampleButton({ ...state, url: 'https://jaeh.at' }),

  div([
    h3('source'),

    p([
      'the source for this page is in the ',
      Link({
        text: 'example directory',
        to: 'https://github.com/magic-libraries/http/tree/master/example',
      }),
      ' and gets built and published to github using ',
      Link({ text: '@magic/core', to: 'https:/ / github.com / magic / core' }),
    ]),
  ]),
]
