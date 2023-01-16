import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  it('renders component correctly', () => {
    const { container } = render(<App />); // 리액트 컴포넌트를 화면에 표시
    // screen: 리액트 컴포넌트가 표시된 화면을 의미
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();

    const imgElement = screen.getAllByRole('img')[0];
    expect(imgElement).toHaveClass('App-logo');
    expect(imgElement).toHaveAttribute('src', 'logo.svg');

    const pElement1 = screen.getByText(/Edit /i);
    expect(pElement1).toBeInTheDocument();
    const pElement2 = screen.getByText(/src\/App.tsx/i);
    expect(pElement2).toBeInTheDocument();
    const pElement3 = screen.getByText(/ and save to reload./i);
    expect(pElement3).toBeInTheDocument();

    // 테스트는 성공하지만 직접 노드에 접근하지 말고,
    // 테스트 라이브러리 메서드 활용하라고 lint 경고 밑줄 설정됨 ㅠㅠ
    // expect(container.getElementsByTagName('p')).toHaveLength(1);
    // expect(container.getElementsByTagName('p')[0]).toHaveTextContent(
    //   'Edit src/App.js and save to reload.',
    // );

    expect(container).toMatchSnapshot();
  });
});
