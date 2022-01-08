import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  text-align: center
  
`;

export const WrapperInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-left: 20px;
  height: 200px;
  margin: auto auto auto 8px;
  

  h1 {
    font-size: 32px;
    font-weight: bold;
    color: #ffffff;
       
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    color: #ffffff;
  }

  h4 {
    font-size: 16px;
    font-weight: bold;
    color: #ffffff;
  }

  span {
    color: #ffffff;
  }
`;

export const WrapperStatusCount = styled.div`
  display: flex;
  align-items: center;
  
  div {
    text-align: center;
    background-color: #ffffff;
    width: 100px;
    border: 4px solid #0000ff;
  }
  h4 {
    color: #000000;
  }
  span {
    color: #000000;
  }
`;

export const WrapperUserGeneric = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  justify-content: center;

  h3 {
    margin-right: 8px;
  }

  a {
    font-size: 18px;
    color: #ffffff;
    font-weight: bold;
  }
`;

export const WrapperImage = styled.img`
  border-radius: 20%;
  border: 4px solid #000000;
  width: 200px;
  margin: auto 8px auto auto;
`;
