import { setCareTime, setStartTime } from 'modules/careTime';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
// test
export default function TimeListModal({ title, showListHandler }) {
  const dispatch = useDispatch();
  const startTimeList = [
    '오전 8시',
    '오전 9시',
    '오전 10시',
    '오전 11시',
    '오전 12시',
    '오후 1시',
    '오후 2시',
    '오후 3시',
    '오후 4시',
    '오후 5시',
  ];
  const careTimeList = [
    // '1시간',
    // '2시간',
    '3시간',
    '4시간',
    '5시간',
    '6시간',
    '7시간',
    '8시간',
    '9시간',
    '10시간',
    '11시간',
    '12시간',
  ];

  const selectCareTimeHandler = (e) => {
    dispatch(setCareTime(e.target.innerText));
    showListHandler();
  };
  const selectStartTimeHandler = (e) => {
    dispatch(setStartTime(e.target.innerText));
    showListHandler();
  };

  const subTitle = () => {
    switch (title) {
      case 'start':
        return '돌봄 시작 시간';
      case 'care':
        return '하루 돌봄 시간';
      default:
        return;
    }
  };
  return (
    <>
      <BackgroundSt>
        <ContainerSt>
          <MiniWrapper>
            <TitleSt>{subTitle()}</TitleSt>
            <div className="close" onClick={showListHandler}>
              x
            </div>
          </MiniWrapper>
          {title === 'start'
            ? startTimeList.map((el, idx) => (
                <TimeListSt key={idx} onClick={selectStartTimeHandler}>
                  {el}
                </TimeListSt>
              ))
            : careTimeList.map((el, idx) => (
                <TimeListSt key={idx} onClick={selectCareTimeHandler}>
                  {el}
                </TimeListSt>
              ))}
        </ContainerSt>
      </BackgroundSt>
    </>
  );
}

const BackgroundSt = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  width: 360px;
  height: 812px;
  position: absolute;
  border-radius: 10px;
`;
const ContainerSt = styled.div`
  background-color: #fff;
  border-radius: 16px 16px 10px 10px;
  position: absolute;
  bottom: 0;
  left: 0px;
  width: 360px;
  height: auto;
  z-index: 9;
  overflow-y: scroll;
`;
const MiniWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 17.8px 16px 16px;
  .close {
    font-size: 22px;
    :hover {
      cursor: pointer;
    }
  }
`;
const TitleSt = styled.div`
  font-size: 18px;
  line-height: 28px;
  font-weight: 700;
`;
const TimeListSt = styled.div`
  width: 100%;
  padding-left: 16px;
  font-size: 14px;
  height: 48px;
  line-height: 48px;
  transition: 0.1s;
  :hover {
    cursor: pointer;
    color: #fff;
    font-weight: bold;
    background-color: #ff8450;
    transition: all 0.35s ease;
  }
  :not(:hover) {
    background-color: #fff;
    transition: all 0.35s ease;
  }
`;
