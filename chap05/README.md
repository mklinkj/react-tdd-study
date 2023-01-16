# 05 나의 첫 리액트 프로젝트

> * 

## 진행

* 정적타입 분석기로 저자님이 타입 스크립트를 사용하신다고 함.

* VSCode에서 TypeScript는 추가 확장 설치 없이 기본으로 지원하나봄.

* 프로젝트 생성

  ```bash
  > npx create-react-app my-app
  ```

* 타입 스크립트 정의와 리액트 타입 정의 파일 설치

  ```bash
  > cd my-app
  > npm install --save-dev typescript @types/node @types/react @types/react-dom @types/jest
  ```

* 프로젝트에 타입 스크립트 설정용 tsconfig.json 파일 프로젝트 루트에 생성

  ```json
  {
    "compilerOptions": {
      "target": "ES5",
      "lib": [
        "DOM",
        "DOM.Iterable",
        "ESNext"
      ],
      "allowJs": true,    
      "skipLibCheck": true,
      "esModuleInterop": true,
      "allowSyntheticDefaultImports": true,
      "strict": true,
      "forceConsistentCasingInFileNames": true,
      "noFallthroughCasesInSwitch": true,
      "module": "ESNext",
      "moduleResolution": "Node",
      "resolveJsonModule": true,
      "isolatedModules": true,
      "noEmit": true,
      "jsx": "react-jsx"
    },
    "include": [
      "src",
      "custom.d.ts"
    ]
  }
  ```

  VSCode에서 거의 자동완성되고 각 항목의 설명도 볼 수 있었다.

* tsx: TypeScript JSX
* ts: TypeScript JavaScript

72쪽까지 진행해봤을 때, 테스트는 성공했지만, 실제 실행(`npm start`)시 오류가 발생했다.

index.tsx의  `document.getElementById('root')` 부분인데....

```
TS2345: Argument of type 'HTMLElement | null' is not assignable to parameter of type 'Element | DocumentFragment'.
  Type 'null' is not assignable to type 'Element | DocumentFragment'.
```

```
document.getElementById('root')!
```

끝에 `!`를 붙여서 null이 아니라는 지시를 해줘야 하는 것 같다.

* https://stackoverflow.com/questions/63520680/argument-of-type-htmlelement-null-is-not-assignable-to-parameter-of-type-el

* 그런데, 템플릿이 만들어준 것을 보았을 때는... 아래와 같았다. 타입을 명시해줘도 되는건지?

  ```javascript
  document.getElementById('root') as HTMLElement
  ```

  

### TypeScript 적용된 템플릿으로 바로 프로젝트 생성

```bash
> npx create-react-app my-app-typescript --template=typescript
```

* `--template=typescript` 옵션을 붙여서 실행

* 템플릿으로 만든 프로젝트를 보았을 때는 svg파일을 읽기위한 custom.d.ts 파일이 따로 없었음.



### styled-components 적용

* 테스트 프로젝트 생성
  ```bash
  > npx create-react-app my-app-style --template=typescript
  ```

* styled-compoents 설치

  ```
  > cd my-app-style
  > npm install --save styled-components
  > npm install --save-dev @types/styled-components jest-styled-components
  ```

* 테스트 코드에서 App-logo 클래스 이름 값을 확인하므로 className으로 속성을 넣어줘야할 것 같다.

  ```jsx
  <AppLogo className='App-logo' src={logo} alt="logo"/>
  ```

* 다름 페이지를 넘겨보니.. (p93)

  ```tsx
    const appLogo = screen.getByAltText('logo');
    expect(appLogo).toBeInTheDocument();
    expect(appLogo).toHaveAttribute('src', 'logo.svg');
    expect(appLogo).toHaveAttribute('alt', 'logo');
  ```

  alt텍스트를 찾아 진행할 수 있는데... 나는 getByAltText() 부분에서 혹시 Lint 경고 나오나 했는데... 나오지 않았다.



### 절대 경로로 컴포넌트 추가

* 예제 프로젝트 생성

  ```bash
  > npx create-react-app root-import --template=typescript
  ```

* Prettier

  ```bash
  > npm install --save-dev husky lint-staged prettier
  ```

  * husky: package.json에서 githook을 사용할 수 있게 해줌

  * lint-staged: 깃의 stage된 파일들에 특정 동작을 수행할 수 있도록 해줌

    ```json
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

    마크다운 *.md는 안해도 될 것 같긴한데...

  * 98쪽에서 js 형식으로 prettierrc를 작성하셨는데... 그냥 `.prettierrc`로 아래 내용처럼쓰더라도 커맨드 라인이나 vscode의 플러그인에서 잘 인식 되었었는데... 일단은 아래처럼 했다.

    ```json
    {
      "jsxBracketSameLine": true,
      "singleQuote": true,
      "trailingComma": "all",
      "printWidth": 100
    }
    ```

    

  #### TODO: 이부분은 일단 그냥 넘어가자!
  
  commit 을 할때 이벤트가 잘 안걸리는 것 같은데... staged 상태에서 `npx lint-staged`를 수동입력하면 되는 것 같긴한데.. 처음부터 커밋할 때는 저절로 안되는 것 같다.
  
  안되면 그냥 VS Code의 저장시 자동 포맷팅 켜두는게 나을 것 같다.
  
  


## 의견

* 

