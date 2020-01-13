import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Profile from './Profile';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Grid, Paper } from "@material-ui/core/";
// import './App.css';
import './index.css';


const theme = createMuiTheme();

function App() {
  return (
    <MuiThemeProvider theme={theme} >
      <Grid container alignItems='center' style={{ height: '100%' }}>
        <Grid item xs={12}  >
          <Paper elevation={4} style={{ margin: 32 }}>
            <Grid container alignItems='center' justify='center' alignContent='space-between'>
              <img src="http://images.innoveduc.fr/react_odyssey_homer/wildhomer.png" alt="" />
              <Grid item xs={12} sm={6}>
                <BrowserRouter>
                  <Switch>
                    <Route exact path="/">
                      <SignIn />
                    </Route>
                    <Route exact path="/signin">
                      <SignIn />
                    </Route>
                    <Route exact path="/signup">
                      <SignUp />
                    </Route>
                    <Route exact path="/profile">
                      <Profile />
                    </Route>
                  </Switch>
                </BrowserRouter>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </MuiThemeProvider>
  );
}

export default App;
