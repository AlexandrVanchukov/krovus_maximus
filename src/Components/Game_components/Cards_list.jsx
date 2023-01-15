import React from 'react';
import Card_on_hand_item from "./Card_on_hand_item";
import Cards_item from "./Cards_item";

const CardsList = (props) => {
    return (
        <div>
            {props.cards.map((c) =>
                <Cards_item card={c} key={c.id_card} idc={c.id_card} num={c.number} school={c.school} points={c.points}/>
            )}
        </div>
    );
};

export default CardsList;