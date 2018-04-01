import React from 'react';
import Header from './common/header';
import { Switch,  Route } from 'react-router-dom';
import HomePage from './home/HomePage';
import ExplorePage from './explore/ExplorePage';
import UserPage from './user/UserPage';
import NotFoundPage from './NotFoundPage';

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Header/>
        </div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/explore" component={ExplorePage} />
          <Route path="/user" component={UserPage} />
          <Route component={NotFoundPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
