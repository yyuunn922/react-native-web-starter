import React from 'react-native';
import './global.css';
import {Platform} from 'react-native';
import {
  LinkingOptions,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Key} from './src/util/envKey.tsx';
import {ScreenListData} from './src/route/screen.tsx';
import {ScreenListName} from './src/route/screenType.tsx';

const Stack = createNativeStackNavigator();
type ScreenConfig = {
  [key: string]: string;
};

const linking: LinkingOptions<ReactNavigation.RootParamList> = {
  prefixes: [Key.Domain!],
  config: {
    screens: ScreenListData.reduce<ScreenConfig>((acc, item) => {
      if (item.path) {
        acc[item.name] = item.path;
      }
      return acc;
    }, {} as ScreenConfig),
  },
};

export const App = () => {
  return (
    <>
      <NavigationContainer linking={linking}>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName={ScreenListName.main}>
          {ScreenListData.map(item => (
            <Stack.Screen
              key={item.name}
              name={item.name}
              component={item.component}
              options={{
                title: item.title
                  ? item.title
                  : Platform.OS === 'web'
                  ? document.title
                  : '',
              }}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
