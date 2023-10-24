import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './assets/other.css';
import LoginPage from './containers/sign-in-page';
import CreateActivityPage from './containers/create-activity-page';
import SearchForActivitiesPage from './containers/search-for-activities-page';
import MyTickets from './containers/show-my-tickets-page';
import BasicLayout from './containers/basic-layout';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const [refreshCnt, setRefreshCnt] = React.useState(0);
  React.useEffect(() => {
    console.log('version 1.1');
  }, []);
  return (
    <Switch>
      <Route path="/login">
        <LoginPage />
      </Route>

      <Route path="/show-my-tickets">
        <BasicLayout>
          {
            <ThemeProvider theme={darkTheme}>
              <div
                style={{
                  backgroundSize: 'cover',
                  height: '1130px',
                  backgroundImage: "url('view-6.jpg')",
                  // "backgroundColor": "rgba(0, 0, 0, .6)"
                  // "backgroundImage": "url('view-3.jpg')",
                }}
              >
                <MyTickets />
              </div>
            </ThemeProvider>
          }
        </BasicLayout>
      </Route>

      <Route path="/search-for-activities">
        <BasicLayout>
          {
            <ThemeProvider theme={darkTheme}>
              <div
                style={{
                  backgroundSize: 'cover',
                  height: '1130px',
                  // "backgroundImage": "url('view-6.jpg')",
                  // "backgroundColor": "rgba(0, 0, 0, .6)"
                }}
              >
                <SearchForActivitiesPage />
              </div>
            </ThemeProvider>
          }
        </BasicLayout>
      </Route>

      <Route path="/create-activity">
        <BasicLayout>
          {
            <div
              style={{
                backgroundSize: 'cover',
                height: '1130px',
                backgroundImage: "url('view-10.png')",
                // "backgroundColor": "rgba(0, 0, 0, .6)"
                // "backgroundImage": "url('view-3.jpg')",
              }}
            >
              <CreateActivityPage />
            </div>
          }
        </BasicLayout>
      </Route>
      <Route path="/">
        <LoginPage />
      </Route>
    </Switch>
  );
}

export default App;
