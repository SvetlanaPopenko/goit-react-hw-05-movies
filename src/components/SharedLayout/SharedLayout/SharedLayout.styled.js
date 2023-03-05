import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledLink=styled(NavLink)`
 padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  };
`
export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;