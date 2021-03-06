import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useNavigate } from '../../node_modules/react-router/index';
import { activeInit } from 'modules/activeButton';
import { addressInit } from 'modules/address';
import { dateInit } from 'modules/careDate';
import { timeInit } from 'modules/careTime';
import { PAGE_INIT } from 'modules/page';

const Complete = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const endHandler = () => {
    dispatch(activeInit());
    dispatch(addressInit());
    dispatch(dateInit());
    dispatch(timeInit());
    dispatch({ type: PAGE_INIT });
    navigate('/');
  };

  return (
    <Container>
      <div>π± μ μ²­μ΄ μλ£λμμ΅λλ€!</div>
      <p>
        μ μ²­νμ  λ΄μ©μ λ³΄κ³  μΌμ΄μ½λλλ€μ΄ μ§μν  μμ μλλ€. <br />
        μΌμ΄μ½λλλ€μ΄ μ μ²­ν  λ λ§λ€ μ±μ΄λ λ¬Έμλ‘ μλ¦Όμ λ³΄λ΄λλ¦½λλ€.
        <br /> μΌμ΄μ½λλμ μ§μ μλ¦Όμ κΈ°λ€λ €μ£ΌμΈμ!
      </p>
      <EndButton onClick={endHandler}>λλ΄κΈ°</EndButton>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 328px;
  height: 548px;
  padding: 32px 0;

  div {
    width: 100%;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    margin-bottom: 8px;
  }
  p {
    width: 100%;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: #7d7878;
  }
`;
const EndButton = styled.button`
  margin: 32px auto;
  width: 71px;
  height: 48px;
  font-size: 14px;
  font-weight: bold;
  line-height: 20px;
  padding: 14px 15px;
  border-radius: 4px;
  border: 1px solid #e2e2e2;

  :hover {
    color: #fff;
    background-color: #ff8450;
    transition: all 0.35s ease;
  }
  :not(:hover) {
    background-color: #fff;
    transition: all 0.35s ease;
  }
`;

export default Complete;
