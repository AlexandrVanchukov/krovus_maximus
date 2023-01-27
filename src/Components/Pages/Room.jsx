import React, {useState} from 'react';

import Players_list from "../Game_components/Players_list";
import Button from "../UI/Button/Button";
import Card_on_hand_list from "../Game_components/Card_on_hand_list";
import Timer from "../Game_components/Timer";
import Cards_list from "../Game_components/Cards_list";
import Cards_won_item from "../Game_components/Cards_won_item";
import Cards_won_list from "../Game_components/Cards_won_list";
import Last_combat from "../Game_components/Last_combat";
import Points from "../Game_components/Points";
import Last_round from "../Game_components/Last_round";

const Room = (props) => {
    const [players,SetPlayers] = useState([]);
    const [cards_on_hand,setCards_on_hand] = useState([]);
    const [cards_on_table,setCards_on_table] = useState([]);
    const [cards_won,setCards_won] = useState([]);
    const [timer,SetTimer] = useState("");
    const [turn_login,SetTurn_login] = useState('');
    const [strongestSchool,SetStrongestSchool] = useState('');
    const [lastCombat,SetLastCombat] = useState([]);
    const [points,SetPoints] = useState([]);
    const [lastRound,SetLastRound] = useState([]);
    const [winner,SetWinner] = useState('');

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
                SetPlayers(resp.RESULTS[0]);
                setCards_on_hand(resp.RESULTS[1]);
                if(resp.RESULTS[2][0]){
                    SetStrongestSchool(resp.RESULTS[2][0].strongest_school);
                }
                setCards_on_table(resp.RESULTS[3]);
                if(resp.RESULTS[4][0]){
                    SetTimer(resp.RESULTS[4][0].Time_left);
                    SetTurn_login(resp.RESULTS[4][0].login_user);
                }
                showGame(resp.RESULTS[4][0]);
                showWinner(resp.RESULTS[9][0]);
                setCards_won(resp.RESULTS[5]);
                SetLastCombat(resp.RESULTS[6]);
                SetPoints(resp.RESULTS[7]);
                SetLastRound(resp.RESULTS[8]);
                if(resp.RESULTS[9][0]){
                    SetWinner(resp.RESULTS[9][0].Winner);
                }
            }
        }
        else {
            alert("Ошибка сети. Проверьте интернет соединение") ;
        }
    }

    function showGame(time){
        if(time){
            document.getElementById('idd').style.display = "block";
            document.getElementById('space').style.display = "none";
            document.getElementById('info').style.display = "block";
            document.getElementById('timer').style.display = "block";
            document.getElementById('startButton').style.display = "none";
        }
        else
        {
            document.getElementById('idd').style.display = 'none';
            document.getElementById('info').style.display = "none";
            document.getElementById('timer').style.display = "none";
            document.getElementById('startButton').style.display = "block";
        }
    }
    
    function showWinner(win) {
        if(win){
            document.getElementById('winner').style.display = "block";
            document.getElementById('space').style.display = "block";
            document.getElementById('info').style.display = "block";
        }
        else
        {
            document.getElementById('winner').style.display = 'none';
        }
    }

    return (
        <div>
            <h1 style={{margin: 20}}>Room {props.idg}</h1>
            <div style={{margin: "0px 20px",position: "absolute"}}>
                <div id={'winner'}>Winner: {winner}</div>
                <Players_list players={players}/>
                <Button id={'startButton'} onClick={start_game}>Start</Button>
            </div>
            <div id={'timer'} style={{display: "block"}}>
                <Timer timer={timer} lg={turn_login} strongestSchool={strongestSchool}/>
            </div>
            <div id={'idd'}>
                <Cards_list cards={cards_on_table}/>
                <div style={{height: 100}}></div>
                <Card_on_hand_list cards={cards_on_hand} idp={props.idp} tk={props.tk}/>
                <Cards_won_list cards={cards_won}/>
                {/*<Last_round rounds={lastRound}/>*/}
            </div>
            <div id={"info"}>
                <div id={"space"} style={{height:160}}></div>
                <Last_combat cards={lastCombat} />
                <Points points={points}/>
            </div>


        </div>
    );
};

export default Room;