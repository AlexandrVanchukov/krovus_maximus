import React from 'react';
import Id_game_item from "../menu_item/id_game_item";
import Player_item from "./Player_item";

const PlayersList = (props) => {
    return (
        <table style={{display: "inline-block"}}>
            <thead>
            <tr>
                <td>seat</td>
                <td>login</td>
                <td>Wins</td>
            </tr>
            </thead>
            <tbody>
                {props.players.map((p) =>
                    <Player_item room={p} key={p.login_user} seat={p.seat} lg={p.login_user} wins={p.wins}/>
                )}
            </tbody>
        </table>
    );
};

export default PlayersList;