import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

export default function SelectBox({ children, icon, isActive }) {
  const boxRef = useRef();

  useEffect(() => {
    if (isActive === true) {
      boxRef.current.classList.add('active');
    } else {
      boxRef.current.classList.remove('active');
    }
  }, [isActive]);

  return (
    <Box className="box" ref={boxRef}>
      <div>{icon}</div>
      <span>{children}</span>
    </Box>
  );
}
const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  cursor: pointer;
  background-color: #fff;

  position: static;
  width: 160px;
  height: 144px;
  left: calc(50% - 160px / 2 + 84px);
  top: 0px;

  border: 1px solid #eeeeee;
  box-sizing: border-box;
  border-radius: 4px;
  flex: none;
  order: 1;
  flex-grow: 1;
  font-size: 14px;
  font-weight: 700;
  div {
    font-size: 50px;
    margin-bottom: 8px;
  }

  &:hover {
    background-color: #ffe0d3;
    transition: all 0.35s ease;
  }

  &:not(:hover) {
    background-color: #fff;
    transition: all 0.35s ease;
    > span {
      color: #000;
      transition: all 0.35s ease;
    }
  }
  &.active {
    background-color: #ff8450;
    transition: all 0.35s ease;
  }
  &.active > span {
    color: #fff;
    transition: all 0.35s ease;
  }
`;
