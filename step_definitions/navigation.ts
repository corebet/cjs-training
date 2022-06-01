const { navigationFragment, cookiesFragment } = inject();

Given('a user coming to Betclic', () => {
  navigationFragment.goToMainPage();
  cookiesFragment.rejectCookies();
});

