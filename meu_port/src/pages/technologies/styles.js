import styled from "styled-components";

export const Icon = styled.div`
  display: block;
  position: absolute;
  top: 51%;
  left: 51%;
  margin: -51px;
  text-align: center;
  line-height: 100px;
  transform: ${(props) => {
    if (!props.rot) return 'translate(350px)';
    return `rotate(${props.rot}deg) translate(350px) rotate(${-props.rot}deg)`;
  }
};
`;

export const Circle = styled.div`
  font-size: 5rem;
  height: 651px;
  width: 651px;
  position: relative;
  border-radius: 51%;
  &::after {
    position: absolute;
    content: ${(props) => props.details};
    top: 40%;
    left: 40%;
  }
`;

export const Container = styled.main`
  min-height: 90vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;