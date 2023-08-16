import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Main from "./components/Main"
import styled from "styled-components"
function App() {


  return (<>

  <Container>
<div className="App">
     <Main/>
    </div>

  </Container>
  </>
    
  );
}

const Container = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@10..48,200&family=Inter&family=Josefin+Sans:wght@100;200;400;500;600;700&family=Poppins:ital,wght@0,100;0,200;0,300;0,500;0,600;0,700;1,100;1,300;1,400;1,500;1,900&family=Satisfy&display=swap');
*{
  font-family: 'Inter', sans-serif;
}









`

export default App;
