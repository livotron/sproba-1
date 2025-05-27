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
        <div style={{ padding: 20 }}>
          {tab === 0 ? (
            <div
              style={{
                background: '#000',
                height: '60vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 16,
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  color: darkTheme.palette.secondary.main,
                  fontSize: '12rem',
                  fontWeight: 900,
                  lineHeight: 1,
                  userSelect: 'none',
                }}
              >
                O
              </Typography>
            </div>
          ) : (
            <>
              <Typography variant="h4" gutterBottom>
                Соратники
              </Typography>
              <Typography variant="body1">
                Контент для соратників...
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                sx={{ marginTop: 2 }}
              >
                Дія
              </Button>
            </>
          )}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
