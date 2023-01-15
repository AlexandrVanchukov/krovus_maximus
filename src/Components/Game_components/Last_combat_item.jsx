import React from 'react';

const LastCombatItem = (props) => {
    return (

        <div style={{border: "solid", width: 150}}>
            {props.seat} {props.lg} {props.num} {props.school} {props.points}
        </div>
    );
};

export default LastCombatItem;