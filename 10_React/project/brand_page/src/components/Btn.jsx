import React from 'react'

const Btn = ({ title ,theme}) => {
    return (
        <button className={`uppercase ${theme} px-4 py-2 rounded hover:bg-red-700`}>{title}</button>    )
}

export default Btn