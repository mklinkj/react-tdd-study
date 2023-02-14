import React, { Component } from 'react';
import Styled from 'styled-components';
import { Button, Input, ToDoItem } from 'Components';

const Container = Styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;  
`;

const Contents = Styled.div`
  display: flex;
  background-color: #FFFFFF;
  flex-direction: column;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;

const InputContainer = Styled.div`
  display: flex;
`;

const ToDoListContainer = Styled.div`
  min-width: 350px;
  height: 400px;
  overflow-y: scroll;
  border: 1px solid #BDBDBD;
  margin-bottom: 20px;
`;

interface Props {}

interface State {
  readonly toDo: string;
  readonly toDoList: string[];
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props); // 부모로 부터 전달받은 Props를 super 함수를 호출하여 상속받은 부모클래스에 반드시 전달해야함.

    // 생성자 안에서 state 값 초기화
    this.state = {
      toDo: '',
      toDoList: [],
    };
  }

  private addToDo = (): void => {
    const { toDo, toDoList } = this.state;
    if (toDo) {
      // 클래스 방식에서는 State값 설정을 위해 setState만 사용가능.
      this.setState({
        toDo: '',
        toDoList: [...toDoList, toDo],
      });
    }
  };

  private deleteToDo = (index: number): void => {
    const list = [...this.state.toDoList];
    list.splice(index, 1); // 사본생성 함수라서 list가 const가 되도 될 것 같음.
    this.setState({
      toDoList: list,
    });
  };

  render() {
    const { toDo, toDoList } = this.state;

    return (
      <Container>
        <Contents>
          <ToDoListContainer data-testid="toDoList">
            {toDoList.map((item, index) => (
              <ToDoItem key={item} label={item} onDelete={() => this.deleteToDo(index)} /> // 클래스의 맴버 함수들을 this.함수명으로 호출
            ))}
          </ToDoListContainer>
          <InputContainer>
            <Input
              placeholder="할 일을 입력해 주세요"
              value={toDo}
              onChange={(text) => this.setState({ toDo: text })}
            />
            <Button label="추가" onClick={this.addToDo} />
          </InputContainer>
        </Contents>
      </Container>
    );
  }
}

export default App;
