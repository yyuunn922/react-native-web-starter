import React, {View} from 'react-native';
import './global.css';
import {RouteListEnum, ScreenListData} from './src/route.tsx';
import {Platform} from 'react-native';
import {LinkingOptions, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Key} from './src/util/envKey.tsx';

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
    <View className={'w-full h-full'}>
      <NavigationContainer linking={linking}>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName={RouteListEnum.main}>
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
    </View>
  );
};
