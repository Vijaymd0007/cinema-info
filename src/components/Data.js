

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from "styled-components"

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
        <ul>
          {data.map(item => (
            <li key={item.imdbID}>
              <strong>Title:</strong> {item.Title}
              <br />
              <strong>Year:</strong> {item.Year}
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}

const Container = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@10..48,200&family=Inter&family=Josefin+Sans:wght@100;200;400;500;600;700&family=Poppins:ital,wght@0,100;0,200;0,300;0,500;0,600;0,700;1,100;1,300;1,400;1,500;1,900&family=Satisfy&display=swap');
*{
  font-family: 'Inter', sans-serif;
}

.app h1{
}



`


export default Data;

