import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: 90vh;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding: 2rem;
`;

export const Project = styled.section`
  width: 15%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    ${Container} > img {
      opacity: 1;
    }
  }
`;

export const ImgCont = styled.div`
  width: 60%;
  height: 50%;
  top: 30%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: column nowrap;
  position: absolute;
  transition: all ease 300ms;
  opacity: ${(props) => props.isFocused ? 1 : 0};
`;

export const Navigator = styled.a`
  all: unset;
`;