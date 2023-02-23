import styled from "styled-components";
import {
    Container,
    Button
} from 'react-bootstrap';
import Parallax13 from '../../assets/parallax-13.jpeg';


export const BackgroundSection = styled.section`
    background: url(${Parallax13});
    width: 100%;
    height: 100%;
    overflow: hidden;
    -webkit-box-align: center!important;
    align-items: center!important;
    display: flex;
    flex-wrap: wrap;
    min-height: 100vh;
    padding-bottom: 100px;
    top: -100px;
    margin-bottom: 80px
    z-index: 1;
    position: relative;

    &:hover {
        cursor: pointer;
        
          transform: scale(1.1);
          transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);

         
  
    
     
      }
`;


export const HeroContainer = styled(Container)`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;

    
`;

export const TextLeft = styled.div`
    text-align: left!important;
    margin-left: 80px;
`;

export const TextUpperCase = styled.h1`
    text-transform: uppercase!important;
`;

export const Lead = styled.p`
    text-transform: none;
    line-height: 1.7;
    letter-spacing: 0;
    color: #777;
    font-family: poppins,sans-serif;
`;

export const TextSeparator = styled.div`
    background-color: #111;
    display: block;
    height: 4px;
    margin: 20px 0;
    width: 10%;
`;

export const CollectionButton = styled(Button)`
    
`;