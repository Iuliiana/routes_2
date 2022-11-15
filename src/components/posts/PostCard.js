import React from 'react';
import {Card} from "react-bootstrap";
import {UserData} from "./UserData";
import propTypes from "prop-types";
import {NavLink} from "react-router-dom";
import moment from "moment";

const PostCard = (props) => {
    return (
        <NavLink to={'/posts/' + props.id}>
            <Card style={{width: '100%'}}>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.content}
                    </Card.Text>
                    <br/>
                    <UserData id={props.author_id} name={props.author_name} email={props.author_email}/>
                    <br/>
                </Card.Body>
                <Card.Footer className="text-muted">
                    {moment().to(props.created)}
                </Card.Footer>
            </Card>
        </NavLink>

    );
}

PostCard.propTypes = {
    id: propTypes.number.isRequired,
    author_id: propTypes.number.isRequired,
    author_email: propTypes.string.isRequired,
    author_name: propTypes.string.isRequired,
    created: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    content: propTypes.string.isRequired,
};
export {PostCard};
