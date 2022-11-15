import React from 'react';

const PageHeader = (props) => {
    return (
        <>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <h1>{props.title}</h1>
                {props.children}
            </div>

            <br/>
            <br/>
        </>
    );
}

export {PageHeader};