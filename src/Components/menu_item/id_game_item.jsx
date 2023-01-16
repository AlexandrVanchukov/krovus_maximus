import React from 'react';
import Button from "../UI/Button/Button";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Sign_up from "../Pages/Sign_up";
import Sign_up_reg from "../Pages/Sign_up_reg";
import Room_list from "../Pages/Room_list";
import Room from "../Pages/Room";

const Id_game_item = (props) => {

    function join(){
        props.setId(props.room.id_game);
        let xhr = new XMLHttpRequest();
        xhr.open("POST","https://sql.lavro.ru/call.php");
        let fd = new FormData();
        fd.append("pname","join_to_game");
        fd.append("db","284192");
        fd.append("p1", props.tk);
        fd.append("p2", props.room.id_game);
        xhr.onload = join_report;
        xhr.send(fd);
    }

    function join_report(e){
        if (e.target.status === 200){
            let resp = JSON.parse(e.target.response);
            if(!resp.RESULTS){
                console.log(props.tk);
                alert("Произошла ошибка при обращении к базе данных");
            }
            else{
                if(resp.RESULTS[0].error){
                    if(resp.RESULTS[0].rus_error[0] === "Вы уже в этой игре"){
                        alert("Вы успешно присоеденились к игре! Перейдите на страницу Room");
                        props.setIdPl(resp.RESULTS[1].id_player[0]);
                    }
                    else {
                        alert(resp.RESULTS[0].rus_error[0]);
                    }
                }
                else {
                    console.log(resp.RESULTS);
                    props.setIdPl(resp.RESULTS[1].id_player[0]);
                }
            }
        }
        else {
            alert("Ошибка сети. Проверьте интернет соединение") ;
        }
    }

    return (

            <tr style={{height: 30.8}}>
                <td>
                    {props.room.id_game}
                </td>
                <td>
                    {props.room.login_admin}
                </td>
                <td>
                    {props.room.move_time}
                </td>
                <td>
                    {props.room.Players_in_game}
                </td>
                <td>
                    <Button onClick={join}>join</Button>
                </td>
            </tr>
    );
};

export default Id_game_item;