import React from 'react';

import "../style/global.css"
import Typography from "@mui/material/Typography"
import { Container } from '@mui/material';
import { NameGenerator } from './NameGenerator';
import { NameDatasetProvider } from '../contexts/NameDataset';

const App = () => {
  return (  
    <NameDatasetProvider>
      <Container component="main" maxWidth="md">
        <Typography variant="h2" component="h1" align='center' gutterBottom> 
          Choose a gender:
        </Typography>
        <NameGenerator/>
      </Container>
    </NameDatasetProvider>
)};

export default App;