import React from "react"
import {
    Link
  } from "react-router-dom";


import { UserContext } from "./storeUsers";
import { useContext } from "react";
  

export default function Card(props) {
    const { userDetails,setDetails} = useContext(UserContext)
    
    return (
        <div className="card">
            <Link to= {`/users/`} >
                <img src={'https://cdn3.iconfinder.com/data/icons/black-easy/512/538642-user_512x512.png'} onClick={ () => setDetails(props.data)}  />
            </Link>
            <div className="card--stats">
                <span>
                {props.data.name.first + ' ' + props.data.name.last }
                </span>
            </div>
        </div>
    )
}
