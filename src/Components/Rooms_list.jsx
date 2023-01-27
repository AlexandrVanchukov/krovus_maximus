import React, {useState} from 'react';
import Button from "./UI/Button/Button";
import Id_game_item from "./menu_item/id_game_item";

import room from "./Pages/Room";


const RoomsList = (props) => {
    return (
            <table style={{display: "inline-block", textAlign:"center"}}>
                <thead>
                <tr>
                    <td>Game_id</td>
                    <td>Admin</td>
                    <td>Move time</td>
                    <td>In game</td>
                </tr>
                </thead>
                <tbody>
                {props.rooms.map((r) =>
                    <Id_game_item room={r} key={r.id_game} tk={props.tk} setId={props.setId} setIdPl={props.setIdPl}/>
                )}
                </tbody>
            </table>
    );
};

export default RoomsList;