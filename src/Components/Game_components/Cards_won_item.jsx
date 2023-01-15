import React from 'react';

const CardsWonItem = (props) => {
    return (
        <div style={{border: "solid", width: 100}}>
            {props.num} {props.school} {props.points}
        </div>
    );
};

export default CardsWonItem;