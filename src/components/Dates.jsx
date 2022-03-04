import { setEndDate, setStartDate } from 'modules/careDate';
import React from 'react';
import { useDispatch } from 'react-redux';
import styled, { css } from 'styled-components';

export default function Dates({
  children,
  setClickday,
  startDay,
  endDay,
  isIncluded,
}) {
  const dispatch = useDispatch();
  const execGene = (clickDay) => {
    let { value } = setClickday.next(clickDay);
    if (!value) setClickday.next(clickDay);
  };

  const setDate = () => {
    // 선택상태저장
    const date = '222';
    dispatch(setStartDate(date));
    dispatch(setEndDate(date));
  };
  return (
    <>
      <Date
        startDay={startDay}
        endDay={endDay}
        isIncluded={isIncluded}
        onClick={(e) => execGene(e.target.innerText)}
      >
        {children}
      </Date>
    </>
  );
}

const Date = styled.div`
  position: relative;
  font-weight: 700;
  text-align: center;
  width: 50px;
  height: 48px;
  line-height: 60px;
  color: ${({ startDay, endDay }) => (startDay || endDay) && 'white'};
  border-radius: ${({ startDay, endDay }) => (startDay || endDay) && '50%'};
  background-color: ${({ startDay, endDay, isIncluded }) => {
    return isIncluded && 'rgba(255, 132, 80, 1)';
  }};
`;