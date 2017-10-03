import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

// CSS libs and polyfills
import './resources/styles/normalize.min.css';
import './resources/styles/main.css';
import { Theme } from './Router-style';

// Routes imports
import Home       from './routes/home/Home.jsx';
// import Components from './routes/components/Components.jsx';
// import Past       from './routes/past/Past.jsx';
// import Present    from './routes/present/Present.jsx';
// import Future     from './routes/future/Future.jsx';
// import NavBar     from './components/navbar/NavBar.jsx';

const links = [
  {path: "/ontem", name: "Ontem"},
  {path: "/hoje", name: "Hoje"},
  {path: "/amanha", name: "Amanhã"}
]

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

const Routes = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Theme>
        <Route component={ScrollToTop}/>
        <Route path="/"/>
        <header>

        </header>

        <main>
          <Route exact path="/" component={Home}/>
        </main>
      </Theme>
    </Router>
  );
}

export default Routes;
