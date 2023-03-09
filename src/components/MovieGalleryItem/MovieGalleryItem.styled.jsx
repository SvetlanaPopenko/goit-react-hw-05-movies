import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;
export const MovieContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const MovieItem = styled.div`
  display: block;
  border: 1px solid black;
  border-radius: 4px;
  width: 360px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    box-shadow: 2px 3px 5px #c7fc07, -1px -3px 5px #0f70de;
    transform: scale(1.05);
    cursor: zoom-in;
    border: none;
  }
`;
export const MovieImage = styled.img`
  width: 100%;
  object-fit: cover;
  height: 540px;
`;

export const CardWrapper = styled.div`
  border: 1px solid black;
  border-radius: 4px;

  > a {
    text-decoration: none;
  }
`;

export const MovieName = styled.h2`
  font-size: 26px;
  padding: 7px;
  margin-top: 8px;
  margin-bottom: 0;
  color: #cb861e;
  height: 60px;
  white-space: pre-wrap;
`;
export const MovieRelease = styled.p`
  font-size: 26px;
  padding: 10px;
  color: #614c02;
  font-weight: 600;
`;
export const MovieInfo = styled.div`
  /* padding:10px; */
`;
