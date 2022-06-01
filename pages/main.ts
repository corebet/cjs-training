const { I } = inject();

export = {

  // data
  headers: {
    Accept: '*/*',
  },

  // locators
  mainPageUrl: 'https://www.betclic.fr/',

  // methods

  validateHttpCode(state: any, expected: number) {
    I.assertEqual(state.responseObj.status, expected);
  }

}
