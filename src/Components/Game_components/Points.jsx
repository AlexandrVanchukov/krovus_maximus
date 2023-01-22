import React from 'react';
import Card_on_hand_item from "./Card_on_hand_item";
import Points_item from "./Points_item";

const Points = (props) => {
    return (
        <div style={{margin: 20}}>
            <span>Last round points</span>
            {props.points.map((p) =>
                <Points_item point={p} key={p.login_user} lg={p.login_user} p={p.points}/>
            )}
        </div>
    );
};

export default Points;