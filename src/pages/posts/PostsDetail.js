import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from "react-router-dom";
import {Badge, Card} from "react-bootstrap";
import moment from 'moment';
import useFetch from "../../hooks/useFetch";
import {deleteFetch, getFetch, postFetch} from "../../tools/http";
import {Notfound} from "../Notfound";

//
const PostsDetail = () => {
    const {postId} = useParams();
    const [post, isLoading, error] = useFetch(process.env.REACT_APP_POSTS + '/' + postId);
    const navigate = useNavigate();
    const [editMode, setEditMode] = useState(false)
    const [postEdit, setPostEdit] = useState()

    useEffect(() => {
        if (isLoading) {
            setPostEdit(post.content)
        }
    }, [isLoading])

    const handleDeleteClick = () => {
        deleteFetch(process.env.REACT_APP_POSTS + '/' + postId)
            .then((data) => {
                if (data.success === true) {
                    navigate(`/`);
                }
            })
            .catch((error) => console.log(error.message()));
    }

    const handleEditClick = () => {
        setEditMode( prevState => !prevState)
    }

    const handleChange = (e) => {
        setPostEdit(e.target.value)
    }

    const handleClick = () => {

        postFetch(process.env.REACT_APP_POSTS, {id: postId, content: postEdit})
            .then((data) => {
                if (data.success === true) {
                    setEditMode( prevState => !prevState)
                    post.content = postEdit;
                }
            })
            .catch((error) => console.log(error));

    }




    return (
        <>
            {(isLoading && !error.message) &&
                <div>
                    { !editMode &&  <div className="buttons">
                        <button onClick={handleEditClick}>✎</button>
                        {' '}
                        <button onClick={handleDeleteClick}>✘</button>
                    </div>}
                    <br/>
                    <br/>
                    <h2>
                        <Badge bg="secondary">{postId}</Badge> {post.title}
                    </h2>
                    <br/>
                    <Card>
                        <Card.Img variant="top"
                                  src="https://i.picsum.photos/id/24/4855/1803.jpg?hmac=ICVhP1pUXDLXaTkgwDJinSUS59UWalMxf4SOIWb9Ui4"/>
                        <Card.Body>
                            source: Freepic
                        </Card.Body>
                    </Card>

                    {!editMode
                    ? <p>{post.content}</p>
                    : <>
                            <textarea name="" id="" cols="30" rows="10" value={postEdit} onChange={(e) =>handleChange(e)}/>
                            <button onClick={handleClick}>save</button>
                            <button onClick={handleEditClick}>✘</button>
                        </>
                    }

                    <br/>
                    <br/>
                    <br/>
                    <blockquote className="blockquote mb-0">
                        <footer className="blockquote-footer">{post.author_name}
                            <br/>
                            <cite title="Source Title"> mail: {post.author_email}</cite>
                            <br/>
                            <cite title="Source Title">{moment().to(post.created)}</cite>
                        </footer>
                    </blockquote>

                </div>
            }

            {isLoading && error.message && error.code === 404 && <Notfound/>}
        </>

    );
}

export {PostsDetail};