import React from 'react';
import {NewPostsForm} from "../../components/posts/NewPostsForm";
import Button from "react-bootstrap/Button";
import {Link, NavLink} from "react-router-dom";

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

//redirect
// <Route
//     path="*"
//     element={<Navigate to="/" replace />}
// />