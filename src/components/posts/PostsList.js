import React from 'react';
import propTypes from "prop-types";
import {PostCard} from "./PostCard";

const PostsList = (props) => {
    return (
        <ul>
            {props.postsData?.map((post) => {
                return (
                  <PostCard key={post.id} {...post} />
                );
            })}
        </ul>
    );
}

PostsList.propTypes = {
    postsData: propTypes.array.isRequired
};
export {PostsList};
