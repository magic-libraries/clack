export const View = ({ url, ...state }) => [
  p(state.requesting ? `Requesting ${url}` : 'Idle'),
  state.status && p(`Last Status from ${url}: ${state.status}`),

  div(
    button(
      {
        onclick: state => [
          {
            ...state,
            requesting: true,
          },
          [
            lib.http,
            {
              url,
              done: actions.examplebutton.done,
              error: actions.examplebutton.error,
            },
          ],
        ],
      },
      `Request ${url}`,
    ),
  ),
]

export const actions = {
  examplebutton: {
    click: state => ({
      ...state,
      requesting: true,
    }),

    done: (state, xhr) => ({
      ...state,
      requesting: false,
      status: xhr.status,
    }),

    error: (state, xhr) => ({
      ...state,
      requesting: false,
      status: xhr.status,
    }),
  },
}
