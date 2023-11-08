import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ThemeButton from "./ThemeButton";

const TodoHeader = ({
  onFilterSelect,
  selectedCategory,
  selectedFilter,
  handleModeChange,
  isLightMode,
}) => {

  // redux의 state 가져오기 
  const categories = useSelector((state) => {
    return state.todoReducer;
  });

  // 선택된 카테고리 찾기
  const selectedCat = categories.find((cat) => cat.id === selectedCategory);

  // 선택된 카테고리에서 완료된 항목 가져오기
  const CheckedTasks = selectedCat
    ? selectedCat.contents.filter((todo) => todo.checked)
    : [];

  // 선택된 카테고리에서 완료되지 않은 항목 가져오기
  const unCheckedTasks = selectedCat
    ? selectedCat.contents.filter((todo) => !todo.checked)
    : [];

  return (
    <Base>
      <Category>{selectedCat.category}</Category>
      <TabContainer>
        <TabWrapper
          onClick={() => onFilterSelect("All")}
          selected={selectedFilter === "All"}
        >
          <CountCircle>
            {CheckedTasks.length + unCheckedTasks.length}
          </CountCircle>
          <TabName>All</TabName>
        </TabWrapper>
        <TabWrapper
          onClick={() => onFilterSelect("Ing")}
          selected={selectedFilter === "Ing"}
        >
          <CountCircle>{unCheckedTasks.length}</CountCircle>
          <TabName>Ing</TabName>
        </TabWrapper>
        <TabWrapper
          onClick={() => onFilterSelect("Done")}
          selected={selectedFilter === "Done"}
        >
          <CountCircle>{CheckedTasks.length}</CountCircle>
          <TabName>Done</TabName>
        </TabWrapper>
      </TabContainer>
      <ThemeButton
        handleModeChange={handleModeChange}
        isLightMode={isLightMode}
      />
    </Base>
  );
};

const Base = styled.div`
  height: 180px;
  width: 900px;
  border-bottom: ${({ theme }) => `1px solid ${theme.color.borderColor}`};
  background: ${({ theme }) => theme.color.background};
  display: flex;
  flex-direction: column;

  position: relative;
`;

const Category = styled.div`
  font-size: 45px;
  font-weight: bold;
  margin: 50px;
  color: ${({ theme }) => theme.color.fontColor};
`;

const TabContainer = styled.div`
  display: flex;
  gap: 40px;
  margin: 0px 0 0 40px;
`;

const TabWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 35px;
  padding: 0 10px 0 10px;
  border-bottom: ${({ selected, theme }) =>
    selected ? `2px solid ${theme.color.point}` : "null"};
  border-radius: 10px 10px 0 0;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.color.borderColor};
  }
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

const TabName = styled.div`
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.subFontColor};
`;

export default TodoHeader;
