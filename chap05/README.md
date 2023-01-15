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




## 의견

* 

