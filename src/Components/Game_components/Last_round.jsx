import React from 'react';
import Points_item from "./Points_item";
import Last_round from "./Last_round";
import Last_round_item from "./Last_round_item";

const LastRound = (props) => {
    return (
        <div>
            Карты в послежнем раунде
            {props.rounds.map((r) =>
                <Last_round_item round={r} key={r.id_card} lg={r.login_user} num={r.number} school={r.school} points={r.points}/>
            )}
        </div>
    );
};

export default LastRound;