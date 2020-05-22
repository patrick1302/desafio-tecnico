import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;

  @media (max-width: 750px) {
    grid-template-columns: 2fr 1fr;
  }
  @media (max-width: 565px) {
    grid-template-columns: 1fr;
  }
`;

export const Menu = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  margin-top: 20px;
  justify-content: space-evenly;

  @media (max-width: 750px) {
    display: grid;
    grid-template-columns: 1fr;
    margin: 50px 0 50px 0;
  }
`;

export const Button = styled.button`
  width: 45%;
  border-radius: 5px;
  display: flex;
  justify-self: start;
  background: #f0f0f5;
  :hover {
    background: #a52a2a;
  }
  @media (max-width: 750px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;

export const Product = styled.div`
  display: grid;
  justify-content: center;
  align-content: start;
  // margin: auto;
`;

export const ProductCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 40px;
  margin-top: 20px;

  @media (max-width: 1257px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  @media (max-width: 750px) {
      grid-template-columns: 1fr 1fr;
      grid-gap: 20px;
    }
  }
`;
