import React from 'react';

const CardsWonItem = (props) => {
    return (
        <div style={{ width: "40px",display:"inline-block"}}>
            <img src={process.env.PUBLIC_URL + "/img/" + props.idc + ".jpg"} style={{width:"150px"}}/>
        </div>
    );
};

export default CardsWonItem;