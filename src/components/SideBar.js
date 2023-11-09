import React, { useState } from "react";
import styled, { css } from "styled-components";
import { IoAddOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import Modal from "../Modal";
import AddCategoryModal from "./AddCategoryModal";

const SideBar = ({ onCategorySelect }) => {
  // redux state 가져오기
  const todos = useSelector((state) => {
    return state.todoReducer;
  });
  console.log(todos);
  const [selectedCategory, setSelectedCategory] = useState(1); // 선택된 카테고리 관리 (초기값 첫번쨰)
  const [isCategoryModalOpen, setIsCategorymodalOpen] = useState(false); // 카테고리 추가 모달 오픈 관리

  // 모달 창 관리
  const handleCategoryModalOpen = () => setIsCategorymodalOpen(true);
  const handleCategoryhandleTodoModalClose = () =>
    setIsCategorymodalOpen(false);

  // 카테고리 클릭시 동적 렌더링
  const handleCategoryClick = (id) => {
    setSelectedCategory(id);
    onCategorySelect(id);
  };

  return (
    <Base>
      <HeaderContainer>
        <Square />
        <Project>PROJECTS</Project>
      </HeaderContainer>
      <UlContainer>
        {todos.map((todo) => (
          <LiContainer
            key={todo.id}
            onClick={() => handleCategoryClick(todo.id)}
            selected={selectedCategory === todo.id}
          >
            {todo.category}
          </LiContainer>
        ))}
      </UlContainer>
      <SpaceAddBtn onClick={handleCategoryModalOpen}>
        <IoAddOutline />
      </SpaceAddBtn>
      <Modal
        isOpen={isCategoryModalOpen}
        onClose={handleCategoryhandleTodoModalClose}
      >
        <AddCategoryModal
          selectedCategory={selectedCategory}
          handleModalClose={handleCategoryhandleTodoModalClose}
        />
      </Modal>
    </Base>
  );
};

const Base = styled.div`
  height: 1000px;
  width: 300px;
  border-right: ${({ theme }) => `1px solid ${theme.color.borderColor}`};
  padding: 40px;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;

  position: relative;
`;

const HeaderContainer = styled.div`
  margin-top: 50px;

  display: flex;
  align-items: center;
`;

const Square = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 5px;
  border: 2.5px solid ${({ theme }) => theme.color.point};
  margin-bottom: 1px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
`;

const Project = styled.div`
  margin-left: 15px;
  font-size: 15px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.point};
`;

const UlContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  width: 100%;
  gap: 5px;
`;

const LiContainer = styled.li`
  padding-left: 35px;
  width: 100%;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.subFontColor};
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.color.selectedBackground};
    color: ${({ theme }) => theme.color.point};
  }
  ${({ selected }) =>
    selected &&
    css`
      background: ${({ theme }) => theme.color.selectedBackground};
      color: ${({ theme }) => theme.color.point};
    `}
`;

const SpaceAddBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 50px;
  left: 50%;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background: ${({ theme }) => theme.color.point};
  transform: translate(-50%);
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
  transition: background 0.2s ease-in-out;
  cursor: pointer;
  svg {
    font-size: 40px;
    color: white;
  }
  &:hover {
    background: ${({ theme }) => theme.color.pointHover};
  }
`;

export default SideBar;
