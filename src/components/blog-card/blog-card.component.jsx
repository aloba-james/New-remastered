import React from 'react';


const BlogCard = ({ blog }) => {
    const { imageUrl, description, story } = blog;

    return (
        <div>
            <div>
                <img src={imageUrl} alt={`${description}`} />
                <span>{description}</span>
            </div>
            
            <div>
                <div className="meta-date"></div>
                <div className='meta-comments'></div>
                <div className='description'>{description}</div>
                <p>{story}</p>
            </div>

            <div>
                <span as='link' to='/' blog = {blog}>Read More</span>
            </div>       
    
        </div>
    );
};

export default BlogCard;
