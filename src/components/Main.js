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


display:flex;
justify-content: center;
align-items: center;
height:50vh;

.serchInput{
  
  padding:20px 90px;
  border-radius:20px;
  font-size: 20px;
  font-family: 'Bricolage Grotesque', sans-serif !important;
  font-weight: bold;
  
}
button{
  margin:0 30px;

  background-color: white;
  padding:20px 50px;
  border-radius: 20px;
  color:

}








`

export default Main;
