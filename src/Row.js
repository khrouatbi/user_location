import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import Card from "./Card"



// Row component
export default function Row({ title, fetchURL }) {
  /* Creating a movie state (short term memory) */
  const [movies, setMovies] = useState([]);
  //   Pulling information from tmdb API when the pages loads
  useEffect(() => {
    //   Running async call
    async function fetchData() {
      // Waiting for the promise to come back with movie results, fetchURL(outside the code block)
      const request = await axios.get(fetchURL);
      setMovies(request.data);
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
        {movies.map((movie) => (

          
          
            <Card key={movie._id} data={movie}/>


 
        ))}
     
      </div>

    
    </div>
   



  );
}

