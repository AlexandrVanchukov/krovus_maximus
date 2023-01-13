import React from 'react';
import Input from "./UI/Input/Input";
import Button from "./UI/Button/Button";

const CreateRoom = ({create_room_f,time,setTime,text}) => {
    return (
        <form style={{width: 300},{display: "inline-block"}}>
            <Input
                value = {time}
                onChange={e => setTime(e.target.value)}
                type = "text"
                placeholder="Время хода"
            />
            <Button onClick={create_room_f}>{text}</Button>
        </form>
    );
};

export default CreateRoom;