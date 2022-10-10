import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import Card from "./Card"



// Row component
export default function Row({  fetchURL }) {
  /* Creating a state (short term memory) */
  const [users, setUsers] = useState([]);
  //   Pulling information from API when the pages loads
  useEffect(() => {
    //   Running async call
    async function fetchData() {
      // Waiting for the promise to come back with results, fetchURL(outside the code block)
      const request = await axios.get(fetchURL);
      setUsers(request.data);
      console.log(request.data)
      return request;
    }
    // if [empty], run once when the row loads, and dont run again
    fetchData();
  }, [fetchURL]);


  

  return (





    <div className="row">
      <h2></h2>

      <div className="row__posters">
        {users.map((user) => (

          
          
            <Card key={user._id} data={user}/>


 
        ))}
     
      </div>

    
    </div>
   



  );
}


