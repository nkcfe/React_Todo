import React from "react";
import styled from "styled-components";

const Base = styled.div`
  height: 180px;
  width: 900px;
  border-bottom: 1px solid #ecedee;

  display: flex;
  flex-direction: column;
`;

const Category = styled.div`
  font-size: 45px;
  font-weight: bold;
  margin: 50px;
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
  border-bottom: 2px solid #3397ff;
  border-radius: 10px 10px 0 0;
  cursor: pointer;
  &:hover {
    background: #ecedee;
  }
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

const TabName = styled.div`
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: #6f6f7c;
`;

const TodoHeader = ({ CheckedTasks, unCheckedTasks }) => {
  return (
    <Base>
      <Category>React</Category>
      <TabContainer>
        <TabWrapper>
          <CountCircle>
            {CheckedTasks.length + unCheckedTasks.length}
          </CountCircle>
          <TabName>All</TabName>
        </TabWrapper>
        <TabWrapper>
          <CountCircle>{unCheckedTasks.length}</CountCircle>
          <TabName>Ing</TabName>
        </TabWrapper>
        <TabWrapper>
          <CountCircle>{CheckedTasks.length}</CountCircle>
          <TabName>Done</TabName>
        </TabWrapper>
      </TabContainer>
    </Base>
  );
};

export default TodoHeader;
