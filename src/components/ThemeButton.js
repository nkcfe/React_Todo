import React from "react";
import styled from "styled-components";

const ThemeButton = ({ handleModeChange, isLightMode }) => {
  return (
    <Base isLightMode={isLightMode} onClick={handleModeChange}>
      <Circle isLightMode={isLightMode} />
    </Base>
  );
};

const Base = styled.div`
  position: absolute;
  right: 65px;
  top: 60px;

  width: 70px;
  height: 40px;

  border: 1px solid #ecedee;
  border-radius: 50px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
  background-color: ${({ isLightMode }) =>
    isLightMode ? "#198cff" : "#40494C"};
`;

const Circle = styled.div`
  position: absolute;
  top: 5px;
  left: ${({ isLightMode }) => (isLightMode ? "7px" : "32px")};
  width: 28px;
  height: 28px;
  border-radius: 100%;
  background-color: #fff;
  transition: all 0.3s ease;
`;

export default ThemeButton;
