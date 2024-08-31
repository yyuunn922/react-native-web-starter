import {View, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ScreenListName, ScreenType} from '../route/screenType.tsx';
export const Main = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ScreenType>>();
  return (
    <View>
      <Button
        title={'오오'}
        onPress={() => navigation.push(ScreenListName.temp)}
      />
    </View>
  );
};
