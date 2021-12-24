import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  color: #000;
  height: 1.25em;
  display: flex;
  justify-content: center;
  padding: 2rem calc((100vw - 1000px) / 2);
  z-index: 10;
  padding-bottom: 5rem;
  @media screen and (max-width: 583px) {
    padding-bottom: 4rem;
  }
  @media screen and (max-width: 455px) {
    padding-bottom: 3rem;
  }
  @media screen and (max-width: 280px) {
    padding-bottom: 2.5rem;
  }
`;

export const NavLink = styled(Link)`
  color: black;
  display: inline-block;
  align-items: center;
  font-size: 1.5em;
  padding: 0 3rem;
  height: 100%;
  cursor: pointer;
  &:hover {
    color: red; 
  }
  &.active {
    color: #15cdfc;
  }
  @media screen and (max-width: 583px) {
    padding: 0 1.5rem;
    font-size: 1.5em;
  }
  @media screen and (max-width: 455px) {
    font-size: 1.04em;
    padding: 0 1rem;
  }
  @media screen and (max-width: 280px) {
    font-size: 1.00em;
    padding: 0 0.6rem;
  }
`;



export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

