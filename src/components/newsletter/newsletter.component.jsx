import React from 'react'; 
import {  NewsLetterArea,
	NewsLetterContainer,
	NewsLetterContent,
	SubscribeButton
} from './newsletter.styles';


const NewsLetter = () => {
	return(
		<NewsLetterArea>
			<NewsLetterContainer>
				<NewsLetterContent>
					<span> Get started instantly! </span>
					<h2> Get Only New Update From This Newsletter </h2>
					<form className='newsletter-form' style={{position: 'relative',marginTop: 35}}> 
						<input type="email" className="input-newsletter" placeholder="Enter your email" name="EMAIL" required="" />
						<SubscribeButton>Subscribe</SubscribeButton>
					</form>
				</NewsLetterContent>
			</NewsLetterContainer>
		</NewsLetterArea>
		);

};


export default NewsLetter;