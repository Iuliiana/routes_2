import React, {useEffect, useRef, useState} from 'react';
import {useParams} from "react-router-dom";
import {Badge, Card} from "react-bootstrap";
import useFetch from "../../hooks/useFetch";
import moment from 'moment';
import {useDeleteFetch} from "../../tools/http";

//
 const PostsDetail = () => {
     const {postId} = useParams();
     const [isDeletePost, deletePost] = useState();
     console.log(postId)
     const [postData, setPostData] = useState();

     useEffect(() => {
         const controller = new AbortController();
         fetch(process.env.REACT_APP_POSTS + '/' + postId)
             .then(response => response.json())
             .then(data => {
                 if (!data) {
                     console.log('Query error! ' + ' empty data.')
                 } else if (data.status < 200 && data.status > 300) {
                     console.log('Query Error! Status query - ' + data.status)
                 } else {
                     setPostData(data)
                 }
             }).catch(error => {
         })
         return () => controller.abort()
     }, [])


//     const {postId} = useParams();
//     const [isDeletePost, deletePost] = useState();
//     const [postData, isLoading] = useFetch(process.env.REACT_APP_POSTS + '/' + postId);
//
//     console.log(isDeletePost)
//

        // fetch(process.env.REACT_APP_POSTS + '/' + postId, {
        //     method: "delete"
        // })
        //     .then(response => response.json())
        //     .then(data => {
        //         if (!data) {
        //             console.log('Query error! ' + process.env.REACT_APP_POSTS + '/' + postId + ' empty data.')
        //         } else if (data.status < 200 && data.status > 300) {
        //             console.log('Query Error! Status query - ' + data.status)
        //         } else {
        //             return (data)
        //         }
        //     }).catch(error => {
        //     console.log('Query Error! ' + error.message)
        // })

   // const [data, loading, error] = useDeleteFetch(process.env.REACT_APP_POSTS + '/' + postId)
//
    const deletePostHandler = () => {
        console.log('delete')
    }

    return (
        <>
            {postData &&
                <div>
                    <div className="buttons">
                        <button>✎</button>
                        {' '}
                        <button onClick={deletePostHandler}>✘</button>
                    </div>
                    <br/>
                    <br/>
                    <h2>
                        <Badge bg="secondary">{postId}</Badge> {postData.title}
                    </h2>
                    <br/>
                    <Card>
                        <Card.Img variant="top"
                                  src="https://i.picsum.photos/id/24/4855/1803.jpg?hmac=ICVhP1pUXDLXaTkgwDJinSUS59UWalMxf4SOIWb9Ui4"/>
                        <Card.Body>
                            source: Freepic
                        </Card.Body>
                    </Card>

                    <p>
                        {postData.content}
                    </p>
                    <br/>
                    <br/>
                    <br/>
                    <blockquote className="blockquote mb-0">
                        <footer className="blockquote-footer">{postData.author_name}
                            <br/>
                            <cite title="Source Title"> mail: {postData.author_email}</cite>
                            <br/>
                            <cite title="Source Title">{moment().to(postData.created)}</cite>
                        </footer>
                    </blockquote>

                </div>
            }


        </>

    );
 }

export {PostsDetail};