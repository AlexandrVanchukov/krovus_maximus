import React from 'react';

const LastRoundItem = (props) => {
    return (
        <div style={{border: "solid", width: 150, height: 25, display: "inline-block"}}>
            {props.lg} {props.num} {props.school} {props.points}
        </div>
    );
};

export default LastRoundItem;