# Vercel 링크
<https://react-todo-kpvn2rtjw-namgoongchuls-projects.vercel.app/>

## Intro
기본적인 기능만을 갖춘 TodoList입니다. 아래의 기능들을 구현했습니다.


 - 완료
 - 삭제
 - 추가
 - 수정
 - 중요도 설정


## 추가 구현


 - Modal 구현 ( todo 추가 부분 )
 - 수정 기능 ( 수정 버튼 클릭 시 input 활성화 )


## 구현 못한 부분


 - sidebar부분은 카테고리로 추후 추가 구현 예정


## Components


 - App : 최상위 컴포넌트로 state 및 event함수를 가지고 있는 컴포넌트
 - Template : Todo리스트를 중간에 정렬하고 전체 틀을 구성
 - SideBar : 추후 router-dom으로 추가할 예정
 - TodoHeader : 카테고리 이름 및 분류 탭으로 구성된 헤더
 - TodoList : state로 관리되는 todos를 TodoListItem으로 매핑 및 추가 버튼으로 구성된 컴포넌트
 - TodoListItem : 각각의 todo를 렌더링해주는 컴포넌트
 - AddTodoModal : todo를 추가하는 모달을 구성하는 컴포넌트
