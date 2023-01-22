import React, {useState} from 'react';
import Sign_up_form from "../Sign_in_form";
import {Link, Route, Routes} from "react-router-dom";
import Sign_up_reg from "./Sign_up_reg";
import Room_list from "./Room_list";

const SignUp = ({create}) => {
    const [form, setForm] = useState({login: "", password: ""});
    let tk = 122;

    function sign_in(){
        let xhr = new XMLHttpRequest();
        xhr.open("POST","https://sql.lavro.ru/call.php");
        let fd = new FormData();
        fd.append("pname","sign_in");
        fd.append("db","284192");
        fd.append("p1",form.login);
        fd.append("p2",form.password);
        xhr.onload = sign_in_report;
        xhr.send(fd);
    }

    function sign_in_report(e){
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
                    tk = resp.RESULTS[0].token;
                    create(tk);
                    console.log(resp.RESULTS);
                    console.log(tk);
                }

            }
        }
        else {
            alert("Ошибка сети. Проверьте интернет соединение") ;
        }
    }



    return (
        <div>
            <h1 style={{margin: 20}}>Sign in</h1>
            <Sign_up_form sign_in_f={sign_in} form={form} setForm={setForm} text={"Войти"}/>
        </div>
    );
};

export default SignUp;