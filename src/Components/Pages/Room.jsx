import React, {useState} from 'react';

import Players_list from "../Game_components/Players_list";
import Button from "../UI/Button/Button";

const Room = (props) => {
    const [players,SetPlayers] = useState([]);

    if(props.tk != ''){
        update_game();
    }
    function start_game(){
        let xhr = new XMLHttpRequest();
        xhr.open("POST","https://sql.lavro.ru/call.php");
        let fd = new FormData();
        fd.append("pname","start_game");
        fd.append("db","284192");
        fd.append("p1",props.tk);
        fd.append("p2",props.idg);
        fd.append("format","rows");
        xhr.onload = start_game_temp;
        xhr.send(fd);
    }


    function start_game_temp(e){
        if (e.target.status === 200){
            let resp = JSON.parse(e.target.response);
            console.log(resp.RESULTS);
            if(!resp.RESULTS){
                alert("Произошла ошибка при обращении к базе данных");
            }
            else{
                if(resp.RESULTS[0][0].error){
                    if(resp.RESULTS[0][0].error=="Authorization Error"){
                        alert(resp.RESULTS[0][0].rus_error);
                    }
                    alert(resp.RESULTS[0][0].rus_error);
                }

            }

        }
        else {
            alert("Ошибка сети. Проверьте интернет соединение") ;
        }
    }

    function update_game(){
        let xhr = new XMLHttpRequest();
        xhr.open("POST","https://sql.lavro.ru/call.php");
        let fd = new FormData();
        fd.append("pname","update_game");
        fd.append("db","284192");
        fd.append("p1",props.tk);
        fd.append("p2",props.idp);
        fd.append("format","rows");
        xhr.onload = update_game_temp;
        xhr.send(fd);
    }


    function update_game_temp(e){
        if (e.target.status === 200){
            let resp = JSON.parse(e.target.response);
            console.log(resp.RESULTS);
            if(!resp.RESULTS){
                console.log(resp)
                alert("Произошла ошибка при обращении к базе данных");
            }
            else{
                if(resp.RESULTS[0][0].error){
                    if(resp.RESULTS[0][0].error=="Authorization Error"){
                        alert(resp.RESULTS[0][0].rus_error);
                    }
                    alert(resp.RESULTS[0][0].rus_error);
                }
                SetPlayers(resp.RESULTS[0])
            }

        }
        else {
            alert("Ошибка сети. Проверьте интернет соединение") ;
        }
    }

    return (
        <div>
            <h1>Room {props.idg} {props.idp}</h1>
            <Players_list players={players}/>
            <Button onClick={start_game}>Start</Button>
        </div>
    );
};

export default Room;