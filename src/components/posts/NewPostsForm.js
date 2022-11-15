import React, {useState} from 'react';
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useNavigate} from "react-router-dom";
import {postFetch} from "../../tools/http";


const NewPostsForm = () => {
    const [form, setForm] = useState({});
    const navigate = useNavigate();

    const handleFormSubmit = (form) => {
        let formData = {...form, id: 0}

        postFetch(process.env.REACT_APP_POSTS, formData)
            .then((data) => {
                if (data.success === true) {
                    navigate('/')
                }
            })
            .catch((error) => console.log(error));
    }

    const handleFormChange = ({target}) => {
        const {name, value} = target;
        setForm(prevForm => ({...prevForm, [name]: value}));
    }

    return (
        <Form onSubmit={(e) => {
            e.preventDefault();
            handleFormSubmit(form)
        }}>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control name="author_name" type="text" placeholder="Ivanov Ivan" onChange={handleFormChange}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="author_email" type="text" placeholder="name@example.com "
                              onChange={handleFormChange}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Post title</Form.Label>
                <Form.Control name="title" type="text" placeholder="Lorem Ipsum" onChange={handleFormChange}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Post content</Form.Label>
                <Form.Control name="content" as="textarea" rows={5} onChange={handleFormChange}/>
            </Form.Group>
            <Button type="submit">Submit form</Button>
        </Form>
    );
}

export {NewPostsForm};
