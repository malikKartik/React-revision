import React from 'react'
import './person.css'
const person = (props)=>{
return (
    <div className="person">
        <p>My name is {props.name} and I am {props.age} years old.</p>
        <p>{props.children}</p>
    </div>
)
}

export default person