import React, { useState } from 'react';
import styled from "styled-components";
import Data from './Data';
import backgroundImage from '../images/cinema.jpg';


function Main() {
  const [value, setValue] = useState('');

  const handleSubmit = () => {
    console.log("Performing search for:", value);
  };

  return (<>
 
    <Container> 
      <h1>Cinema Info</h1>
      <div className="search-container">
       
        <input 
          className='serchInput'
          type="text" 
          placeholder='Enter the movie' 
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />

        <button 
          type='button'
          onClick={handleSubmit}
          
        >
          SEARCH
        </button>
      </div>

     
    </Container>
     <Data search={value} />
     </>
  );
}




const Container = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@10..48,200&family=Inter&family=Josefin+Sans:wght@100;200;400;500;600;700&family=Poppins:ital,wght@0,100;0,200;0,300;0,500;0,600;0,700;1,100;1,300;1,400;1,500;1,900&family=Satisfy&display=swap');
*{
  font-family: 'Inter', sans-serif;
  
}

position: relative;

 h1{
  color:#89fc00;
  position:absolute;
  top:10px;
  right:50%%;
  font-size: 70px;
  filter: drop-shadow(10px 10px 50px white);

}
display:flex;
justify-content: center;
align-items: center;
height:50vh;

.serchInput{
  
  padding:20px 90px;
  border-radius:5px;
  border:5px solid white;
  font-size: 20px;
  font-family: 'Bricolage Grotesque', sans-serif !important;
  font-weight: bold;
  color:white;
  
 background-color: black;
  
}
.serchInput:focus{
  
  
  border:5px solid #89fc00;
  outline: #89fc00;
 background-color: black;
}

button{
  margin:0 30px;

  background-color:black !important;
  padding:20px 50px;
  border:5px solid #89fc00;
  border-radius: 20px;
  color:#89fc00;

}
button{
  margin:0 30px;

  background-color: white;
  padding:20px 50px;
  border-radius: 20px;
  color:

}

@media (max-width: 768px) {
  .search-container{
    display: flex;
    flex-direction: column;
    gap:30px
  }

  .serchInput{
  
  padding:20px 55px;
  border-radius:5px;
  border:5px solid white;
  font-size: 10px;
  font-family: 'Bricolage Grotesque', sans-serif !important;
  font-weight: bold;
  color:white;
  
  
 background-color: black;
  
}
}

`

export default Main;
