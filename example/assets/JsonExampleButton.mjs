export const View = ({ url, ...state }) => [
  p(state.requestingJson ? `Requesting ${url}` : 'Idle'),
  state.responseJson && p([`Last Response from ${url}:`, Pre(lib.json.stringify(state.responseJson, null, 2))]),

  div(
    button(
      {
        onclick: state => [
          {
            ...state,
            requestingJson: true,
          },
          [
            lib.http,
            {
              url,
              responseType: 'json',
              done: actions.jsonexamplebutton.done,
            },
          ],
        ],
      },
      `Request ${url}`,
    ),
  ),
]

export const actions = {
  jsonexamplebutton: {
    click: state => ({
      ...state,
      requestingJson: true,
    }),

    done: (state, xhr) => console.log({ xhr }) || ({
      ...state,
      requestingJson: false,
      responseJson: xhr.response,
    }),
  },
}
