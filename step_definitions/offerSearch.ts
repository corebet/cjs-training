const { offerSearchFragment } = inject();

Before(() => {
  state = {};
});

When('the user searches matches or competitions with invalid data', async (dataTable: any) => {
  await offerSearchFragment.typeInTheSearch(dataTable, state);
});

Then('the user founds no matches or competitions', () => {
  offerSearchFragment.validateContent(state);
});
