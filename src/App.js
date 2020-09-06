import React from 'react';
import Helmet from 'react-helmet';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import News from './pages/News';
import Home from './pages/Home';

function App() {
  return (
      <div>
        <Helmet>
          <title>App</title>
        </Helmet>
        <Route path="/" render={() => <Header />} />
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/news" render={() => <News />} />
        </Switch>
        <Footer />
      </div>
  )
}

export default App;
