import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import { createTodo } from "../redux/modules/todo";

const AddTodoModal = ({ handleModalClose, selectedCategory }) => {
  // 투두리스트에 추가할 값 관리
  const [todoText, setTodoText] = useState("");
  const [todoTitle, setTodoTitle] = useState("");

  const dispatch = useDispatch();

  // form 제출
  const onSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: uuidv4(), // 유니크한 키 생성을 위함
      title: todoTitle,
      text: todoText,
      checked: false,
      importance: false,
    };
    dispatch(createTodo({ value: newTodo, id: selectedCategory })); // 투두리스트 생성
    handleModalClose(); // 모달 닫기
    setTodoText(""); // input 비우기
    setTodoTitle(""); // input 비우기
  };

  // input onChange로 관리
  const onChangeTodoText = (e) => {
    setTodoText(e.target.value);
  };
  const onChangeTodoTitle = (e) => {
    setTodoTitle(e.target.value);
  };

  return (
    <Base>
      <Title>새로운 할일</Title>
      <Sub>새로운 할일을 생성해보세요!</Sub>
      <AddForm>
        <InputTitle>타이틀</InputTitle>
        <AddInput
          placeholder="제목을 입력해주세요."
          onChange={onChangeTodoTitle}
          value={todoTitle}
          autoFocus
        />
        <InputTitle>내용</InputTitle>
        <AddInput
          placeholder="내용을 입력해주세요."
          onChange={onChangeTodoText}
          value={todoText}
        />
        <BtnWrapper>
          <Btn onClick={onSubmit}>Create</Btn>
          <Btn
            onClick={(e) => {
              e.preventDefault();
              handleModalClose();
            }}
            color="red"
          >
            Cancel
          </Btn>
        </BtnWrapper>
      </AddForm>
    </Base>
  );
};

const Base = styled.div`
  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  background: ${({ theme }) => theme.color.background};
  padding: 40px;
`;

const AddForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.fontColor};
`;

const Sub = styled.div`
  font-size: 15px;
  font-weight: bold;
  margin-top: 10px;
  color: ${({ theme }) => theme.color.point};
`;

const InputTitle = styled.div`
  margin-top: 35px;
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.subFontColor};
`;

const AddInput = styled.input`
  margin-top: 13px;
  padding-bottom: 5px;
  outline: none;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.borderColor};
  font-size: 16px;
  color: ${({ theme }) => theme.color.fontColor};
  font-family: "Roboto Condensed", sans-serif;
  background: none;
`;
const BtnWrapper = styled.div`
  margin-left: auto;
  margin-top: 35px;
`;

const Btn = styled.button`
  font-weight: bold;
  color: ${({ color, theme }) => (color === "red" ? "red" : theme.color.point)};
`;

export default AddTodoModal;
