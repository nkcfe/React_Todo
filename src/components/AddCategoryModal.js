import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import { createCategory } from "../redux/modules/todo";

const AddCategoryModal = ({ handleModalClose }) => {
  // input으로 가져온 카테고리 이름 관리
  const [categoryTitle, setCategoryTitle] = useState("");

  // dispatch 호출
  const dispatch = useDispatch();

  // form 제출
  const onSubmit = (e) => {
    // 새로운 카테고리 생성
    const newCategory = {
      id: uuidv4(), // uuid4로 유니크한 키 생성
      category: categoryTitle,
      contents: [],
    };
    dispatch(createCategory({ value: newCategory })); // action
    e.preventDefault(); // 새로고침 방지
    handleModalClose(); // 모달 닫기
    setCategoryTitle(""); // input 비우기
  };

  // onchange
  const onChangeCategoryTitle = (e) => {
    setCategoryTitle(e.target.value);
  };

  return (
    <Base>
      <Title>새로운 카테고리 생성</Title>
      <Sub>카테고리 이름을 작성해주세요</Sub>
      <AddForm>
        <InputTitle>제목</InputTitle>
        <AddInput
          placeholder="제목을 입력해주세요."
          onChange={onChangeCategoryTitle}
          autoFocus
          value={categoryTitle}
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
  font-size: 23px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.fontColor};
`;

const Sub = styled.div`
  font-size: 13px;
  font-weight: bold;
  margin-top: 10px;
  color: ${({ theme }) => theme.color.subFontColor};
`;

const InputTitle = styled.div`
  margin-top: 35px;
  font-size: 18px;
  font-weight: bold;

  color: ${({ theme }) => theme.color.subFontColor};
`;

const AddInput = styled.input`
  margin-top: 18px;
  padding-bottom: 5px;
  outline: none;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.borderColor};
  color: ${({ theme }) => theme.color.subFontColor};
  font-size: 15px;
  font-weight: bold;
  background-color: transparent;
`;
const BtnWrapper = styled.div`
  margin-left: auto;
  margin-top: 35px;
`;

const Btn = styled.button`
  font-weight: bold;
  color: ${({ color, theme }) => (color === "red" ? "red" : theme.color.point)};
`;

export default AddCategoryModal;
