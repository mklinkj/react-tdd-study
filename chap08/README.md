# 08 Context API와 localStorage

> 생활코딩에서 react-redux를 사용해보긴 했는데, ... 책을 훓어봤을 때, Context API는 리액트에서 자체적으로 지원하는 것 같은데... 잘 따라가보자~ 😄
> 

## 진행

#### 8.1 Context API

* 컴포넌트 사이에 공유되는 데이터를 위해 매번 공통 부모 컴포넌트를 수정하고 모든 컴포넌트에 Props를 전달하여 데이터를 사용하는 것은 매우 비효율적임.

* 리액트에서는 Flux라는 개념을 도입하였고, 그에 걸맞은 Context API를 제공하기 시작함.

* 컨택스트를 사용하기 위해서는 Context API를 사용하여 컨텍스트의 Provider와 Consumer를 생성해야함.

  

#### 8.2 프로젝트 생성

##### 설치

```bash
> npx create-react-app context-todo-list --template=typescript
> cd context-todo-list
>
> npm install --save styled-components
> npm install --save-dev @types/styled-components jest-styled-components
> npm install --save-dev husky lint-staged prettier
>
```

* .prettierrc

  ```json
  {
    "jsxBracketSameLine": true,
    "singleQuote": true,
    "trailingComma": "all",
    "printWidth": 100
  }
  ```

* package.json (husky, prettier 설정)

  ```json
    "scripts": {
      ...
    },
    "husky": {
      "hooks": {
        "pre-commit": "lint-staged"
      }
    },
    "lint-staged": {
      "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}": [
        "prettier --write"
      ]
    },
  ```

* tsconfig.json (절대 경로 설정)

  ```json
  {
    "compilerOptions": {
      ...
      "jsx": "react-jsx",
      "baseUrl": "src"
    },
    ...
  }
  ```
  
* 이후 기존 src를 삭제하고 6장에서 했던 src로 소스를 그대로 복사해서 붙여넣음.

  - [x] `npm run test`로 테스트 확인

  - [x] `npm start`로 프로젝트가 정상 시작 되는지 확인



* 


## 의견

* 
  

## 정오표

* 없음.
