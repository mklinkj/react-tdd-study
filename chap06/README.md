# 06 Props와 State

> 

## 진행

* Props
  * 부모 컴포넌트에서 자식 컴포넌트로 전달되는 데이터

  * 전달 받은 자식에서는 데이터를 변경할 수 없음.

* State
  * 한 컴포넌트 안에서 유동적인 데이터를 다룰 때 사용

  * 한 컴포넌트의 상태


#### 프로젝트 준비

```bash
> npx create-react-app todo-list --template=typescript
```

* 스타일링 관리 (styled-components) 설치 / 설정

  ```bash
  > cd todo-list
  > npm install --save styled-components
  > npm install --save-dev @types/styled-components jest-styled-components
  > npm install --save-dev husky lint-staged prettier
  ```

* 루트에 .prettierrc 파일 생성

  ```json
  {
    "jsxBracketSameLine": true,
    "singleQuote": true,
    "trailingComma": "all",
    "printWidth": 100
  }
  ```

  이전 장에도 언급했지만... module.exports 하지 않고도 잘 인식이 되서 위와 같이 했다.

* lint-staged, husky 설정 (package.json)

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
    ...
  ```

* 절대경로 설정 (tsconfig.json)

  ```json
    "compilerOptions": {
      ...
      "jsx": "react-jsx",
      "baseUrl": "src"
    },
    ...
  ```

* 이후 여러가지 설정 p104~108 참고...

  * 여기서 절대 경로 설정은 넣었는데.. Compoents 폴더를 만들거나 하진 않으셨다.



#### 개발








## 의견

* styled-components 를 사용하게되면 tsx 파일에 코드의 문자열로 스타일을 지정하게되는데, 여기서 구문강조가 되면 좋은데.. 그게 안되는점이 좀 아쉬운것 같다. 오타날까봐 신경쓰게됨.



## 정오표

* p127 
  * 중간쯤 ./src/Components/Button/index.`html` > ./src/Components/Button/index.`tsx`
