# 소개
> 많은 부분, 비효율적이고, 수정되야할 부분들이 존재합니다, 계속 업데이트 예정입니다.

ReactNative에 ReactNativeWeb이 셋팅되어있습니다, 새로운 프로젝트를 시작할때 Native와 함께 Web환경까지 고려하고 있다면, 귀찮은 초기셋팅 없이 프로젝트를 바로 시작할수있습니다,

Starter에는 Webgl을 쉽게 구현할수있도록, React-Three-Fiber를 사용합니다, expo module을 사용하지만, expo 프로젝트는 아닙니다.

- [x] react-native
- [x] react-native-web (webpack)
- [x] react-native-vector-icon
- [x] react-three-fiber ( expo module, drei )
- [x] dotenv
- [ ] react-three-fiber-sound
- [ ] state

# 어떻게 시작해야 할까요?
```
// 새로운 프로젝트 이름으로 starter를 clone합니다
git clone https://github.com/yyuunn922/react-native-web-starter NewAppName
rm -rf .git && npm install && cd ios && pod install && cd .. && ./gradlew clean && cd ..

// 새로운 이름으로 프로젝트를 변경합니다
react-native-rename "NewAppName" --skipGitStatusCheck or react-native-rename "NewAppName" --bundleID "com.newapp.name" --skipGitStatusCheck
// package.js에서 "start:dev"를 실행하면, 필요 env가 복사됩니다, 필요한 환경을 추가해서 사용하세요
```
끝 입니다, 이제 개발을 시작하세요.
> 이후, .gitignore에 .env 및 숨김파일을 설정후 새로운 레포지토리를 생성 init 하세요, 
