import React from "react";
import styled from "styled-components";
import SideBar from "./SideBar";

const Base = styled.div`
  background: #ebeff7;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const TodoWrapper = styled.div`
  max-width: 1200px;
  min-width: 800px;
  height: 1000px;
  background: #fff;
  border-radius: 10px;
  display: flex;

  position: relative;
`;

const Templates = ({ children }) => {
  return (
    <Base>
      <TodoWrapper>{children}</TodoWrapper>
    </Base>
  );
};

export default Templates;
