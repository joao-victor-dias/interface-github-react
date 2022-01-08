import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 4px;

  input {
    border: 4px solid #000000;
    border-radius: 8px;  
    width: 100%;
    height: 44px;
    padding: 8px;
    font-weight: 700;
    background: #ffffff           
  }

  button {
    background-color: #000000;
    padding: 8px 16px;
    margin: 0px 0 0 8px;
    border: 4px solid #000000;
    border-radius: 8px;

    &:hover {
      background-color: #2c5282;
      box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
    }

    span {
      font-weight: bold;
      color: #ffffff;
    }
  }
`;
