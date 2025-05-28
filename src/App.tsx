import { AppBar, Toolbar, Typography, Tabs, Tab } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import AssociatesPage from "./features/associates/associatesPage";
import LeadersPage from "./features/leaders/leadersPage";
import { Provider } from "react-redux";
import store from "./store";

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#FFD600",
    },
  },
});

const tabRoutes = ["/", "/соратники"];

function MainContent() {
  const location = useLocation();
  const navigate = useNavigate();
  const [tab, setTab] = React.useState(0);
  const [tabModified, setTabModified] = React.useState(false);

  const handleTabChange = (_: any, newValue: number) => {
    setTabModified(true);
    setTab(newValue);
    navigate(tabRoutes[newValue]);
  };

  let initialTab = 0;

  const idx = location.pathname === "/" ? 0 : 1;
  console.log("current location:",location);
  if (idx !== tab) {
    initialTab = idx;
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Tabs
            value={tabModified ? tab : initialTab}
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
              ".MuiTab-root": {
                fontWeight: "bold",
                fontSize: "1.1rem",
                letterSpacing: 1,
                color: "#fff",
                minWidth: 120,
              },
              ".Mui-selected": {
                color: `${darkTheme.palette.secondary.main} !important`,
              },
            }}
          >
            <Tab label="ЛІДЕРИ" />
            <Tab label="СОРАТНИКИ" />
          </Tabs>
        </Toolbar>
      </AppBar>
      <div style={{ paddingTop: 20 }}>
        <Routes>
          <Route path="/" element={<LeadersPage />} />
          <Route path="/соратники" element={<AssociatesPage />} />
          <Route path="/соратники/:associate" element={<AssociatesPage />} />
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <MainContent />
          </div>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
