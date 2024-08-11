import {ActivityIndicator, Text, View} from 'react-native';
import React from 'react';
import './global.css';

export const App = () => {
  return (
    <View className={'border bg-red-600 items-center justify-center'}>
      <ActivityIndicator size={'large'} />
      <Text className={'border'}>1231asasdfsa23</Text>
    </View>
  );
};
