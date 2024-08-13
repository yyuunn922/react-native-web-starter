import {Platform, SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import {PlatformTest} from './platformTest.tsx';
import {AnimationTest} from './animationTest.tsx';

export const Main = () => {
  return (
    <SafeAreaView>
      <View className={'border bg-red-600'}>
        <Text>{Platform.OS}</Text>
        <Text>기본</Text>
        <PlatformTest />
        <AnimationTest />
      </View>
    </SafeAreaView>
  );
};
