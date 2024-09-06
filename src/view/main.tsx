import React, {useEffect, useRef} from 'react';
import {useLoader, useThree} from '@react-three/fiber';
import {PositionalAudio as DreiPositionalAudio} from '@react-three/drei';
import {
  AudioLoader,
  AudioListener,
  PositionalAudio as ThreePositionalAudio,
} from 'three';
import {Canvas} from '../component/canvas/canvas';
import { View } from "react-native";

export const Main: React.FC = () => {
  // 오디오 파일 경로를 require를 통해 가져오기
  const audioUrl = require('../../assets/sound/temp.mp3').default;

  return (
    <>
      <Canvas />
    </>
  );
};

// Canvas 내부에서 사용할 AudioComponent 생성
const AudioComponent: React.FC<{audioUrl: string}> = ({audioUrl}) => {
  const audioRef = useRef<ThreePositionalAudio | null>(null);
  const listenerRef = useRef<AudioListener>(new AudioListener());

  // AudioLoader를 사용하여 오디오 파일을 로드합니다.
  const audioBuffer = useLoader(AudioLoader, audioUrl) as AudioBuffer;
  const {camera} = useThree();

  useEffect(() => {
    const refCurrentSave = listenerRef.current;
    camera.add(refCurrentSave);
    return () => {
      camera.remove(refCurrentSave);
    };
  }, [camera]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.setBuffer(audioBuffer);
      audioRef.current.setRefDistance(1);
      audioRef.current.play();
    }
  }, [audioBuffer]);

  return (
    <DreiPositionalAudio
      ref={audioRef as React.MutableRefObject<ThreePositionalAudio>}
      args={[listenerRef.current]}
      url={audioUrl}
    />
  );
};
