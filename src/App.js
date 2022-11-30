import React from 'react';
import ReactDOM from 'react-dom/client';


function App() {
  
  update_game();
  function update_game(){
    let xhr = new XMLHttpRequest();
    xhr.open("POST","https://sql.lavro.ru/call.php");
    let fd = new FormData();
    fd.append("pname","update_game");
    fd.append("db","284192");
    fd.append("p1","1803212990");
    fd.append("p2","22");
  }

  return (
    <div className="App">

    </div>
  );
}

export default App;
