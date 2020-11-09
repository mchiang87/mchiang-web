export interface RouteParams {
  [paramName: string]: string | number | boolean | undefined;
}

export enum RoutePath {
  root = '/',
  resume = '/resume',
  projects = '/projects',
  contact = '/contact',
}
