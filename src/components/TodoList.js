import React, { useState } from "react";
import styled from "styled-components";
import TodoListItem from "./TodoListItem";
import { IoAddOutline } from "react-icons/io5";
import Modal from "../Modal";
import AddTodoModal from "./AddTodoModal";
import { useSelector } from "react-redux";

const TodoList = ({ selectedCategory, selectedFilter }) => {
  // 모딜창 관리
  const [isTodoModalOpen, setIsTodoModalOpen] = useState(false);

  // redux state 가져오기
  const categories = useSelector((state) => {
    return state.todoReducer;
  });

  // 카테고리 찾아오기
  const selectedTodos = categories.filter(
    (todo) => todo.id === selectedCategory
  );

  // 완료된 항목과 왼료되지 않은 항목 찾기
  const checkedCategory = categories.find((cat) => cat.id === selectedCategory);
  const CheckedTasks = checkedCategory
    ? checkedCategory.contents.filter((todo) => todo.checked)
    : [];
  const unCheckedCategory = categories.find(
    (cat) => cat.id === selectedCategory
  );
  const unCheckedTasks = unCheckedCategory
    ? unCheckedCategory.contents.filter((todo) => !todo.checked)
    : [];

  // 모달창 열고 닫기
  const handleTodoModalOpen = () => setIsTodoModalOpen(true);
  const handleTodoModalClose = () => setIsTodoModalOpen(false);

  return (
    <>
      {selectedFilter === "All" ? (
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
            {selectedTodos[0].contents.map((todo) =>
              !todo.checked ? (
                <TodoListItem
                  key={todo.id}
                  todo={todo}
                  selectedCategory={selectedCategory}
                />
              ) : null
            )}
          </Wrapper>

          <Modal isOpen={isTodoModalOpen} onClose={handleTodoModalClose}>
            <AddTodoModal
              selectedCategory={selectedCategory}
              handleModalClose={handleTodoModalClose}
            />
          </Modal>

          <Wrapper>
            <TitleContainer>
              <Title>Done</Title>
              <CountCircle>{CheckedTasks.length}</CountCircle>
            </TitleContainer>
            {selectedTodos[0].contents.map((todo) =>
              todo.checked ? (
                <TodoListItem
                  key={todo.id}
                  todo={todo}
                  selectedCategory={selectedCategory}
                />
              ) : null
            )}
          </Wrapper>
        </>
      ) : selectedFilter === "Ing" ? (
        <Wrapper>
          {/* <TodoCreate isCreateModalOpen={isCreateModalOpen} /> */}
          <TitleContainer>
            <Title>Work Progressing</Title>
            <CountCircle>{unCheckedTasks.length}</CountCircle>
            <AddBtnContainer onClick={handleTodoModalOpen}>
              <IoAddOutline />
              <span>Add</span>
            </AddBtnContainer>
          </TitleContainer>
          {selectedTodos[0].contents.map((todo) =>
            !todo.checked ? (
              <TodoListItem
                key={todo.id}
                todo={todo}
                selectedCategory={selectedCategory}
              />
            ) : null
          )}
        </Wrapper>
      ) : (
        <Wrapper>
          <TitleContainer>
            <Title>Done</Title>
            <CountCircle>{CheckedTasks.length}</CountCircle>
          </TitleContainer>
          {selectedTodos[0].contents.map((todo) =>
            todo.checked ? (
              <TodoListItem
                key={todo.id}
                todo={todo}
                selectedCategory={selectedCategory}
              />
            ) : null
          )}
        </Wrapper>
      )}
    </>
  );
};

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
  border-bottom: 1px solid ${({ theme }) => theme.color.borderColor};
  gap: 15px;
`;

const Title = styled.div`
  font-size: 23px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.fontColor};
`;

const CountCircle = styled.div`
  width: 18px;
  height: 18px;
  background: ${({ theme }) => theme.color.subPoint};
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.color.point};
  font-size: 11px;
  font-weight: bold;
`;

const AddBtnContainer = styled.div`
  margin: 0 15px 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  background: ${({ theme }) => theme.color.point};
  color: #fff;
  padding: 7px 10px;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
  transition: background 0.2s ease-in-out;
  &:hover {
    background: ${({ theme }) => theme.color.pointHover};
  }
  svg {
    font-size: 18px;
  }
  span {
    font-size: 14px;
  }
`;

export default TodoList;
