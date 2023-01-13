import React, {useEffect, useRef, useState} from 'react';
import Sign_up from "./Sign_up";
import Button from "../UI/Button/Button";
import Rooms_list from "../Rooms_list";
import Sign_up_form from "../Sign_in_form";
import Create_Room from "../Create_Room";

const RoomList = (props) => {
    if(props.tk != ''){
        update_menu();
    }
    const [rooms,SetRoom] = useState([]);
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
                if(resp.RESULTS[0].ERROR){
                    if(resp.RESULTS[0].ERROR[0]=="Authorization Error"){
                        alert(resp.RESULTS[0].rus_error[0]);
                    }
                    alert(resp.RESULTS[0].rus_error[0]);
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
            if(resp.RESULTS[0].ERROR){
              if(resp.RESULTS[0].ERROR[0]=="Authorization Error"){
                alert(resp.RESULTS[0].rus_error[0]);
              }
              alert(resp.RESULTS[0].rus_error[0]);
            }
            SetRoom(resp.RESULTS[1]);
          }

        }
        else {
          alert("Ошибка сети. Проверьте интернет соединение") ;
        }
      }


    return (
        <div>
            <h1>Room list</h1>
            <Rooms_list rooms={rooms} tk={props.tk}/>
            <Create_Room create_room_f={create} time={time} setTime={setTime} text={"Создать игру"}/>
        </div>
    );
};

export default RoomList;