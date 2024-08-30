import React from 'react';
import {NotFound} from './view/notFound.tsx';
import {Main} from './view/main.tsx';

export type RouteListType = {
  name: string;
  title?: string;
  component: React.ComponentType;
  path?: string;
};

export enum RouteListEnum {
  main = 'main',
  notFound = 'notFound',
}

export type Route = {
  [RouteListEnum.main]: undefined;
  [RouteListEnum.notFound]: undefined;
};

export const ScreenListData: RouteListType[] = [
  {
    name: RouteListEnum.main,
    component: Main,
    path: '/',
  },
  {name: RouteListEnum.notFound, component: NotFound, path: '*'},
];
