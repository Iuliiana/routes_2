import React from 'react';
import useFetch from "../../hooks/useFetch";
import {PostsList} from "../../components/posts/PostsList";
import {PageHeader} from "../../components/ui/PageHeader";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

const Posts = () => {
    const [postsData, isLoading] = useFetch(process.env.REACT_APP_POSTS);
    return (
        <>
            <PageHeader title={'Posts'}>
                <Link to='/posts/new'><Button variant="light">new post</Button></Link>
            </PageHeader>
            {(isLoading && postsData)&& <PostsList postsData={postsData}/>}
        </>
    );


}
export {Posts};