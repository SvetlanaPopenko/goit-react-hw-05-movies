import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const LinkList=styled.ul`
    padding: 20px;
`
export const Link = styled(NavLink)`
text-decoration:none;
font-size: 24px;
&:hover,
&:focus{
    color: red;
}
`
export const MovieContainer=styled.div`
    display: flex;
    align-items:center;
    justify-content:space-between;
    gap:20px;
`

export const MovieImage = styled.img`
width: 500px;
`
export const MovieTitle=styled.h2`
    font-size:30px;
  padding: 10px;
  color: #cb861e;
`
export const MovieDesc=styled.p`
    font-size: 28px;
  padding: 10px;
  color: #614c02;
  font-weight:900px;
`
export const MovieSpan=styled.span`
    font-size:20px;
    color: #8d7d07;
    margin-left: 10px;
`