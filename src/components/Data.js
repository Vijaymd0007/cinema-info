import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from "styled-components"
import Info from './Info'; 
import { Link, Route } from 'react-router-dom';

function Data({ search }) {
  const [data, setData] = useState([]);
  const apiUrl = `http://www.omdbapi.com/?s=${search}&apikey=a0d5cc0b`;

  useEffect(() => {
    fetchData();
  }, [search]);

  const fetchData = async () => {
    try {
      const response = await axios.get(apiUrl);
      setData(response.data.Search || []); // Set data to an empty array if response.data.Search is undefined
      console.log(response.data.Search);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <Container>
      <div className="App">
        <h1>Your results</h1>

        <div className="card-container">
          {data.map(item => (
            <Link style={{ textDecoration: 'none', color: 'white' }} key={item.imdbID} to={`/info/${item.imdbID}`}>
              <div className="movie">
                <img className="movie-card" src={item.Poster} alt={item.Title} />
                <p >Title: {item.Title}</p>
                <p > Year: {item.Year}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@10..48,200&family=Inter&family=Josefin+Sans:wght@100;200;400;500;600;700&family=Poppins:ital,wght@0,100;0,200;0,300;0,500;0,600;0,700;1,100;1,300;1,400;1,500;1,900&family=Satisfy&display=swap');
*{
  font-family: 'Inter', sans-serif;
  box-sizing: border-box;
  background-color: #0c0f0a;
}

.App{
  padding-left: 20px;
}

.movie-card{
  width: 250px;
  height:400px;
  border:5px solid white ;
  border-radius: 2px;
  transition: 0.8s ease;

}
.movie-card:hover{
  border:5px solid #89fc00;

}
.movie-card img{
  width: 250px;
  height:400px;

}

.App h1{
  color:white;
  opacity: 0.5;
}


.card-container{
  display: flex;
  gap:30px;
  flex-wrap: wrap;
  padding:40px;
}

.card-container div{
  width: 250px;
  height:500px;
  }
.card-container p{
  color:white;
  }
.card-container p:hover{
  color:#89fc00;
  }
  .movie p{
    padding-top: 5px;
    

  }

@media (max-width:720px){
  .App h1{
  margin-left: 20px;
}
}



`


export default Data;

