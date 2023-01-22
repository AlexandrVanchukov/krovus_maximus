import React from 'react';

const Timer = (props) => {
    return (
        <div style={{width: 150,margin: "auto", display: "block"}}>
            <div>Time left:{props.timer} </div>
            <div>Turn:{props.lg} </div>
            <div>Strongest School:{props.strongestSchool}</div>
        </div>
    );
};

export default Timer;