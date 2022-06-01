const { I } = inject();

export = {

  // data
  headers: {
    Accept: '*/*',
  },

  usersApiUrlPath: 'http://gorest.co.in/public-api/users',
  // methods

  async getDataUsers(state: any): Promise<void> {
    const response: any = await I.sendGetRequest(this.usersApiUrlPath, this.headers);

    state.responseObj = {};
    state.responseObj.code = response.code
    state.responseObj = response
  },

  validateUsersApi(state: any) {
    I.assertEqual(state.responseObj.code, 200)
    for (const user of state.responseObj) {
      I.assertToBeA(user.id, 'number');
      I.assertToBeA(user.name, 'string');
    }
  }
}
