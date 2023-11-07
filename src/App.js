import React, { useRef, useState } from "react";
import styled from "styled-components";
import Templates from "./components/Templates";
import SideBar from "./components/SideBar";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";

const initialTodoState = [
  {
    id: 1,
    text: "React 입문 강의 완독하기",
    checked: true,
    importance: false,
  },
  {
    id: 2,
    text: "React Todo List 완성하기 (Lv.1)",
    checked: false,
    importance: true,
  },

  {
    id: 3,
    text: "React 숙련 강의 완독하기",
    checked: false,
    importance: false,
  },
  {
    id: 4,
    text: "React Todo List Lv2로 업그레이드 시키기",
    checked: false,
    importance: false,
  },
];

const App = () => {
  const [todos, setTodos] = useState(initialTodoState);
  const [isTodoModalOpen, setIsTodoModalOpen] = useState(false);

  const unCheckedTasks = todos.filter((todo) => !todo.checked);
  const CheckedTasks = todos.filter((todo) => todo.checked);

  const nextId = useRef(3);

  const onCheckToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const onImpToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, importance: !todo.importance } : todo
      )
    );
  };

  const EditTodo = (id, value) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: value } : todo))
    );
  };

  const AddTodo = (text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
      importance: false,
    };
    setTodos(todos.concat(todo));
    nextId.current += 1;
  };

  const DeleteTodo = (id) => {
    // filter함수로 해당 아이디 제거하고 새로운 배열 생성
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleTodoModalOpen = () => setIsTodoModalOpen(true);
  const handleTodoModalClose = () => setIsTodoModalOpen(false);

  return (
    <Base>
      <Templates>
        <SideBar />
        <TodoWrapper>
          <TodoHeader
            CheckedTasks={CheckedTasks}
            unCheckedTasks={unCheckedTasks}
          />
          <TodoList
            todos={todos}
            onCheckToggle={onCheckToggle}
            onImpToggle={onImpToggle}
            unCheckedTasks={unCheckedTasks}
            CheckedTasks={CheckedTasks}
            AddTodo={AddTodo}
            DeleteTodo={DeleteTodo}
            EditTodo={EditTodo}
            isTodoModalOpen={isTodoModalOpen}
            handleTodoModalOpen={handleTodoModalOpen}
            handleTodoModalClose={handleTodoModalClose}
          />
        </TodoWrapper>
      </Templates>
    </Base>
  );
};

export default App;

const Base = styled.div``;

const TodoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
