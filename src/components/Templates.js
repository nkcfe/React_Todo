import React from "react";
import styled from "styled-components";

const Templates = ({ children }) => {
  return (
    <Base>
      <TodoWrapper>{children} </TodoWrapper>
    </Base>
  );
};

const Base = styled.div`
  background: ${({ theme }) => theme.color.baseColor};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TodoWrapper = styled.div`
  max-width: 1200px;
  min-width: 800px;
  height: 1000px;
  background: ${({ theme }) => theme.color.background};
  border-radius: 10px;
  display: flex;
  overflow: scroll;

  position: relative;
`;

export default Templates;
