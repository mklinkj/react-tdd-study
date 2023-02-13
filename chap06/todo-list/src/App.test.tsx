import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import 'jest-styled-components';
import exp from 'constants';

describe('<App />', () => {
  it('renders component correctly', () => {
    const { container } = render(<App />);

    const toDoList = screen.getByTestId('toDoList'); // 해당 컴포넌트의 data-testid 속성 값
    expect(toDoList).toBeInTheDocument();
    expect(toDoList.firstChild).toBeNull();

    const input = screen.getByPlaceholderText('할 일을 입력해 주세요');
    expect(input).toBeInTheDocument();
    const label = screen.getByText('추가');
    expect(label).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
