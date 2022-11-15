import React from 'react';
import {NewPostsForm} from "../../components/posts/NewPostsForm";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

const NewPosts = () => {
    return (
        <>
            <Link to="/" relative="path">
                <Button variant="danger">Cancel</Button>
            </Link>
            <NewPostsForm/>
        </>
    );
}

export { NewPosts };