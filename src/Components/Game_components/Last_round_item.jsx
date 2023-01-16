import React from 'react';

const LastRoundItem = (props) => {
    return (
        <div>
            {props.lg} {props.num} {props.school} {props.points}
        </div>
    );
};

export default LastRoundItem;