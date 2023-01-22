import React from 'react';
import Input from "./UI/Input/Input";
import Button from "./UI/Button/Button";
import {useState} from "react";

const SignUpForm = ({sign_in_f,form,setForm,text}) =>{
    return (
        <form style={{width: 300, margin: 20}}>
            <Input
                value = {form.login}
                onChange={e => setForm({...form,login:e.target.value})}
                type = "text"
                placeholder="Логин"
            />
            <Input
                value = {form.password}
                onChange={e => setForm({...form,password: e.target.value})}
                type = "text"
                placeholder="Пароль"
            />
            <Button onClick={sign_in_f}>{text}</Button>
        </form>
    );
};

export default SignUpForm;