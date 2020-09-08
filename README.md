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

- client 측 webpack build 분리 (node, web)
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