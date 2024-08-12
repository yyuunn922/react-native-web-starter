import {Platform, SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import {PlatformTest} from './platformTest.tsx';

export const Main = () => {
  return (
    <SafeAreaView>
      <View className={'border'}>
        <Text>{Platform.OS}</Text>
        <Text>기본1</Text>
        <PlatformTest />
      </View>
    </SafeAreaView>
  );
};
