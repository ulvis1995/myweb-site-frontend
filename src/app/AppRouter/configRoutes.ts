import * as Pages from '../../pages/index';

export enum paths {
  MAIN = '/',
  REDIRECT = '/auth',
  PORTFOLIO = 'portfolio',
  ABOUT = 'about',
  CONTACTS = 'contacts',
  NEWS = 'news',
  AUTH = 'auth',
  ADMIN = 'admin',
  REGISTRATION = 'registration',
  NOTFOUND = '*',
}

export type TRoute = {
  id: string;
  isPrivate: boolean;
  element: ({}) => JSX.Element;
  path: string;
  children?: TRoute[];
};

export const configRoutes: TRoute[] = [
  {
    id: '1',
    isPrivate: false,
    element: Pages.Main,
    path: paths.MAIN,
  },
  {
    id: '2',
    isPrivate: false,
    element: Pages.PortfolioPage,
    path: paths.PORTFOLIO,
    children: [
      {
        id: '10',
        isPrivate: false,
        element: Pages.PortfolioPage,
        path: paths.PORTFOLIO,
      },
    ],
  },
  {
    id: '3',
    isPrivate: false,
    element: Pages.About,
    path: paths.ABOUT,
  },
  {
    id: '4',
    isPrivate: false,
    element: Pages.Contacts,
    path: paths.CONTACTS,
  },
  {
    id: '5',
    isPrivate: false,
    element: Pages.NewsPage,
    path: paths.NEWS,
  },
  {
    id: '6',
    isPrivate: false,
    element: Pages.Auth,
    path: paths.AUTH,
  },
  {
    id: '7',
    isPrivate: false,
    element: Pages.Auth,
    path: paths.REGISTRATION,
  },
  {
    id: '8',
    isPrivate: false,
    element: Pages.Page404,
    path: paths.NOTFOUND,
  },
  {
    id: '9',
    isPrivate: true,
    element: Pages.Admin,
    path: paths.ADMIN,
  },
];
