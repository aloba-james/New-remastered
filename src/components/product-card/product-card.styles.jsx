import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProductCartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
  }

  button,a {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }



  &:hover {
    img {
      opacity: 0.8;
    }

    button,a {
      opacity: 0.85;
      display: flex;
    }
    

  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const Price = styled.span`
  width: 10%;
`;


export const ProductLink = styled(Link)`
  color: red;
  margin-top: -60px;
  margin-left: 200px;
  text-align: center;
`;