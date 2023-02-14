# 07 클래스 컴포넌트

> 생활코딩 리액트를 따라해봤을 때, 클래스 컴포넌트로 해본적이 있긴한데... 다시한번 해보자! 😄



## 진행

#### 7.1 클래스 컴포넌트

* 리액트 훅이 나오기 전(리액트 16.8)까지 리액트는 클래스 컴포는트를 메인으로 사용함.
  * 함수 컴포넌트에서는 컴포넌트의 상태를 관리하기 위한 State를 사용할 수 없었기 때문.

#### 7.2 프로젝트 생성

##### 설치

```bash
> npx create-react-app class-todo-list --template=typescript
> cd class-todo-list
>
> npm install --save styled-components
> npm install --save-dev @types/sytled-components jest-styped-components
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



#### 7.3 개발

##### 1) Button 컴포넌트

* 리액트의 Component 상속
* 함수 컴포넌트에서는 함수의 매개변수를 통해 부모 컴포넌트로부터 Props를 전달받으나...
* 클래스 컴포넌트에서는 `this.props`를 사용하여 부모 컴포넌트로 부터 전달받음








## 의견

* 
  

## 정오표

* 
