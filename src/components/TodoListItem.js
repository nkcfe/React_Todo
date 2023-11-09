import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { BsCheckLg } from "react-icons/bs";
import { FaFontAwesomeFlag } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";
import { useDispatch } from "react-redux";
import {
  checkToggleTodo,
  deleteTodo,
  impToggleTodo,
  modifyTodo,
} from "../redux/modules/todo";
import { useNavigate } from "react-router-dom";
const TodoListItem = ({ todo, selectedCategory }) => {
  // todo 정보
  const { id, title, text, checked, importance } = todo;

  const [isEditmode, setIsEditMode] = useState(false); // 수정 모드
  const [todoTitle, setTodoTitle] = useState(title); // 수정 시 title input값
  const [todoText, setTodoText] = useState(text); // 수정 시 text input 값

  const navigate = useNavigate(); // navigate 호출
  const dispatch = useDispatch(); // dispatch 호출

  // 타이틀 onChange
  const onChangeTodoTitle = (e) => {
    setTodoTitle(e.target.value);
  };

  // 텍스트 onChange
  const onChangeTodoText = (e) => {
    setTodoText(e.target.value);
  };

  // 수정 모드 진입 시 input에 자동 포커스를 위해
  // ref 지정 후 useEffect dependency에 isEditMode 입력
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, [isEditmode]);

  // 수정 모드 토글
  const onToggleEditMode = () => {
    setIsEditMode(!isEditmode);
  };

  // SideBar에서 동적 렌더링 시 작동을 안해서
  // useEffect로 todo가 바뀔때마다 값 변경.
  useEffect(() => {
    // todo 상태가 변경될 때 강제로 컴포넌트 리렌더링
    setTodoTitle(todo.title);
    setTodoText(todo.text);
  }, [todo]);

  // 수정 모드 완료하기
  // 수정 action 호출.
  const onClickEditComplete = () => {
    dispatch(
      modifyTodo({
        categoryId: selectedCategory,
        todoId: id,
        title: todoTitle,
        text: todoText,
      })
    );
    onToggleEditMode();
  };

  // 투두 완료 토글 기능
  const onClickCheckToggle = () => {
    dispatch(checkToggleTodo({ categoryId: selectedCategory, todoId: id }));
  };

  // 투두 중요도 토글 기능
  const onClickImpToggle = () => {
    dispatch(impToggleTodo({ categoryId: selectedCategory, todoId: id }));
  };

  // 투두 삭제 기능
  const onClickDeleteTodo = () => {
    dispatch(deleteTodo({ categoryId: selectedCategory, todoId: id }));
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
      <CheckLabel onClick={onClickCheckToggle} htmlFor={id}>
        {checked && <BsCheckLg />}
      </CheckLabel>
      <TextContainer>
        <Title
          value={todoTitle}
          ref={inputRef}
          onChange={onChangeTodoTitle}
          type="text"
          checked={checked}
          disabled={!isEditmode}
          isEditmode={isEditmode}
        />
        <Text
          type="text"
          checked={checked}
          value={todoText}
          disabled={!isEditmode}
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
            <CtrContainer color="#EB9770" onClick={onClickImpToggle}>
              <span>중요</span>
            </CtrContainer>
            <CtrContainer color="#EB6070" onClick={onClickDeleteTodo}>
              <span>삭제</span>
            </CtrContainer>
            <CtrContainer
              color="#EB6070"
              onClick={() => {
                navigate(`/detail/${id}/${selectedCategory}`);
              }}
            >
              <span>더보기</span>
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

const CtrContainer = styled.div`
  display: none;
  padding: 5px;
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
  background: ${({ isEditmode, theme }) =>
    isEditmode ? theme.color.subPoint : theme.color.background};
  margin: 10px 40px 0 10px;
  height: 60px;
  padding: 7px 25px;
  border-radius: 7px;
  cursor: pointer;
  &:hover {
    background-color: ${({ isEditmode, theme }) =>
      isEditmode ? "null" : theme.color.borderColor};
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
  border: 1.5px solid ${({ theme }) => theme.color.thirdFontColor};
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
`;

const CheckInput = styled.input`
  display: none;
  &:checked + label {
    background-color: ${({ theme }) => theme.color.point};
    svg {
      color: ${({ theme }) => theme.color.background};
      font-size: 14px;
      font-weight: bold;
    }
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

const Title = styled.input`
  outline: none;
  border: none;
  padding: 7px 5px 5px 5px;
  font-family: "Roboto Condensed", sans-serif;
  background: none;
  margin-left: 10px;
  width: 500px;
  font-size: 17px;
  font-weight: bold;
  text-decoration-line: ${({ checked }) => checked && "line-through"};
  caret-color: #198cff;
  color: ${({ theme }) => theme.color.fontColor};
`;

const Text = styled.input`
  outline: none;
  border: none;
  padding: 7px 5px 5px 5px;
  font-family: "Roboto Condensed", sans-serif;
  background: none;
  margin-left: 10px;
  width: 500px;
  font-size: 15px;
  font-weight: bold;
  text-decoration-line: ${({ checked }) => checked && "line-through"};
  caret-color: #198cff;
  color: ${({ theme }) => theme.color.fontColor};
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
  justify-content: end;
  align-items: center;
  width: 160px;
  gap: 5px;
`;

const Btncontainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 5px;
  width: auto;
  height: 25px;
  border-radius: 100%;
  background: ${({ color }) => color};
  cursor: pointer;

  svg {
    color: #fff;
    font-size: 16px;
  }
`;

export default TodoListItem;
