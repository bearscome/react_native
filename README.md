flutter, react_native 등
android setting이 안될 경우가 많다.

안되는 이유 중
1순위 환경변수
2순위 리액트네이티브가 지원하는 sdk 버전

- 안드로이드 스튜디오에는 최신 버전을 설정하지만, 리액트 네이티브는 현재 31.0.0버전까지 지원한다.

안드로이드 스튜디오 설치 설명 중 아래의 블로그가 제일 깔끔하다.

- https://ninedc.tistory.com/72

---mac---

에러
현재 에러가 아래와 같다면

- error Failed to install the app. Make sure you have the Android development environment set up:
  -- chmod 755 android/gradlew를 작성한다
  -- 접근 권한의 문제이다
  -- https://right-hot.tistory.com/entry/React-Native-Error-spawn-gradlew-EACCES

- Could not find "Podfile.lock"
  -- 프로젝트의 ios 폴더로 이동후
  -- $ cd ios
  -- $ pod repo update
  -- $ pod install
  -- 다시 react-native run-ios실행하면 정상적으로 에뮬레이터가 나온다.

환경변수

- mac은 local.properties 파일을 생성 후 /Users/[username]/Library/Android/sdk을 추가해야 한다.
- vi ~/.zshrc - export ANDROID_SDK=/Users/jobchae/Library/Android/sdk - export PATH=/Users/jobchae/Library/Android/sdk/platform-tools:$PATH
  저장 후 ...
  source ~/.zshrc

실행 시 아래의 명령어를 작성하면 된다.
cd android
./gradlew clean
cd ..
react-native run-android

- https://iot624.tistory.com/175

folder 이름 변경 시

- iso: 해당 appname을 폴더명과 동일하게 변경한다.
- android
  - app.json과 ./android/app/src/main/java/com/{appName}/MainActivity.java을 동일하게 변경해야 하고, MainActivity.java안에 있는 return "$"도 동일하게 변경해야 한다.
  - https://github.com/react-native-community/upgrade-support/issues/96
