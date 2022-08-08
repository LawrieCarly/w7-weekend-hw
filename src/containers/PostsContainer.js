import React, {useState, useEffect} from "react";
import ListOfPosts from "../components/ListOfPosts";
import NewPost from "../components/NewPost";

const PostsContainer = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchApi();
    }, [])

    const fetchApi = function (){
        fetch ("https://www.reddit.com/r/food/.json")
        .then (res => res.json())
        .then (posts => setPosts(posts.data.children))
    }

    const addPost = function (submittedPost){
        const updatedPosts = [...posts, submittedPost]; 
        setPosts(updatedPosts);
    }


    return (
        <>
            <h2>Post Container</h2>
            <NewPost onPostSubmit={(post) => {addPost(post)}}/>
            <ListOfPosts posts={posts}/>
        </>
    )
}

export default PostsContainer;