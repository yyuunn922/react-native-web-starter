import {Main} from '../view/main.tsx';
import {NotFound} from '../view/common/notFound.tsx';
import {ScreenListName, RouteListType} from './screenType.tsx';

export const ScreenListData: RouteListType[] = [
  {
    name: ScreenListName.main,
    component: Main,
    path: '/',
  },
  {name: ScreenListName.notFound, component: NotFound, path: '*'},
];
