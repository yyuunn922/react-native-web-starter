export type RouteListType = {
  name: string;
  title?: string;
  component: any;
  path?: string;
};

export enum ScreenListName {
  main = 'main',
  notFound = 'notFound',
  temp = 'temp',
}

export type ScreenType = {
  [ScreenListName.main]: undefined;
  [ScreenListName.notFound]: undefined;
  [ScreenListName.temp]: undefined;
};
