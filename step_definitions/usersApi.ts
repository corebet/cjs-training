const { usersProxy } = inject();

Before(() => {
  state = {};
});


When('the user gets data from usersApi', async () => {
  await usersProxy.getDataUsers(state);
});

Then('data should be provided in the response', () => {
  usersProxy.validateUsersApi(state);
});
