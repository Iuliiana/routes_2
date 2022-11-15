import React from 'react';
import propTypes from "prop-types";

const UserData = (props) => {
    return (
        <blockquote className="blockquote mb-0">
            <footer className="blockquote-footer">
                {props.name} <br/><cite title="Source Title"> mail: {props.email}</cite>
            </footer>
        </blockquote>
    );
}

UserData.propTypes = {
    id: propTypes.number.isRequired,
    name: propTypes.string.isRequired,
    email: propTypes.string.isRequired,
};

export { UserData };


