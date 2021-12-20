import React from 'react';
import Navbar from './components/Navbar';
import { Container, Button } from '@mui/material';

import './style.css';

export default function App() {
  return (
    <div>
      <Navbar />
      <Container >
        <h1>Todo App</h1>
        <p>Start editing to see some magic happen :)</p>
        <Button variant="contained">Hello World</Button>
  
      </Container>
    </div>
  );
}
