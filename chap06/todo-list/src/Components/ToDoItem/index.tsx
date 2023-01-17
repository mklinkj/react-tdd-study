import React from 'react';
import Styled from 'styled-components';
import { Button } from 'Components/Button';

const Container = Styled.div`
  display: flex;
  border-bottom: 1px solid #BDBDBD;
  align-items: center;
  margin: 10px;
  padding: 10px;
`;

const Label = Styled.div`
  flex: 1;
  font-size: 16px;
  margin-right: 20px;
`;

export const ToDoItem = () => {
  return (
    <Container>
      <Label>추가된 할일</Label>
      <Button
        label="삭제"
        backgroundColor="#FF1744"
        hoverColor="#F01440"
        onClick={() => alert('삭제')}
      />
    </Container>
  );
};
