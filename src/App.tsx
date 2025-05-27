import { Button, AppBar, Toolbar, Typography, Tabs, Tab } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';

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

const tabRoutes = ['/', '/soratnyky'];

function MainContent() {
  const location = useLocation();
  const navigate = useNavigate();
  const [tab, setTab] = React.useState(0);

  // Sync tab with route
  React.useEffect(() => {
    const idx = tabRoutes.indexOf(location.pathname);
    if (idx !== -1 && idx !== tab) {
      setTab(idx);
    }
  // eslint-disable-next-line
  }, [location.pathname]);

  const handleTabChange = (_: any, newValue: number) => {
    setTab(newValue);
    navigate(tabRoutes[newValue]);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Tabs
            value={tab}
            onChange={handleTabChange}
            textColor="inherit"
            indicatorColor="secondary"
            variant="fullWidth"
            TabIndicatorProps={{
              style: {
                backgroundColor: darkTheme.palette.secondary.main,
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
                color: `${darkTheme.palette.secondary.main} !important`,
              },
            }}
          >
            <Tab label="ЛІДЕРИ" />
            <Tab label="СОРАТНИКИ" />
          </Tabs>
        </Toolbar>
      </AppBar>
      <div style={{ padding: 20 }}>
        <Routes>
          <Route
            path="/"
            element={
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
            }
          />
          <Route
            path="/soratnyky"
            element={
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
            }
          />
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <div className="App">
          <MainContent />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
