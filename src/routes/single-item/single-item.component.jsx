import React from "react";
import { useParams } from "react-router-dom";


const SingleItem = () => {
    const { item } = useParams();
    return(
        <>
            <div>
                This is Single Item
            </div>
        </>
    );
};

export default SingleItem;