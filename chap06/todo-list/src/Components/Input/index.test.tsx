import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import 'jest-styled-components';

import { Input } from './index';

describe('<Button />', () => {
  it('renders component correctly', () => {
    const { container } = render(<Input value="default value" />);

    const input = screen.getByDisplayValue('default value');

    expect(input).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('renders placeholder correctly', () => {
    render(<Input placeholder="default placeholder" />);

    const input = screen.getByPlaceholderText('default placeholder');
    expect(input).toBeInTheDocument();
  });

  // Input 컴포넌트에 키보드 입력 테스트
  it('change the data', () => {
    render(<Input placeholder="default placeholder" />);

    // 찾은 컴포넌트는 기본적으로 HTMLElement 임, HTMLInputElement 으로 형변환
    const input = screen.getByPlaceholderText('default placeholder') as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'study react' } }); // 찾은 Input 컴포넌트에 데이터 입력

    expect(input.value).toBe('study react');
  });
});
