import React from 'react';
import Button from "../UI/Button/Button";

const CardOnHandItem = (props) => {
    function move(){
        let xhr = new XMLHttpRequest();
        xhr.open("POST","https://sql.lavro.ru/call.php");
        let fd = new FormData();
        fd.append("pname","Move");
        fd.append("db","284192");
        fd.append("p1",props.tk);
        fd.append("p2",props.idp);
        fd.append("p3",props.idc);
        fd.append("format","rows");
        xhr.onload = move_temp;
        xhr.send(fd);
    }


    function move_temp(e){
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
            }

        }
        else {
            alert("Ошибка сети. Проверьте интернет соединение") ;
        }
    }
    return (
        <Button style={{width: 100,height: 150,border: "solid",display: "inline-block", color: "black"}} onClick={() => move()}>
            <div style={{backgroundColor: "aliceblue"}}>{props.num}</div>
            <div style={{backgroundColor: "aliceblue"}}>{props.school}</div>
            <div style={{backgroundColor: "yellow"}}>{props.points}</div>
        </Button>
    );
};

export default CardOnHandItem;