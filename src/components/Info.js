import React from 'react';
import { useParams } from 'react-router-dom';
import styled from "styled-components"
import { useState, useEffect } from 'react';
import axios from "axios"

function Info() {

    const { itemId } = useParams();
    const [item, setItem] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://www.omdbapi.com/?i=${itemId}&apikey=a0d5cc0b`);
          setItem(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, [itemId]);
    console.log(item)
  
  if (!item) {
    return <p>Loading...</p>;
  }
  return (
    <Container>
    <div className="App row">

    <div className="card-container col-4">
      
          <div >
            <img className="movie-card" src={item.Poster} alt={item.Title} />
            
          </div>
          <h1>Title: {item.Title}</h1>

        <h3>Genre: {item.Genre}</h3>
        <h3>Year: {item.Year}</h3>
        <h3>ImdbRating: {item.imdbRating} / 10</h3>
        
      
    </div>
    <div className='col-8 informations' >

        <p className='plot' >Plot: " {item.Plot} "</p>
        <p>Language: {item.language?item.language:"Not Available"}</p>
         <p className='plot'>Actors: {item.Actors}</p>
         
         <p>Rated: {item.Rated}</p>
        <p>Released: {item.Released}</p>
        <p>Runtime: {item.Runtime}</p>
        <p>Director: {item.Director}</p>
        <p className='plot'>Awards: {item.Awards}</p>
        
        <p>Boxoffice: {item.Boxoffice}</p>
        
        <p>BoxCountryoffice: {item.BoxCountryoffice}</p>
       
        <p>Type: {item.type?item.type:"Not Available"}</p>
        <p  className='plot'>Ratings:</p>
<ul>
  {item.Ratings.map((rating, index) => (
    <li className='plot' key={index}>
      Source: {rating.Source}, Value: {rating.Value}
    </li>
  ))}
</ul>
        <p className='plot'>Writer: {item.Writer}</p>
        

    </div>
  </div>
  </Container>
  );
}

export default Info;


const Container = styled.div`

height: 100vh;
overflow-x: hidden;

.movie-card{
  width: 350px;
  height:500px;
  border:5px solid white ;
  border-radius: 2px;
  transition: 0.8s ease;


}


.movie-card img{
  width: 350px;
  height:500px;

}
.movie-card:hover{
  border:5px solid #89fc00;

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
.informations{
    color:white;
    

}
.informations{
    color:white;
    padding: 50px 20px 20px 20px;
    

}
.informations p:first-child{
    font-weight: bold;
    

}
.card-container h1{
    color:white ;


}
.card-container h3{
    color:white ;


}

@media (max-width: 768px) {
    .App{
        display: flex;
        flex-direction: column;
        white-space: nowrap;
    }

    .movie-card{
  width: 250px;
  height:400px;
  border:5px solid white ;
  border-radius: 2px;
  transition: 0.8s ease;
  margin-left: 22px;


}


.movie-card img{
  width: 250px;
  height:400px;
  margin-bottom:0px ;
  

}

.card-container h1{
  padding:0px;
}

.card-container div{
  width: 250px;
  height:400px;
  }

.plot{
    width:150%;
    white-space: normal;
}


}

`;
