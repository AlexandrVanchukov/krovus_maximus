import React, {useState,useEffect} from "react";
import ReactDOM from 'react-dom/client';
import Sign_up_form from "./Components/Sign_in_form";
import Rooms_list from "./Components/Rooms_list";
import Button from "./Components/UI/Button/Button";
import Sign_in from "./Components/Pages/Sign_up";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Room_list from "./Components/Pages/Room_list";
import Sign_up from "./Components/Pages/Sign_up";
import Sign_up_reg from "./Components/Pages/Sign_up_reg";
import Room from "./Components/Pages/Room";
import Game from "./Components/Pages/Game";

function App() {
  const [tk,setTk] = useState('');
  const [rooms,SetRoom] = useState([]);
  const [idg,setIdg] = useState('');
  const [idp,setIdp] = useState('');
  function createTk(newTk){
    setTk(newTk);
  }
  function setIdGame(newIdg){
    setIdg(newIdg);
  }
  function setIdPlayer(newIdp){
    setIdp(newIdp);
  }


  return (
      <Router>
        <div className="App">
          <ul className="App-header">
            <li>
              <Link to="/sign_in">Sign in</Link>
            </li>
            <li>
              <Link to="/sign_up">Sign up</Link>
            </li>
            <li>
              <Link to="/List_room">Room list</Link>
            </li>
            <li>
              <Link to="/room">Room</Link>
            </li>
            <li>
              <Link to="/game">Game</Link>
            </li>
          </ul>
          <Routes>
            <Route exact path='/sign_in' element={< Sign_up create={createTk}/>}></Route>
            <Route exact path='/sign_up' element={< Sign_up_reg create={createTk}/>}></Route>
            <Route exact path='/List_room' element={< Room_list tk={tk} setId={setIdGame} setIdPl={setIdPlayer}/>}></Route>
            <Route exact path='/room' element={<Room tk={tk} idg={idg} idp={idp}/>}></Route>
            <Route exact path='/game' element={<Game/>}></Route>
          </Routes>
          {/*<h1>Room list</h1>
          <Rooms_list rooms={rooms} tk={tk}/>*/}
        </div>
      </Router>
    /*<div className="App">
        <Sign_up_form sign_in_f={sign_in} form={form} setForm={setForm}/>
        <Rooms_list roomList_id={roomList_id}/>
    </div>*/
  );
}

export default App;
