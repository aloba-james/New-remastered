import React, { useEffect } from "react";
import { Container,
    Row,
    Col
} from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";

import BLOG_DATA from '../../blog-data';
import { addCollectionAndDocuments } from "../../utils/firebase/firebase.utils";

import { getBlogsAndDocuments } from "../../utils/firebase/firebase.utils";
import { setBlogs } from "../../store/blogs/blogs.actions";

import {selectBlogsArray} from '../../store/blogs/blogs.selector';
import BlogsArrayPreview from "../../components/blogs-array-preview/blogs-array-preview.component";

const BlogPreview  = () => {
    const blogsList = useSelector(selectBlogsArray);
    const dispatch = useDispatch();
  
    useEffect(() => {
        const getBlogsMap = async () => {
            const blogsArray = await getBlogsAndDocuments('blogs');
            console.log(blogsArray);
            dispatch(setBlogs(blogsArray));
        };

        getBlogsMap();
    }, []);

    // useEffect(
    //     () => {
    //     addCollectionAndDocuments('blogs', BLOG_DATA);
    //     }, []
    // );


    return(
        <>
                <h1>
                    Blog Preview
                </h1>

            {Object.keys(blogsList).map((title) => {
                const blogs = blogsList[title];
                return (
                <BlogsArrayPreview key={title} title={title} blogs={blogs} />
                );
             })}

        </>
    );

};


export default BlogPreview;