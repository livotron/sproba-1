import { Button, AppBar, Toolbar, Typography, Tabs, Tab } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';

const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#FFD600',
    },
  },
});

function App() {
  const [tab, setTab] = React.useState(0);

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Tabs
              value={tab}
              onChange={(_, newValue) => setTab(newValue)}
              textColor="inherit"
              indicatorColor="secondary"
              variant="fullWidth"
              TabIndicatorProps={{
                style: {
                  backgroundColor: darkTheme.palette.secondary.main, // use theme secondary
                  height: 4,
                },
              }}
              sx={{
                flex: 1,
                '.MuiTab-root': {
                  fontWeight: 'bold',
                  fontSize: '1.1rem',
                  letterSpacing: 1,
                  color: '#fff',
                  minWidth: 120,
                },
                '.Mui-selected': {
                  color: `${darkTheme.palette.secondary.main} !important`, // use theme secondary
                },
              }}
            >
              <Tab label="ЛІДЕРИ" />
              <Tab label="СОРАТНИКИ" />
            </Tabs>
          </Toolbar>
        </AppBar>
        <Button>I'm the button</Button>
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
            Don't Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
