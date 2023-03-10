import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #614c02;
  font-weight: 600;
  font-size: 26px;

  &.active {
    color: white;
    background-color: orangered;
  }
`;
export const Container = styled.div`
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  > nav {
    margin-right: auto;
    display: flex;
    align-items: center;
    gap: 12px;
  }
`;
