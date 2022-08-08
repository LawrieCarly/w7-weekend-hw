import React from "react";
import Post from "./Post";

const ListOfPosts = ({posts}) => {

    const postItems = posts.map((post, index) => {
        return (
        <Post post={post} key={index}/>
        )
    });


    

    return (
        <>
            <h2> Latest Posts</h2>
            <ul className="post-list"> {postItems} </ul>
        </>

    )
}

export default ListOfPosts;