import styled from "styled-components";


export const NavLinks = styled.button`
  box-shadow: 0;
  border: 0;
  cursor: pointer;
  outline: none;
  background: none;
  color: inherit;
  font-size: 1rem;
  transition: all 0.3s;
  letter-spacing: inherit;
  opacity: 45%;
  :focus, :hover {
    opacity: 100%;
  }
  `;
  
export const NavBar = styled.nav`
  display: flex;
  gap: 12rem;
  padding: 1.2rem;
`;

export const DevName = styled.span`
  
`;