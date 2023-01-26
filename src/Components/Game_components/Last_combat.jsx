import React from 'react';
import Cards_won_item from "./Cards_won_item";
import Last_combat_item from "./Last_combat_item";

const LastCombat = (props) => {
    return (
        <div style={{margin: 20}}>
            <div>Last Combat</div>
            {props.cards.map((c) =>
                <Last_combat_item card={c} key={c.id_card} idc={c.id_card} num={c.number} school={c.school} points={c.points} seat={c.seat} lg={c.login_user}/>
            )}
        </div>
    );
};

export default LastCombat;