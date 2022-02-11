import styled from "styled-components";

const HeaderStyled = styled.header`
  width: 100%;
  height: 100px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;

  background-color: #fff;

  ul {
    height: 100%;

    display: flex;
    align-items: center;

    list-style: none;
  }

  ul li {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    color: #898989;
    font-size: 20px;

    width: 150px;

    cursor: pointer;
    transition: all 0.2s;
  }

  ul li:hover,
  ul li:hover a {
    color: #fff;
  }

  ul li svg {
    font-size: 25px;
  }

  ul li a {
    color: #898989;
    /* margin: 0 25px; */
    text-decoration: none;
    transition: all 0.2s;
  }

  ul li:nth-child(1) {
    height: 100%;
    border-bottom: 6px solid #e3350d;
  }

  ul li:nth-child(2) {
    height: 100%;
    border-bottom: 6px solid #e6bc2f;
  }

  ul li:nth-child(3) {
    height: 100%;
    border-bottom: 6px solid #4dad5b;
  }

  ul li:nth-child(1):hover {
    background-color: #e3350d;
  }

  ul li:nth-child(2):hover {
    background-color: #e6bc2f;
  }

  ul li:nth-child(3):hover {
    background-color: #4dad5b;
  }
`;

export { HeaderStyled };
