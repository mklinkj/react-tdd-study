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



### 5) State

한 컴포넌트 안에서 동적 데이터를 다룸

컴포넌트 안에서 State로 다루기 위해서는 useState라는 리액트 훅을 사용해야함.

```react
import React, { useState } from 'react';
```

useState를 사용하여 컴포넌트 안에서 동적으로 변경할 할일 데이터

```react
const [toDo, setToDo] = useState('');
```

```react
const 배열 = useState (데이터 초기값);
// 배열[0]: 데이터 초기값이 들어간 변수
// 배열[1]: 데이터를 수정할 수 있는 Set 함수

// 구조분해 할당 활용
const [변수명, Set함수명] = useState (데이터 초기값);
```

* useState를 사용하여 할당 받은 변수는 불변값
  * 변경을 위해선 반드시 Set 함수를 사용해야함.

* p152
  * 리액드에서는 map과 같은 반복문을 사용하여 반복적으로 동일한 컴포넌트를 화면에 표시하는 경우 key를 항상 사용해아함.
* p152 하단
  * value라는 속성이 추가 되어있는데... 이게 없어도 되는줄 알았는데 없으면 안되는 구나... input value를 ''로 초기화해서 비워주게 하려는 역할 같다.




## 의견

* styled-components 를 사용하게되면 tsx 파일에 코드의 문자열로 스타일을 지정하게되는데, 여기서 구문강조가 되면 좋은데.. 그게 안되는점이 좀 아쉬운것 같다. 오타날까봐 신경쓰게됨.



## 정오표

* p127 
  * 중간쯤 ./src/Components/Button/index.`html` > ./src/Components/Button/index.`tsx`
