import React from 'react';
import Button from "../UI/Button/Button";

const CardsItem = (props) => {
    return (
        <div>
            <Button style={{width: 100,height: 150,border: "solid",display: "inline-block", color: "black"}}>
                <div style={{backgroundColor: "aliceblue"}}>{props.num}</div>
                <div style={{backgroundColor: "aliceblue"}}>{props.school}</div>
                <div style={{backgroundColor: "yellow"}}>{props.points}</div>
            </Button>
        </div>
    );
};

export default CardsItem;