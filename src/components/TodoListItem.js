import React, { useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { BsCheckLg } from "react-icons/bs";
import { FaFontAwesomeFlag } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";

const CtrContainer = styled.div`
  display: none;
  padding: 3px;
  background: ${({ color }) => color};
  border-radius: 5px;
  cursor: pointer;
  span {
    font-size: 12px;
    font-weight: bold;
    color: white;
  }
`;

const Base = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  background: ${({ isEditmode }) => (isEditmode ? "#ECF6FF" : "#fff")};
  margin: 0 40px 0 10px;
  height: 40px;
  padding: 7px 25px;
  border-radius: 7px;
  &:hover {
    background-color: ${({ isEditmode }) => (isEditmode ? "null" : "#eff0f2")};
  }
  &:hover ${CtrContainer} {
    display: flex;
  }
`;

const CheckLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border: 1.5px solid #e0e0e3;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
`;

const CheckInput = styled.input`
  display: none;
  &:checked + label {
    background-color: #198cff;
    svg {
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }
  }
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.input`
  outline: none;
  border: none;
  padding: 7px 5px 5px 5px;
  font-family: "Roboto Condensed", sans-serif;
  background: none;
  margin-left: 10px;
  width: 600px;
  font-size: 17px;
  font-weight: bold;
  text-decoration-line: ${({ checked }) => checked && "line-through"};
  caret-color: #198cff;
`;

const AlertWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 40px;
`;

const AlertBox = styled.div`
  width: 30px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
  color: ${({ bgColor }) => (bgColor ? "#fff" : "#7E858C")};
  padding: 2px 0;
  background: ${({ bgColor }) => (bgColor ? bgColor : "#e9ebed")};
`;

const CtrWrapper = styled.div`
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const Btncontainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 5px;
  width: 25px;
  height: 25px;
  border-radius: 100%;
  background: ${({ color }) => color};
  cursor: pointer;

  svg {
    color: #fff;
    font-size: 16px;
  }
`;

const TodoListItem = ({
  todo,
  onCheckToggle,
  onImpToggle,
  AddTodo,
  DeleteTodo,
  EditTodo,
}) => {
  const { id, text, checked, importance } = todo;
  const [isEditmode, setIsEditMode] = useState(false);
  const [todoText, setTodoText] = useState(text);

  const onChangeTodoText = (e) => {
    setTodoText(e.target.value);
  };

  const inputRef = useRef(null);

  const onToggleEditMode = () => {
    setIsEditMode(!isEditmode);
  };

  const onClickEditComplete = () => {
    EditTodo(id, todoText);
    onToggleEditMode();
  };

  return (
    <Base isEditmode={isEditmode}>
      <AlertWrapper>
        {checked && <AlertBox>완료</AlertBox>}
        {importance && !checked && !isEditmode && (
          <Btncontainer color="#EB9770">
            <FaFontAwesomeFlag />
          </Btncontainer>
        )}
        {isEditmode && (
          <Btncontainer color="#198cff" isEditmode={isEditmode}>
            <FiEdit2 />
          </Btncontainer>
        )}
      </AlertWrapper>

      <CheckInput checked={checked} type="checkbox" id={id} />
      <CheckLabel onClick={() => onCheckToggle(id)} htmlFor={id}>
        {checked && <BsCheckLg />}
      </CheckLabel>
      <TextContainer>
        <Text
          type="text"
          checked={checked}
          value={todoText}
          disabled={!isEditmode}
          ref={inputRef}
          onChange={onChangeTodoText}
          isEditmode={isEditmode}
        />
      </TextContainer>
      <CtrWrapper>
        {!isEditmode ? (
          <>
            <CtrContainer color="#489CF2" onClick={onToggleEditMode}>
              <span>수정</span>
            </CtrContainer>
            <CtrContainer color="#EB9770" onClick={() => onImpToggle(id)}>
              <span>중요</span>
            </CtrContainer>
            <CtrContainer color="#EB6070" onClick={() => DeleteTodo(id)}>
              <span>삭제</span>
            </CtrContainer>
          </>
        ) : (
          <CtrContainer color="#489CF2" onClick={onClickEditComplete}>
            <span>완료</span>
          </CtrContainer>
        )}
      </CtrWrapper>
    </Base>
  );
};

export default TodoListItem;
