import {Main} from '../view/main.tsx';
import {Temp} from '../view/Temp.tsx';
import {NotFound} from '../view/notFound.tsx';
import {ScreenListName, RouteListType} from './screenType.tsx';

export const ScreenListData: RouteListType[] = [
  {
    name: ScreenListName.main,
    component: Main,
    path: '/',
  },
  {
    name: ScreenListName.temp,
    component: Temp,
    path: '/temp',
  },
  {name: ScreenListName.notFound, component: NotFound, path: '*'},
];
