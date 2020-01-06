import React from 'react';
import SignUp from './SignUp';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Grid, Paper } from "@material-ui/core/";
// import './App.css';
import './index.css';

const theme = createMuiTheme();

function App() {
  return (
    <MuiThemeProvider theme={theme} >
      <Grid container
        alignItems='center'
        style={{ height: '100%' }}>
        <Grid item xs={12} sm={6} >
          <Paper
            elevation={4}
            style={{ margin: 32 }}
          >
            <Grid container
              alignItems='center'
              justify='center'
              alignContent='space-between'
            >

              <img src="http://images.innoveduc.fr/react_odyssey_homer/wildhomer.png" alt=""/>

              <Grid item xs={12} sm={6}
                
              >
                <SignUp />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </MuiThemeProvider>
  );
}

export default App;
