import React from 'react';
import Button from "../UI/Button/Button";

const PlayerItem = (props) => {
    return (
            <tr style={{height: 30.8}}>
                <td>
                    {props.seat}
                </td>
                <td>
                    {props.lg}
                </td>
                <td>
                    {props.wins}
                </td>
            </tr>
    );
};

export default PlayerItem;