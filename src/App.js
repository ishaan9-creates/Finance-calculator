import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Grid from '@mui/material/Grid';
import Container from "@mui/material/Container";
import Navbar from './components/Navbar';
import SliderSelect from './components/SliderSelect';
import TenureSelect from './components/TenureSelect';
import Result from './components/Result';
import { Typography } from '@mui/material';

function App() {

  const [data, setData] = useState({
    homeValue: 3000,
    downPayment: 3000,
    loanAmount: 3000,
    interestRate: 5,
    loanTerm: 5,
  })

  let unit = "₹";

  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 5}} sx={{mb: 5}}>
        
        <Grid container spacing={5} alignItems='center'>

          <Grid container direction="row" justifyContent="center" alignItems="center" item md={12} xs={12} sx={{ mt: 5}}>
            <Typography variant='h4' component='h3' sx={{ fontWeight: 'bold', textAlign: 'center' }}>
              All your Finance, calculated in one place
            </Typography>



          </Grid>
          
          <Grid item md={6} xs={12}>
            <SliderSelect data={data} setData={setData} unit={unit}/>
            <TenureSelect data={data} setData={setData} unit={unit}/>
          </Grid>
          
          <Grid item md={6} xs={12}>
            <Result data={data} unit={unit}/>
          </Grid>
        
        </Grid>
      
      </Container>
    </div>
  );
}

export default App;