import { AppBar, Toolbar, Tabs, Tab } from "@mui/material";
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
import { getContrastYIQ } from "./utils/colors";

export const userColor = "#FFA500"

export const mainTheme = createTheme({
  palette: {
    primary: {
      main: getContrastYIQ(userColor),
    },
    secondary: {
      main: userColor,
    },
  },
});

const tabRoutes = ["/", "/associates", "/history"];

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

  const idx = location.pathname === "/" ? 0 : location.pathname.indexOf("/history") ? 1 : 2;
  if (idx !== tab) {
    initialTab = idx;
  }

  React.useEffect(() => {
    const shortLocation = location.pathname.match("^/[^/]+");
    console.log("shortLocation", shortLocation);
    const tabIndex = tabRoutes.indexOf((shortLocation && shortLocation[0]) || "/");
    if (tabIndex !== -1 && tabIndex !== tab) {
      setTab(tabIndex);
    }
  // eslint-disable-next-line
  }, [location.pathname]);

  return (
    <>
      <AppBar position="fixed">
        <Toolbar style={{paddingRight: 8, paddingLeft: 8}}>
          <Tabs
            value={tabModified ? tab : initialTab}
            onChange={handleTabChange}
            textColor="inherit"
            indicatorColor="secondary"
            variant="fullWidth"
            TabIndicatorProps={{
              style: {
                backgroundColor: mainTheme.palette.secondary.main,
                height: 4,
              },
            }}
            sx={{
              flex: 1,
              ".MuiTab-root": {
                fontWeight: "bold",
                fontSize: "1.1rem",
                letterSpacing: 1,
                color: "#808080",
                minWidth: 120,
              },
              ".Mui-selected": {
                color: `${mainTheme.palette.secondary.main} !important`,
              },
            }}
          >
            <Tab label="ЛІДЕРИ" />
            <Tab label="СОРАТНИКИ" />
            <Tab label={"ІСТОРІЯ"} />

          </Tabs>
        </Toolbar>
      </AppBar>
        <Routes>
          <Route path="/" element={<LeadersPage />} />
          <Route path="/associates" element={<AssociatesPage />} />
          <Route path="/associates/:associate" element={<AssociatesPage />} />
          <Route path="/history" element={"HISTORY"} />

        </Routes>
    </>
  );
}

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <Provider store={store}>
        <BrowserRouter>
          <div className="App" style={{ paddingRight: 8, paddingLeft: 8, paddingTop: 56, height: "100vh", boxSizing: "border-box" }}>
            <MainContent />
          </div>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
