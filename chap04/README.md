# 04 리액트의 테스트 - react-testing-library

> Jest는 전반적으로 자바스크립트를 테스트 할 수 있지만, react의 JSX의 오류를 잡아내기 힘들다.
>
> `react-testing-library` 를 사용하면 해결할 수 있다.
>
> * https://github.com/testing-library/react-testing-library

## 진행

* 테스트 프로젝트 생성

  ```
  > npx create-react-app react-testing-library-test
  ```

  * create-react-app 로 프로젝트를 생성하면 jest와 react-testing-library가 포함되므로 추가설치가 필요없음

  * 추가설치를 해야한다면...

    ```
    > npm install --save-dev @testing-library/react
    ```


### Lint 오류

```java
const { container } = render(<App />); // 리액트 컴포넌트를 화면에 표시
...
expect(container.getElementsByClassName('App-logo')).toHaveLength(1);
```

```
Avoid using container methods. Prefer using the methods from Testing Library, such as "getByRole()"eslinttesting-library/no-container
```

```
Avoid direct Node access. Prefer using the methods from Testing Library.eslinttesting-library/no-node-access
```

컨테이너 메서드 사용과 노드에 직접 접근을 피하고, getByRole() 같은 테스트 라이브러리 메서드를 쓰라는 것 같음.

```javascript
    const imgElement = screen.getByRole('img');
    expect(imgElement).toHaveClass('App-logo');
    expect(imgElement).toHaveAttribute('src', 'logo.svg');
    // 아래도 동일... 
    const imgElement = screen.getAllByRole('img')[0];
    expect(imgElement).toHaveClass('App-logo');
    expect(imgElement).toHaveAttribute('src', 'logo.svg');
```

위와 같은 방식으로 바꿨을 때,  lint 경고가 발생하지 않았다.

* Why You Should Not Use Classes in React Testing Library
  * https://www.webtips.dev/solutions/classes-in-react-testing-library



테스트 메서드를 활용하라고 해서 그렇게하려고하는데...

```javascript
    const pElement1 = screen.getByText(/Edit /i);
    expect(pElement1).toBeInTheDocument();
    const pElement2 = screen.getByText(/src\/App.js/i);
    expect(pElement2).toBeInTheDocument();
    const pElement3 = screen.getByText(/ and save to reload./i);
    expect(pElement3).toBeInTheDocument();
```

저걸 한줄로 표한할 수 있는 방법을 잘 모르겠다.

해당 p영역을 테스트 라이브러리가 App의 p영역을 Role로 선택할 수 있게 되어있지 않음.

`const p = screen.getByRole('p');` 이런 방식으로 읽으려하면... 

```html
    TestingLibraryElementError: Unable to find an accessible element with the role "p"

    Here are the accessible roles:

      banner:

      Name "":
      <header
        class="App-header"
      />

      --------------------------------------------------
      img:

      Name "logo":
      <img
        alt="logo"
        class="App-logo"
        src="logo.svg"
      />

      --------------------------------------------------
      link:

      Name "Learn React":
      <a
        class="App-link"
        href="https://reactjs.org"
        rel="noopener noreferrer"
        target="_blank"
      />

      --------------------------------------------------

    Ignored nodes: comments, script, style
    <body>
      <div>
        <div
          class="App"
        >
          <header
            class="App-header"
          >
            <img
              alt="logo"
              class="App-logo"
              src="logo.svg"
            />
            <p>
              Edit
              <code>
                src/App.js
              </code>
               and save to reload.
            </p>
            <a
              class="App-link"
              href="https://reactjs.org"
              rel="noopener noreferrer"
              target="_blank"
            >
              Learn React
            </a>
          </header>
        </div>
      </div>
    </body>
```

* https://components.guide/react+typescript/testing
  * `<p>`는 역할로서 지원이 되지않는 것 같다.. 원래 이런 듯...




## 의견

* 

  

