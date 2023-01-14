# 02 리액트 개발환경



## 진행

* 나는 Windows 10 이상 환경에서 진행할 것이고, [NVM for Windwos](https://github.com/coreybutler/nvm-windows)를 잘 쓰고 있어서, 추가로 설치할 내용은 없었다.

  * 책 지면에 표시된 node 버전은 `v12.6.0` 이였다.

  * 2023년 1월 13일 기준 v12의 마지막버전은 아래와 같다.

    `lts/erbium -> v12.22.12`

  * node 12버전을 사용하려했는데, 현재(`2023년 1월`)는 최소 node 14버전 이상이 되야 설치가 되는 것 같다.
  
    ```
    > npx create-react-app --version
    You are running Node 12.22.12.
    Create React App requires Node 14 or higher.
    Please update your version of Node.
    >
    ```
  
    
  
  * node 버전은 `v16.19.0`를 사용하다가 이상없으면 올리자..

#### 리액트를 시작하는 방법

* 혼공스크립트에서 그냥 스크립트 URL추가해서 하는 방법을 해보긴함.. 기억안나는게 문제지만. 😓



### create-react-app

* 저자님의 `create-react-app --version` 결과를 볼 수 있었는데, `4.0.0` 이였다. 현재(`2023년 1월`)는 5.0.1 이 였음.

  ```
  > npx create-react-app --version
  5.0.1
  >
  ```

  * npm은 패키지를 설치할 때 사용, npx는 패키지를 실행할 때 사용.

* 프로젝트 생성

  ```
  > npx create-react-app my-app
  > cd my-app
  > npm start
  ```

  



## 의견

* node 16에, create-react-app 버전이 5.0.1이긴 하지만 아직까진 책 내용과 큰 차이는 없는 것 같다.

