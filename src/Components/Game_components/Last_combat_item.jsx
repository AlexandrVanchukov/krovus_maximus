import React from 'react';

const LastCombatItem = (props) => {
    return (

        <div style={{display: "inline-block"}}>
            <div style={{textAlign:"center"}}>{props.lg}</div>
            <img src={process.env.PUBLIC_URL + "/img/" + props.idc + ".jpg"} style={{width:"150px"}}/>
        </div>
    );
};

export default LastCombatItem;