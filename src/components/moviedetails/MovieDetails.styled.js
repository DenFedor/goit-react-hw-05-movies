import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const MovieDetailsWrap = styled.div`
  display: flex;
  gap: 15px;
`;
export const Description = styled.p`
& > span{
  font-weight: 600;
  font-size: 22px;
  color: blue;

}
  font-size: 20px;
`;

export const MoviePoster = styled.img`
  object-fit: cover;
  max-height: 100%;
  max-width: 100%;
  border-radius: 10px;
  box-shadow: rgb(3, 37, 65) 0px 0px 4px 2px;
  align-self: center;
  margin-right: 20px;
`;
export const StyledLink = styled(Link)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  font-weight: 500;
  background-color: rgb(3, 37, 65);
`;
export const StyledNavLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  font-weight: 500;
  background-color: rgb(3, 37, 65);

  &.active {
    color: white;
    background-color: orangered;
  }
`;
export const List = styled.ul`
  display: flex;
  gap: 10px;
  list-style-type: none;
`;
export const GenresText=styled.p`
font-weight: 600;
font-size: 22px;
color: blue;
`