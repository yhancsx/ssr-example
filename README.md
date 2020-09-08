## Table of Contents

Branch를 따라 Tutorial Step이 나누어져 있습니다.

### Preliminary
기술 스택입니다.

- react
- create-react-app
- webpack
- @loadable/component

### [1. master](https://github.com/yhancsx/ssr-example/tree/master)
프로젝트 초기 생성 및 설정입니다.

- init cra project
```
$ npx create-react-app ssr-example
$ yarn eject
```
- 2개 page 생성 (Home, News)
- Home에 counter 기능 추가

### [2. ssr](https://github.com/yhancsx/ssr-example/tree/ssr)
server-side rendering을 위한 wepback 및 loadable component 설정입니다.

- client 측 webpack config 수정 (lodable plugin, filename)
- server 측 entry point, webpack 및 build 코드 작성
- index.js에 loadableReady 및 hydrate 적용

### [3. code split](https://github.com/yhancsx/ssr-example/tree/code-splitting)
code splitting 을 이용하여 Home, News page chunk 를 분리합니다.

### Get Started
```
$ yarn build
$ yarn build:server
$ yarn start:server
```

### Referenes
- https://loadable-components.com/docs/server-side-rendering/
- https://medium.com/@minoo/react-typescript-ssr-code-splitting-%ED%99%98%EA%B2%BD%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0-d8cec9567871
- https://medium.com/@minoo/next-js-%EC%B2%98%EB%9F%BC-server-side-rendering-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-7608e82a0ab1
- https://blog.songc.io/react/react-ssr/
- https://github.com/SoYoung210/react-ssr-code-splitting