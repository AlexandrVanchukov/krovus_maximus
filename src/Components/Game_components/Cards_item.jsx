import React from 'react';
import Button from "../UI/Button/Button";

const CardsItem = (props) => {
    return (
        <div style={{display: "inline-block"}}>
            <Button style={{width: "150px",borderColor: "white",display: "inline-block", color: "black", padding: 0}}>
                {/*<div style={{backgroundColor: "aliceblue"}}>{props.num}</div>*/}
                {/*<div style={{backgroundColor: "aliceblue"}}>{props.school}</div>*/}
                {/*<div style={{backgroundColor: "yellow"}}>{props.points}</div>*/}
                <img src={process.env.PUBLIC_URL + "/img/" + props.idc + ".jpg"} style={{width:"100%"}}/>
            </Button>
        </div>
    );
};

export default CardsItem;