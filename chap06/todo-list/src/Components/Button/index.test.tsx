import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';

import { Button } from './index';

describe('<Button />', () => {
  it('renders component correctly', () => {
    const { container } = render(<Button label="Button Test" />); // 버튼 랜더링
    const label = screen.getByText('Button Test'); // 랜더링된 버튼 컴포넌트를 찾음. (엄밀하게 말해서 Button 컴포넌트속 Label div를 찾는 것은 아닌지?)
    expect(label).toBeInTheDocument(); // 화면에 표시되어있는지 확인
    const parent = label.parentElement;
    expect(parent).toHaveStyleRule('background-color', '#304FFE'); // jest-styled-components을 통해 toHaveStyleRule를 사용할 수 있음.
    expect(parent).toHaveStyleRule('background-color', '#1E40FF', {
      modifier: ':hover',
    });

    expect(container).toMatchSnapshot();
  });

  it('chages backgroundColor and hoverColor', () => {
    const backgroundColor = '#FF1744';
    const hoverColor = '#F01440';
    render(
      <Button label="Button Test" backgroundColor={backgroundColor} hoverColor={hoverColor} />,
    );

    const parent = screen.getByText('Button Test').parentElement;
    expect(parent).toHaveStyleRule('background-color', backgroundColor);
    expect(parent).toHaveStyleRule('background-color', hoverColor, {
      modifier: ':hover',
    });
  });
});
