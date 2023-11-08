import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";

const Router = () => {
  // 라우터의 기능을 담은 코드
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail/:todoId/:catId" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
