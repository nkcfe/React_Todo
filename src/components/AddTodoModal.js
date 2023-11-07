import React, { useState } from "react";

import styled from "styled-components";

const Base = styled.div`
  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  background: #fff;
  padding: 40px;
`;

const AddForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: bold;
`;

const Sub = styled.div`
  font-size: 13px;
  font-weight: bold;
  margin-top: 10px;
  color: #aeb0b2;
`;

const InputTitle = styled.div`
  margin-top: 25px;
  font-size: 16px;
  font-weight: bold;
  color: #5e6062;
`;

const AddInput = styled.input`
  margin-top: 10px;
  padding-bottom: 5px;
  outline: none;
  border: none;
  border-bottom: 1px solid #ebebeb;
  font-size: 15px;
`;
const BtnWrapper = styled.div`
  margin-left: auto;
  margin-top: 35px;
`;

const Btn = styled.button`
  font-weight: bold;
  color: ${({ color }) => (color === "red" ? "red" : "black")};
`;

const AddTodoModal = ({ AddTodo, handleModalClose }) => {
  const [todoText, setTodoText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    AddTodo(todoText);
    handleModalClose();
    setTodoText("");
  };

  const onChangeTodoText = (e) => {
    setTodoText(e.target.value);
  };

  return (
    <Base>
      <Title>New Todo</Title>
      <Sub>새로운 할일을 작성해주세요!</Sub>
      <AddForm>
        <InputTitle>Todo Name</InputTitle>
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

export default AddTodoModal;
