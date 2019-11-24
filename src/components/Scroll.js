import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '1px solid black', height: '600px'}}>
            {/* robots all the children of scroll as scroll is wrapped around the card list in app.js */}
            {props.children}
        </div>
    );
};

export default Scroll;