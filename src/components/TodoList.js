import React from "react";
import styled from "styled-components";
import TodoListItem from "./TodoListItem";
import { IoAddOutline } from "react-icons/io5";
import Modal from "../Modal";
import AddTodoModal from "./AddTodoModal";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 40px 50px 10px 50px;
  padding: 10px 0;
  border-bottom: 1px solid #ecedee;
  gap: 10px;
`;

const Title = styled.div`
  font-size: 23px;
  font-weight: bold;
  color: #2b3243;
`;

const CountCircle = styled.div`
  width: 18px;
  height: 18px;
  background: #ecf6ff;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #3397ff;
  font-size: 11px;
  font-weight: bold;
`;

const AddBtnContainer = styled.div`
  margin: 0 15px 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  background: #198cff;
  color: #fff;
  padding: 7px 10px;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background: #19a3ff;
  }
  svg {
    font-size: 18px;
  }
  span {
    font-size: 14px;
  }
`;

const TodoList = ({
  todos,
  onCheckToggle,
  onImpToggle,
  CheckedTasks,
  unCheckedTasks,
  AddTodo,
  DeleteTodo,
  EditTodo,
  isTodoModalOpen,
  handleTodoModalOpen,
  handleTodoModalClose,
}) => {
  return (
    <>
      <Wrapper>
        <TitleContainer>
          <Title>Work Progressing</Title>
          <CountCircle>{unCheckedTasks.length}</CountCircle>
          <AddBtnContainer onClick={handleTodoModalOpen}>
            <IoAddOutline />
            <span>Add</span>
          </AddBtnContainer>
        </TitleContainer>
        {todos.map((todo) =>
          !todo.checked ? (
            <TodoListItem
              todo={todo}
              onCheckToggle={onCheckToggle}
              onImpToggle={onImpToggle}
              AddTodo={AddTodo}
              DeleteTodo={DeleteTodo}
              EditTodo={EditTodo}
            />
          ) : null
        )}
      </Wrapper>

      <Modal isOpen={isTodoModalOpen} onClose={handleTodoModalClose}>
        <AddTodoModal
          handleModalClose={handleTodoModalClose}
          AddTodo={AddTodo}
        />
      </Modal>

      <Wrapper>
        <TitleContainer>
          <Title>Done</Title>
          <CountCircle>{CheckedTasks.length}</CountCircle>
        </TitleContainer>
        {todos.map((todo) =>
          todo.checked ? (
            <TodoListItem
              todo={todo}
              onCheckToggle={onCheckToggle}
              onImpToggle={onImpToggle}
              AddTodo={AddTodo}
              DeleteTodo={DeleteTodo}
              EditTodo={EditTodo}
            />
          ) : null
        )}
      </Wrapper>
    </>
  );
};

export default TodoList;
