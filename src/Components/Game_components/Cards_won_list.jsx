import React from 'react';
import Card_on_hand_item from "./Card_on_hand_item";
import Cards_won_item from "./Cards_won_item";

const CardsWonList = (props) => {
    return (
        <div style={{margin: 20}}>
            <div>Won cards</div>
            {props.cards.map((c) =>
                <Cards_won_item card={c} key={c.id_card} idc={c.id_card} num={c.number} school={c.school} points={c.points}/>
            )}
        </div>
    );
};

export default CardsWonList;