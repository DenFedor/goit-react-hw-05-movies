import styled from "styled-components";
import { NavLink,Link } from "react-router-dom";


export const StyledLink=styled(Link)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  font-weight: 500;
  background-color: rgb(3,37,65);
`
export const StyledNavLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  font-weight: 500;
  background-color: rgb(3,37,65);

  &.active {
    color: white;
    background-color: orangered;
  }
`;
export const List= styled.ul`
display: flex;
gap: 10px;
list-style-type: none;
`