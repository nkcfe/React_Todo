import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";

const Detail = () => {
  // redux에서 state 가져오기
  const categories = useSelector((state) => state.todoReducer);
  
  // param 값 가져오기
  const params = useParams();
  
  // 네비게이터 호출
  const navigator = useNavigate();

  // params로 가져옥 id와 일치하는 카테고리 찾기 
  const selectedCategory = categories.find(
    (cat) => cat.id === Number(params.catId)
  );

  // 찾은 카테고리를 바탕으로 카테고리 내의 투두리스트 찾기
  const selectedTodo = selectedCategory
    ? selectedCategory.contents.filter(
        (todo) => todo.id === Number(params.todoId)
      )
    : [];

  return (
    <Base>
      <CardWrapper>
        <NavContainer>
          <BackBtnWrapper
            onClick={() => {
              navigator("/");
            }}
          >
            <IoIosArrowBack />
            <span>Back</span>
          </BackBtnWrapper>
          <Id>ID - {selectedTodo[0].id}</Id>
        </NavContainer>
        <BodyContainer>
          <CategoryWrapper>{selectedCategory.category}</CategoryWrapper>
          <TitleWrapper>{selectedTodo[0].title}</TitleWrapper>
          <TextWrapper>{selectedTodo[0].text}</TextWrapper>
        </BodyContainer>
      </CardWrapper>
    </Base>
  );
};

const Base = styled.div`
  background: #ebeff7;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardWrapper = styled.div`
  width: 500px;
  height: 300px;
  background: url("https://images.unsplash.com/photo-1604079628040-94301bb21b91?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D");
  background-size: cover;
  border-radius: 20px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
  color: #fff;
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px;
`;

const BackBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 10px;

  &:hover {
    background: lightblue;
  }

  cursor: pointer;
  svg {
    font-size: 25px;
  }

  span {
    font-size: 20px;
    font-weight: bold;
  }
`;

const Id = styled.div`
  padding: 10px;
  font-size: 15px;
  font-weight: bold;
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 50px;
  gap: 20px;
`;

const CategoryWrapper = styled.div`
  font-size: 30px;
`;

const TitleWrapper = styled.div`
  font-size: 40px;
`;

const TextWrapper = styled.div`
  font-size: 20px;
`;

export default Detail;
