import styled from "styled-components";

export const Circle = styled.div`
  font-size: 5rem;
  height: 651px;
  width: 651px;
  position: relative;
  border-radius: 51%;
`;

export const Desc = styled.div`
  position: absolute;
  top: 39.5%;
  left: 25%;
  text-align: center; 
  width: 50%;
  height: 20%;
`;

export const Icon = styled.div`
  display: block;
  position: absolute;
  top: 51%;
  left: 51%;
  margin: -51px;
  text-align: center;
  line-height: 100px;
  opacity: 100%;
  transform: ${(props) => `rotate(${props.rot}deg) translate(350px) rotate(${-props.rot}deg)`};
  & > * {
    transition: all 0.3s;
    opacity: 45%;
    cursor: pointer;
    :hover {
      opacity: 100%;
    };
  }
`;


export const Container = styled.main`
  min-height: 90vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;