import React, {useEffect, useRef, useState} from 'react';
import Sign_up from "./Sign_up";
import Button from "../UI/Button/Button";
import Rooms_list from "../Rooms_list";
import Sign_up_form from "../Sign_in_form";
import Create_Room from "../Create_Room";
import Online_users from "../menu_item/Online_users";

const RoomList = (props) => {


    if(props.tk != ''){
        update_menu();
    }
    const [rooms,SetRoom] = useState([]);
    const [users,SetUsers] = useState([]);
    const [time,setTime] = useState('');

    function create(){
        let xhr = new XMLHttpRequest();
        xhr.open("POST","https://sql.lavro.ru/call.php");
        let fd = new FormData();
        fd.append("pname","new_game");
        fd.append("db","284192");
        fd.append("p1",props.tk);
        fd.append("p2",time);
        fd.append("format","rows");
        xhr.onload = create_temp;
        xhr.send(fd);
    }

    function create_temp(e){
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

    function update_menu(){
        let xhr = new XMLHttpRequest();
        xhr.open("POST","https://sql.lavro.ru/call.php");
        let fd = new FormData();
        fd.append("pname","update_menu");
        fd.append("db","284192");
        fd.append("p1",props.tk);
        fd.append("format","rows");
        xhr.onload = update_menu_temp;
        xhr.send(fd);
      }


      function update_menu_temp(e){
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
            SetRoom(resp.RESULTS[1]);
            SetUsers(resp.RESULTS[2]);
          }

        }
        else {
          alert("Ошибка сети. Проверьте интернет соединение") ;
        }
      }


    return (
        <div style={{margin: 20}}>
            <div>
                <h1>Room list</h1>
                <Create_Room create_room_f={create} time={time} setTime={setTime} text={"Создать игру"}/>
            </div>

            <Rooms_list rooms={rooms} tk={props.tk} setId={props.setId} setIdPl={props.setIdPl}/>
            <Online_users users={users}/>

        </div>
    );
};

export default RoomList;