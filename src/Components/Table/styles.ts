import styled from "styled-components";

const ContainerList = styled.div`
  width: 1024px;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: white;
  overflow: scroll;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const Card = styled.div`
  margin: 5px;
  /* height: 300px; */

  div:first-child {
    background-color: #f2f2f2;
    border-radius: 5px;
  }

  div img {
    max-width: 200px;
  }
`;

const CardBody = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  padding: 0 10px;

  span {
    font-size: 15px;
    margin-bottom: 20px !important;
  }
`;

const CardName = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  span:first-child {
    color: black;
    font-size: 24px;
    max-width: 20%;
  }

  span:last-child {
    cursor: pointer;
    font-size: 22px;
    float: right;
    margin: 0 !important;
  }
`;

const CardType = styled.div`
  display: flex;

  span:not(:last-child) {
    margin-right: 5px;
  }
`;

export { ContainerList, Card, CardBody, CardName, CardType };
