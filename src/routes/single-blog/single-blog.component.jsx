import React from "react";
import { Container,
    Row,
    Col
} from 'react-bootstrap';


const Blog = ({blog}) => {
    const { imageUrl, description, story, tags, dateCreated } = blog;

    return(
        <>
            <section>
                <Container>
                    <Row>
                        <Col>
                            <div className="post-item-wrap">
                                <div className="post-image">
                                       <img src={imageUrl} alt="" />
                                </div>
                                <div className="post-item-description">
                                    <h2>{description}</h2>
                                    <div className="post-meta">
                                        <div className="category"></div>
                                        <div className="date"></div>
                                        <div className="comment-count"></div>
                                        <div className="share"></div>
                                    </div>
                                    <p>{story}</p>
                                </div>
                                 <div className="post-tags">
                                    {
                                        tags.map((tag) => {<span>{tag}</span>} 
                                    )}
                                </div>
                                <div className="post-navigation"></div>
                                <div className="comments"></div>    
                                <div className="respond-form"></div>                                        
                            </div>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );

};


export default Blog;