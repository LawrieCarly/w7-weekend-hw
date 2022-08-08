import React, {useState} from "react";
import './Components.css';

const NewPost = ({onPostSubmit}) => {

    const [newTitle, setNewTitle] = useState("");
    const [newPost, setNewPost] = useState("");
    const [newAuthor, setNewAuthor] = useState("");
    // const [newImage, setNewImage] = useState();

    const handleAddAuthor = function (event) {
        setNewAuthor(event.target.value);
    }

    const handleAddTitle = function (event) {
        setNewTitle(event.target.value);
    }

    const handleAddPost = function (event) {
        setNewPost(event.target.value);
    }

    // const handleAddImage = function (event) {
    //     setNewImage(event.target.value);
    // }

    const handleSubmit = function (event){
        event.preventDefault();
        const authorToSubmit = newAuthor.trim();
        const titleToSubmit = newTitle.trim();
        const postToSubmit = newPost.trim();
        // const imageToSubmit = newImage.trim();
        if(!titleToSubmit && !postToSubmit){
            return
        }
    
        onPostSubmit({
            newTitle: titleToSubmit,
            newPost: postToSubmit,
            newAuthor: authorToSubmit
            // newImage: imageToSubmit,
        });

        // setNewTitle = ("")
        // setNewPost = ("")
        // setNewImage = ("")    

    };

    return (
        <div className="new-post">
            <h4>Post your latest Recipe</h4>
            <form className="form">
                <input type="text" value={newAuthor} placeholder="your name" onChange={handleAddAuthor}v/>
                <input type="text" value={newTitle} placeholder="Name of the Recipe" onChange={handleAddTitle}/>
                <textarea type="text" value={newPost} placeholder="Method and ingredients" onChange={handleAddPost}/>
                {/* <input 
                type="file"
                id="post-image" 
                name="post-image"
                value={newImage}
                accept="image/png, image/jpeg"
                onSubmit={handleAddImage}/> */}
                <input className="button" type="submit" value="Post" onClick={handleSubmit}/>
            </form>
        </div>
    )

};


export default NewPost;