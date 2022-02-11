import styled from "styled-components";

const FormSearchStyled = styled.div`
  height: 200px;
  width: 1280px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #313131;

  margin-top: 50px;
  padding: 0 20px;

  div input {
    color: #313131;
    width: 400px;
    height: 60px;

    font-size: 20px;
    margin-right: 10px;

    border: 3px solid #616161;
    border-radius: 5px;

    outline: none;
  }

  div button {
    width: 60px;
    height: 60px;

    background-color: #ee6b2f;
    color: #fff;

    font-size: 25px;

    border: none;
    border-radius: 5px;

    cursor: pointer;

    transition: all 0.2s;
  }

  div button:hover {
    background-color: #da471b;
  }

  span {
    display: flex;
    align-items: center;
    height: 100px;
    width: 50%;

    background-color: #4dad5b;
    color: #fff !important;

    /* line-height: 60px; */
    padding: 0 20px;

    font-size: 30px;

    margin-top: 0 !important;

    border-radius: 5px;
  }
`;

export { FormSearchStyled };
