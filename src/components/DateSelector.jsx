import React, { useState, useMemo } from 'react';
import styled, { css } from 'styled-components';
import Calendar from './Calendar';
import { useDispatch } from 'react-redux';

import { setEndDate, setStartDate } from 'modules/careDate';
export default function DateSelector({ showCalendarHandler }) {
  const [targetYear, setTargetYear] = useState(new Date().getFullYear());
  const [targetMonth, setTargetMonth] = useState(new Date().getMonth() + 1);
  const [startDay, setStartDay] = useState(null);
  const [endDay, setEndDay] = useState(null);
  const dispatch = useDispatch();

  const selectedHandler = () => {
    if (endDay) {
      const { year: sY, month: sM, el: sD } = startDay;
      const { year: eY, month: eM, el: eD } = endDay;
      dispatch(setStartDate(sY, sM, sD));
      dispatch(setEndDate(eY, eM, eD));
      showCalendarHandler();
    }
  };

  const init = () => {
    setStartDay(null);
    setEndDay(null);
  };
  const setClickday = useMemo(() => {
    return (function* () {
      while (true) {
        const selectedStDate = yield;
        setStartDay((prev) => ({ ...prev, ...selectedStDate }));
        const selectedEdDate = yield 1;
        setEndDay((prev) => ({ ...prev, ...selectedEdDate }));
        yield 2;
        init();
      }
    })();
  }, []);

  const closeModalHandler = () => {
    showCalendarHandler();
  };

  return (
    <ContainerSt>
      <TopSt>돌봄 날짜 선택</TopSt>
      <div className="close" onClick={closeModalHandler}>
        x
      </div>
      <CalendarWrapper>
        <Calendar
          month={targetMonth}
          setMonth={setTargetMonth}
          year={targetYear}
          setTargetYear={setTargetYear}
          startDay={startDay}
          setStartDay={setStartDay}
          endDay={endDay}
          setEndDay={setEndDay}
          setClickday={setClickday}
          pos="top"
        />
      </CalendarWrapper>
      <CalendarWrapper className="two_calender_wrapper">
        <Calendar
          month={targetMonth + 1}
          setMonth={setTargetMonth}
          year={targetYear}
          setTargetYear={setTargetYear}
          startDay={startDay}
          setStartDay={setStartDay}
          endDay={endDay}
          setEndDay={setEndDay}
          setClickday={setClickday}
          pos="bottom"
        />
      </CalendarWrapper>
      <ButtonSt endDay={endDay} onClick={selectedHandler}>
        선택 완료
      </ButtonSt>
    </ContainerSt>
  );
}
const ContainerSt = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  width: 360px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  z-index: 9;
  overflow-y: scroll;
  .close {
    position: absolute;
    right: 17.8px;
    top: 10px;
    font-size: 22px;
    :hover {
      cursor: pointer;
    }
  }
  // 두번째 하단 캘린더 margin 값
  .two_calender_wrapper {
    margin-bottom: 81px;
  }
`;
const TopSt = styled.div`
  text-align: center;
  line-height: 48px;
  font-weight: 700;
  width: 360px;
  height: 48px;
  padding: 0 17.8px;
  position: relative;
  font-weight: 700;
`;
const CalendarWrapper = styled.div`
  border-top: 1px solid #f6f6f6;
  height: auto;
  // 첫번째 상단 캘린더 margin 값
  margin-bottom: 34px;
`;

const ButtonSt = styled.div`
  background-color: #e2e2e2;
  color: #b6b3b3;
  border-radius: 0 0 10px 10px;
  width: 360px;
  text-align: center;
  line-height: 48px;

  height: 48px;
  font-weight: 700;

  ${({ endDay }) => {
    if (!endDay) return;
    return css`
      background-color: #ff8450;
      color: #fff;
    `;
  }}
`;
