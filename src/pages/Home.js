import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Templates from "../components/Templates";
import SideBar from "../components/SideBar";
import TodoHeader from "../components/TodoHeader";
import TodoList from "../components/TodoList";
import theme, { DarkTheme, LightTheme } from "../styles/theme";

const Home = () => {
  
  const [isLightMode, setIsLightMode] = useState(true);             // 테마 관리
  const [selectedCategory, setSelectedCategory] = useState(1);      // 선택된 카테고리 관리 (기본값 첫번쨰)
  const [selectedFilter, setSelectedFilter] = useState("All");      // 필터 관리 (기본값 전체보기)

  // 테마 변경 기능
  const handleModeChange = () => {
    setIsLightMode(!isLightMode);
  };
  
  // 카테고리 선택 기능
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  // 필터 선택 기능
  const handleFilter = (value) => {
    setSelectedFilter(value);
  };

  return (
    <ThemeProvider theme={isLightMode ? LightTheme : DarkTheme}>
      <Base>
        <Templates>
          <SideBar onCategorySelect={handleCategorySelect} />
          <TodoWrapper>
            <TodoHeader
              onFilterSelect={handleFilter}
              selectedFilter={selectedFilter}
              selectedCategory={selectedCategory}
              handleModeChange={handleModeChange}
              isLightMode={isLightMode}
            />
            <TodoList
              selectedCategory={selectedCategory}
              selectedFilter={selectedFilter}
            />
          </TodoWrapper>
        </Templates>
      </Base>
    </ThemeProvider>
  );
};

const Base = styled.div``;

const TodoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Home;
