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



#### 7.3 개발

##### 1) Button 컴포넌트

* 리액트의 Component 상속
* 함수 컴포넌트에서는 함수의 매개변수를 통해 부모 컴포넌트로부터 Props를 전달받으나...
* 클래스 컴포넌트에서는 `this.props`를 사용하여 부모 컴포넌트로 부터 전달받음

...



#### 7.4 라이프 사이클 함수

1. constructor 함수
2. render 함수
   * 클래스 컴포넌트가 랜더링(화면에 표시되는 부분) 되는 부분을 정의
   * 부모로 부터 Props가 변경되거나 this.setState에 의해 값이 변경되어 화면 변경 필요가 있을 때마다 호출
     * render에서 this.state를 직접 호출할 경우 무한 루프에 빠질 수 있는 점 주의!
3. getDerivedStateFromProps
   * 부모로 부터 받은 Props와 State를 동기화할 때 사용됨
   * 컴포넌트가 생성될 때 한번 호출됨
4. componentDidMount 함수
   * 클래스 컴포넌트가 처음으로 화면에 표시된 이후에 이 함수가 호출됨
5. shouldComponentUpdate함수
   * Props또는 State의 값이 변경 되었지만, 다시 화면을 그리고 싶지 않을 때 이함수를 사용하여 랜더링 제어가능
6. getSnapshotBeforeUpdate 함수
   * Props또는 State가 변경되어 화면을 다시 그리기 위해 render함수가 호출된후 실제로 화면 갱신되기 바로 직전에 이 함수가 호출됨
7. componentDidUpdate 함수
   * 컴포넌트가 처음 화면에 표시될 때는 실행되지 않지만, Props또는 State가 변경되어 화면이 갱신될 때마다 render함수가 호출된 후 호출되는 함수.
8. componentWillUnmount 함수
   * 해당 컴포넌트가 화면에서 완전히 사라진 후 호출되는 함수
9. componentDidCatch 함수
   * render 함수의 JSX에서 발생하는 에러를 예외 처리할 수 있게 도와주는 함수



#### 7.5 테스트

* 6장에서 만든 테스트가 그대로 잘 동작했다. 😄

#### 7.6 요약

* 리엑트를 새로 배우는 사람이면 함수 컴포넌트 방식으로 공부하는 것이 나음.
* 그러나 기존 클래스컴포넌트 방식의 코드를 접할일도 있으므로 알아두긴 해야함.


## 의견

* 6장에서 진행한 테스트 코드가 그대로 잘 쓸수 있어서 좋았다.
* 클래스로 변환하는 것은 그렇게 어렵지 않았다.
* 라이프 사이클 함수를 여러가지 소개해주셨는데, 지금은 잘모르기 때문에, 활용방법이 잘 생각이 나지 않는다.. 😅

## 정오표

* 없음.
