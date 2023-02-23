import styled from 'styled-components';
import SubscribeBG from '../../assets/images/background/subscribe-bg.jpg';
import { Button,
	Container
 } from 'react-bootstrap';

export const  NewsLetterArea = styled.div`
	position: relative;
    z-index: 1;
    background: url(${SubscribeBG}); 
    background-position: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    height: 450px;

    &:before{
	    content: "";
	    position: absolute;
	    left: 0;
	    top: 0;
	    width: 100%;
	    z-index: -1;
	    height: 100%;
	    background: linear-gradient(to right top,#fdb084,#ff9870,#ff7e62,#ff5f59,#ff3656);
	    opacity: .9;
    }
`;

export const NewsLetterContainer = styled(Container)`	
	padding-top: 100px;
	padding-bottom: 30px;

`;

export const NewsLetterContent = styled.div`
	text-align: center;
    max-width: 835px;
    margin: auto;

    .input-newsletter{
	    display: block;
	    width: 100%;
	    background-color: #fff;
	    border: none;
	    height: 65px;
	    padding-left: 25px;
	    border-radius: 10px;
	    padding-top: 0;
	    outline: 0;
	    color: #202647;
    }

    span{
    	    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    margin-top: -5px;
    display: block;
    }

    h2{
    	color: #fff;
    margin-top: 15px;
    margin-bottom: 0;
    font-size: 48px;
    }
`;

export const SubscribeButton = styled(Button)`
	position: absolute;
    right: 5px;
    top: 5px;
    background: linear-gradient(to right top,#fdb084,#ff9870,#ff7e62,#ff5f59,#ff3656);
    color: #fff;
    border: none;
    height: 55px;
    padding: 0 40px;
    border-radius: 10px;
    transition: .5s;
    line-height: 55px;
    font-size: 15px;
    font-weight: 700;
`;