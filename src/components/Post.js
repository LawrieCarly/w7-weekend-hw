import React from "react";
import './Components.css';

const Post= ({post, image}) => {

    if(!post){
        return
    }

        return (
            <li className="list-item">
                <h5>{post.data.author}</h5>
                <h3>{post.data.title}</h3>
                <p className="content">{post.data.selftext}</p>
                <div>
                    <img className="image" src={post.data.url_overridden_by_dest}/>
                </div>
                <div>
                    <h6> COMMENTS: {post.data.num_comments}</h6>
                </div>
            </li>
        )
}

export default Post;