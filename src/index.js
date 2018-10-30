import React from 'react';
import ReactDOM from 'react-dom';

const user = {
    name: 'Andre',
    luckyNumber: luckyNumber()
};

ReactDOM.render(
    greeting( user ),
    document.getElementById('root')
);

function luckyNumber(){
    return Math.floor(Math.random() * 1000) + 1;
}

function greeting( object ){
    return <div className="container">
            <h1>Hello, { object.name }!</h1>
            <h2 className="text-muted">Your lucky number is: { object.luckyNumber }</h2>
            </div>;
}

