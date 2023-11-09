import { createSlice } from "@reduxjs/toolkit";

// action value
// const CREATE = "todo/CREATE";
// const CREATE_CATEGORY = "todo/CREATE_CATEGORY";
// const DELETE = "todo/DELETE";
// const MODIFY = "todo/MODIFY";
// const CHECK_TOGGLE = "todo/CHECK_TOGGLE";
// const IMP_TOGGLE = "todo/IMP_TOGGLE";

// // action createor : action value를 return하는 함수
// export const createCategory = (value) => {
//   return {
//     type: CREATE_CATEGORY,
//     value,
//   };
// };
// export const createTodo = (value, id) => {
//   return {
//     type: CREATE,
//     value,
//     id,
//   };
// };

// export const deleteTodo = (categoryId, todoId) => {
//   return {
//     type: DELETE,
//     categoryId,
//     todoId,
//   };
// };

// export const modifyTodo = (categoryId, todoId, title, text) => {
//   return {
//     type: MODIFY,
//     categoryId,
//     todoId,
//     title,
//     text,
//   };
// };

// export const checkToggleTodo = (categoryId, todoId) => {
//   return {
//     type: CHECK_TOGGLE,
//     categoryId,
//     todoId,
//   };
// };

// export const impToggleTodo = (categoryId, todoId) => {
//   return {
//     type: IMP_TOGGLE,
//     categoryId,
//     todoId,
//   };
// };

// 초기 상태값 (state)
const initialTodoState = [
  {
    id: 1,
    category: "REACT",
    contents: [
      {
        id: 1,
        title: "입문 강의 듣기",
        text: "스파르타 React 입문 강의 완독하기",
        checked: true,
        importance: false,
      },
      {
        id: 2,
        title: "주특기 주차 과제1",
        text: "React Todo List 완성하기 (Lv.1)",
        checked: true,
        importance: true,
      },

      {
        id: 3,
        title: "숙련 강의 듣기",
        text: "스파르타 React 숙련 강의 완독하기",
        checked: false,
        importance: false,
      },
      {
        id: 4,
        title: "주특기 주차 과제2",
        text: "React Todo List Lv2로 업그레이드 시키기",
        checked: false,
        importance: false,
      },
      {
        id: 5,
        title: "주특기 주차 과제3",
        text: "모달 및 버튼 구현해보기",
        checked: false,
        importance: false,
      },
    ],
  },
  {
    id: 2,
    category: "JAVASCRIPT",
    contents: [
      {
        id: 1,
        title: "JS 기초 복습",
        text: "코딩앙마 기초 강의 듣기",
        checked: true,
        importance: false,
      },
      {
        id: 2,
        title: "JS 중급 복습",
        text: "코딩앙마 중급 강의 듣기",
        checked: false,
        importance: true,
      },

      {
        id: 3,
        title: "JS 문법 연습",
        text: "프로그래머스 lv0 풀어보기",
        checked: false,
        importance: false,
      },
    ],
  },
  {
    id: 3,
    category: "ALGORITHMS",
    contents: [
      {
        id: 1,
        title: "파이썬 알고리즘",
        text: "하루에 한문제씩 풀기",
        checked: true,
        importance: false,
      },
    ],
  },
];

// 리듀서 : state에 변화를 일으키는 함수
// (1) state를 action의 type에 따라 변경하는 함수

// action 객체라는 것은 action type을 payload만큼 처리하는 것.
// ex : payload가 3이다.
// const todoReducer = (state = initialTodoState, action) => {
//   switch (action.type) {
//     case CREATE_CATEGORY:
//       return state.concat(action.value);

//     case CREATE:
//       return state.map((category) => {
//         if (category.id === action.id) {
//           return {
//             ...category,
//             contents: [...category.contents, action.value],
//           };
//         }
//         return category;
//       });

//     case DELETE:
//       return state.map((category) => {
//         if (category.id === action.categoryId) {
//           return {
//             ...category,
//             contents: category.contents.filter(
//               (todo) => todo.id !== action.todoId
//             ),
//           };
//         }
//         return category;
//       });

//     case CHECK_TOGGLE:
//       return state.map((category) => {
//         if (category.id === action.categoryId) {
//           return {
//             ...category,
//             contents: category.contents.map((todo) =>
//               todo.id === action.todoId
//                 ? { ...todo, checked: !todo.checked }
//                 : todo
//             ),
//           };
//         }
//         return category;
//       });

//     case IMP_TOGGLE:
//       return state.map((category) => {
//         if (category.id === action.categoryId) {
//           return {
//             ...category,
//             contents: category.contents.map((todo) =>
//               todo.id === action.todoId
//                 ? { ...todo, importance: !todo.importance }
//                 : todo
//             ),
//           };
//         }
//         return category;
//       });

//     case MODIFY:
//       return state.map((category) => {
//         if (category.id === action.categoryId) {
//           return {
//             ...category,
//             contents: category.contents.map((todo) =>
//               todo.id === action.todoId
//                 ? { ...todo, title: action.title, text: action.text }
//                 : todo
//             ),
//           };
//         }
//         return category;
//       });

//     default:
//       return state;
//   }
// };

const todoSlice = createSlice({
  name: "todoReducer",
  initialState: initialTodoState,
  reducers: {
    createCategory: (state, action) => {
      const { value } = action.payload;
      return state.concat(value);
    },
    createTodo: (state, action) => {
      const { value, id } = action.payload;
      return state.map((category) => {
        if (category.id === id) {
          return {
            ...category,
            contents: [...category.contents, value],
          };
        }
        return category;
      });
    },
    deleteTodo: (state, action) => {
      const { categoryId, todoId } = action.payload;
      return state.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category,
            contents: category.contents.filter((todo) => todo.id !== todoId),
          };
        }
        return category;
      });
    },
    modifyTodo: (state, action) => {
      const { categoryId, todoId, title, text } = action.payload;
      return state.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category,
            contents: category.contents.map((todo) =>
              todo.id === todoId ? { ...todo, title: title, text: text } : todo
            ),
          };
        }
        return category;
      });
    },
    checkToggleTodo: (state, action) => {
      const { categoryId, todoId } = action.payload;
      return state.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category,
            contents: category.contents.map((todo) =>
              todo.id === todoId ? { ...todo, checked: !todo.checked } : todo
            ),
          };
        }
        return category;
      });
    },
    impToggleTodo: (state, action) => {
      const { categoryId, todoId } = action.payload;
      return state.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category,
            contents: category.contents.map((todo) =>
              todo.id === todoId
                ? { ...todo, importance: !todo.importance }
                : todo
            ),
          };
        }
        return category;
      });
    },
  },
});

export default todoSlice.reducer;
export const {
  createCategory,
  createTodo,
  deleteTodo,
  modifyTodo,
  checkToggleTodo,
  impToggleTodo,
} = todoSlice.actions;
