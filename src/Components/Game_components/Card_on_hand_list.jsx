import React from 'react';
import Card_on_hand_item from "./Card_on_hand_item";

const CardOnHandList = (props) => {
    return (
        <div>
            {props.cards.map((c) =>
                <Card_on_hand_item card={c} key={c.id_card} idc={c.id_card} num={c.number} school={c.school} points={c.points} idp={props.idp} tk={props.tk}/>
            )}
        </div>
    );
};

export default CardOnHandList;