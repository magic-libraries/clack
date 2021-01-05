export const state = {
  title: '@magic-libraries/http',
  description: 'promisified XMLHttpRequest for @magic. lib.http is usable as an effect.',

  logotext: '@magic-libraries/http',
  menu: [
    { to: '/#installation', text: 'installation' },
    {
      to: '/#usage',
      text: 'usage',
      items: [
        { to: '-plaintext', text: 'plaintext' },
        { to: '-json', text: 'json' },
      ],
    },

    { to: '/#source', text: 'source' },
  ],
}

export const lib = {
  http: 'src/index.mjs',
}
