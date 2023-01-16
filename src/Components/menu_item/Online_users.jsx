import React from 'react';
import Card_on_hand_item from "../Game_components/Card_on_hand_item";
import Online_user_item from "./Online_user_item";

const OnlineUsers = (props) => {
    return (
        <div style={{display: "inline-block", verticalAlign:"top", float: "right"}}>
            <div>Online users:</div>
            {props.users.map((u) =>
                <Online_user_item card={u} key={u.online_users} user={u.online_users}/>
            )}
        </div>
    );
};

export default OnlineUsers;