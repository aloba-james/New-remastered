import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';



/*------------------------------------*\
    #HEADER
\*------------------------------------*/
export const NavBarContainer = styled.div`
	background-color: transparent;
	display: flex;
   	justify-content: space-between;
   	height: 80px;
   	z-index: 1;
   	width: 100%;
	position: static;
	margin-bottom: 50px;
	flex-direction: column;
	align-items: center;

	.toggle{
		display: none;
	}
	
	.navbar.colorChange{
		background-color: #fff;
		color: black;
		width: 100%;
		margin-left: 0px;
		margin-right: 0px;
		height: 50px;
	}

	@media screen and (min-width: 320px) and (max-width: 440px)  {
		.toggle{

		display: flex;
		}
  }
`;

export const NavBar = styled.nav`
	color: #111; 
 	width: 100%;
    padding: 10px 20px 20px;
    margin-left: 0px;
    margin-right: 0px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem; 
	transition: opacity .5s ease, height .5s ease;
    position: fixed;
    top:0;
    z-index: 10;
    animation         : navbarFixed 0.8s;
  
   @media screen and (max-width: 960px) {
       transition: 0.8s all ease
   }
`;

export const LogoContainer = styled.div`
  display: inline-block;
  padding-top: 20px;
  float: left;
`;


export const NavBarMenu = styled.ul`
   display: flex;
   align-items: center;
   list-style: none;
   text-align: center;
   margin-right: -22px;

   @media screen and (max-width: 960px) {
     display: none;
 	}
`;

export const NavBarMenuItem = styled.li`
	list-style: none;
	height: 80px;
	display: inline;
	margin-right      : 20px;
	position          : relative;
	-o-transition     : 0.3s ease-in-out;
 	transition        : 1.5ss ease-in-out;

	.services-3j{
		display: none;
	}

	.about-2{
		display: none;
	}

	.dropdown{
		min-width: 230px;
	}

	&:last-child {
	  margin-right: 0;
	}

	&:hover{
	  	background-color: transparent;
	  	color: blue;
	  	cursor: alias;
		border-style: outset;
		$color-blue-dark: #0d2035;
	
		.services-3j, .about-2{
			display: block;
			width: 100px;
			height: 150px;
			overflow-y: auto;
			background: inherit;
			border: none;

			.a{
				background-color: #eee;
				color: black;
				display: block;
				padding: 12px;
				margin-right: 20px;
				text-decoration: none;
				overflow: scroll;

				.active{
					background-color: #04AA6D;
					color: white;
				}
			}
		}
	}

	@media only screen and (max-width:1000px){
	    width: 100%;
	    &:hover {
	        border: none;
	    }
	}
`;

export const NavBarMenuLink = styled(Link)`
	  display: flex; 
	  align-items: center; 
	  text-decoration: none; 
	  padding: 0 1rem; 
	  height: 100%; 
	  text-transform: capitalize;
	  font-family       : var(--global--font-body);
	  font-size         : 16px;
	  text-transform    : capitalize;
	  font-weight       : 400;
	  line-height       : 22px;
	  color             : var(--global--color-white);
	  position          : relative;
	  -o-transition     : 0.3s ease-in-out;
	  transition        : 0.3s ease-in-out;

	  .disabled-link {
		pointer-events: none;
	  }

	   &:active { 
	     cursor: none;
	  }
		

	@media screen and (min-width: 768px) {
		:&before {
	    position          : absolute;
	    left              : 0;
	    bottom            : -8px;
	    content           : '';
	    height            : 2px;
	    width             : 0;
	    background-color  : var(--global--color-white);
	    -webkit-transition: width 300ms ease-in-out;
	    -o-transition     : width 300ms ease-in-out;
	    transition        : width 300ms ease-in-out;
	  }
	}
`;

export const NavBarMenuDropdown = styled.div`
	display: flex; 
	align-items: center; 
	text-decoration: none; 
	padding: 0 1rem; 
	height: 100%; 
	text-transform: capitalize;
	font-family       : var(--global--font-body);
	font-size         : 16px;
	text-transform    : capitalize;
	font-weight       : 400;
	line-height       : 22px;
	position          : relative;
	-webkit-transition: 0.1s ease-in-out;
	-o-transition     : 0.1s ease-in-out;
	transition        : 0.1s ease-in-out;
	background-color: transparent;
	border: none:
`;

export const ModuleContainer = styled.div`
	&:before {
		content          : '';
		position         : absolute;
		top              : 50%;
		-webkit-transform: translateY(-50%);
		-ms-transform    : translateY(-50%);
		transform        : translateY(-50%);
		left             : 0;
		width            : 1px;
		height           : 20px;
		background-color : blue;
		margin-left: 24px;
    }
`;

export const SocialContainer = styled.div`
	  padding: 25px 50px;
	  float: right;
	  margin-right: 0px;
`;

export const SocialLinkMenu = styled.ul`
    margin-left: -50px;
`;

export const SocialLinkMenuItem = styled.li`
	margin: 0 1rem;
    transition: transform 250ms;
    display: inline-block;

     &:hover {
  		transform: translateY(-2px);
	}
`;

export const SocialLinkYoutube = styled.a`
	color: #eb3223;

`;

export const SocialLinkFacebook = styled.a`
  color: #4968ad;
`;

export const SocialLinkTwitter = styled.a`
	color: #49a1eb;

`;

export const SocialLinkInstagram = styled.a`
	color: red;
`;

export const ContactHashLink = styled.div`
	display: flex; 
	align-items: center; 
	text-decoration: none; 
	padding: 0 1rem; 
	height: 100%; 
	text-transform: capitalize;
	font-family       : var(--global--font-body);
	font-size         : 16px;
	text-transform    : capitalize;
	font-weight       : 400;
	line-height       : 22px;
	color             : var(--global--color-white);
	position          : relative;
	-webkit-transition: 0.3s ease-in-out;
	-o-transition     : 0.3s ease-in-out;
	transition        : 0.3s ease-in-out;

	&:active { 
	cursor: none;
	}
	

	@media screen and (min-width: 768px) {
	:&before {
	position          : absolute;
	left              : 0;
	bottom            : -8px;
	content           : '';
	height            : 2px;
	width             : 0;
	background-color  : var(--global--color-white);
	-webkit-transition: width 300ms ease-in-out;
	-o-transition     : width 300ms ease-in-out;
	transition        : width 300ms ease-in-out;
	}
	}
`;

export const DropdownMenu = styled.ul`
	min-width: 230px;
	top: auto;
	background-color: #ffffff;
	box-shadow: 0 33px 32px rgb(0 0 0 / 10%);
	padding: 10px;
	color: #000;
	border-style: solid;
	border-color: #eee;
	border-width: 1px !important;
	border-radius: 4px;

`;

export const DropdownMenuItem = styled.li`
	visibility: hidden;
	display: block;
	opacity: 0;
	transition: all 0.3s ease-in-out 0s;
`;

