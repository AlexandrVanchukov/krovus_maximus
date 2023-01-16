import React from 'react';

const LastCombatItem = (props) => {
    return (

        <div style={{border: "solid", display: "inline-block", padding: 10}}>
            <div>{props.lg}</div>

            <div style={{backgroundColor: "aliceblue"}}>{props.num}</div>
            <div style={{backgroundColor: "aliceblue"}}>{props.school}</div>
            <div style={{backgroundColor: "yellow"}}>{props.points}</div>
        </div>
    );
};

export default LastCombatItem;