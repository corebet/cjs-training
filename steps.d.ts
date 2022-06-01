/// <reference types='codeceptjs' />
type navigationFragment = typeof import('./fragments/navigation');
type cookiesFragment = typeof import('./fragments/cookies');
type mainPage = typeof import('./pages/main');
type footerFragment = typeof import('./fragments/footer');
type aboutPage = typeof import('./pages/about');
type responsibleGamingPage = typeof import('./pages/responsibleGaming');
type offerSearchFragment = typeof import('./fragments/offerSearch');
type usersProxy = typeof import('./proxy/users');

type ChaiWrapper = import('codeceptjs-chai');

declare namespace CodeceptJS {
  interface SupportObject {
    I: I,
    navigationFragment: navigationFragment,
    cookiesFragment: cookiesFragment,
    mainPage: mainPage,
    footerFragment: footerFragment,
    aboutPage: aboutPage,
    responsibleGamingPage: responsibleGamingPage,
    offerSearchFragment: offerSearchFragment,
    usersProxy: usersProxy
  }
  interface Methods extends Playwright, ChaiWrapper, REST { }
  interface I extends WithTranslation<Methods> { }
  namespace Translation {
    interface Actions { }
  }
}
