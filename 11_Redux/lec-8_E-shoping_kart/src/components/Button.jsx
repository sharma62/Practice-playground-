import React from 'react';

const Button = ({ onClick, title,bgColor     }) => {
    if(bgColor === undefined){
        bgColor = 'blue'
    }
    return (

        <button onClick={onClick} className={`bg-${bgColor}-500 hover:bg-${bgColor}-600 text-white font-bold py-1 px-3 rounded cursor-pointer`}>{title}</button>

    );
}

export default Button;