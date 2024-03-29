import { Route, Switch } from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import FavoritesPapge from './pages/Favorites';
import NewMeetupPage from './pages/NewMeetup';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage></AllMeetupsPage>
        </Route>
        <Route path="/new-meetup">
          <NewMeetupPage></NewMeetupPage>
        </Route>
        <Route path="/favorites">
          <FavoritesPapge></FavoritesPapge>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
