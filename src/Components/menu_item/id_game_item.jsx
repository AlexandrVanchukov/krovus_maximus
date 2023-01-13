import React from 'react';
import Button from "../UI/Button/Button";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

const Id_game_item = (props) => {

    function join(){
        let xhr = new XMLHttpRequest();
        xhr.open("POST","https://sql.lavro.ru/call.php");
        let fd = new FormData();
        fd.append("pname","join_to_game");
        fd.append("db","284192");
        fd.append("p1", props.tk.tk);
        fd.append("p2", props.room.id_game);
        xhr.onload = join_report;
        xhr.send(fd);
    }

    function join_report(e){
        if (e.target.status === 200){
            let resp = JSON.parse(e.target.response);
            if(!resp.RESULTS){
                alert("Произошла ошибка при обращении к базе данных");
            }
            else{
                if(resp.RESULTS[0].error){
                    alert(resp.RESULTS[0].rus_error[0]);
                }
                else {
                    console.log(resp.RESULTS);
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
                <Button onClick={join}><Link to="/Room">join </Link></Button>
            </td>
        </tr>
    );
};

export default Id_game_item;