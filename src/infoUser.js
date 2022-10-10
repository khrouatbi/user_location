import React from "react"
import ShowUserOnMap from "./showUserOnMap"
import "./infoUser.css"
import { UserContext } from "./storeUsers"
import { useContext } from "react"


export default function InfoUser() {
    const { userDetails,setDetails} = useContext(UserContext)
    return (
        <div className="info">
            <div className="title">

                User Information:
            </div>
            <div className="card--name">
                <span>
                    {"Full Name: "+userDetails.name.first + ' ' +userDetails.name.last}
                </span>
            </div>

            <div className="card--picture">
                <span>

                    <img src= {userDetails.picture}></img> 
                </span>
            </div>


            <div className="card--email">
                <span>
                    {"Email: "+ userDetails.email }

                </span>
            </div>

            <div className="card--id">
                <span>
                    {"ID: "+ userDetails._id }
                </span>
            </div>

            {"Current Location: "}
            <ShowUserOnMap/>

        </div>
    )
}