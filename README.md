# Vercel 링크
[<https://react-todo-kpvn2rtjw-namgoongchuls-projects.vercel.app/>](https://react-todo-ecru-two.vercel.app/)

## update
- 23년 11월 9일 : redux toolkit 적용 및 lv2 업그레이드 완료
- 23년 11월 7일 : 동적 렌더링 구현 (사이드바) 및 다크모드 구현

## dependencies
- redux : 전역 상태관리 라이브러리
- redux-toolkit : redux 업그레이드
- react-icons : 아이콘
- react-router-dom : 상세페이지 구현
- react-transition-group : 모달페이지 애니메이션 구현
- styled-components : CSS in JS 스타일링
- styled-reset : Global css reset
- uuid: 유니크한 key 생성 (2 depth (category, todo) 구현으로 id 겹침 방지)


## Intro
기본적인 기능만을 갖춘 TodoList입니다. 아래의 기능들을 구현했습니다.

 - 완료
 - 삭제
 - 추가
 - 수정
 - 중요도 설정
 - 카테고리 추가
 - 모달
 - 카테고리별 동적 렌더링
 - 다크모드
 - router-dom으로 상세페이지 분리

## Components
 - App : 최상위 컴포넌트로 state 및 event함수를 가지고 있는 컴포넌트
 - Template : Todo리스트를 중간에 정렬하고 전체 틀을 구성
 - SideBar : Todo리스트 상위 카테고리 분류
 - TodoHeader : 카테고리 이름 및 분류 탭으로 구성된 헤더
 - TodoList : state로 관리되는 todos를 TodoListItem으로 매핑 및 추가 버튼으로 구성된 컴포넌트
 - TodoListItem : 각각의 todo를 렌더링해주는 컴포넌트
 - AddTodoModal : todo를 추가하는 모달을 구성하는 컴포넌트
 - ThemeButton : 다크모드 토글 버튼
 - AddCategoryModal : 카테고리 추가 모달
