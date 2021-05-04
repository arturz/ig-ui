import { AnimatePresence } from 'framer-motion';
import { Route, Switch, useLocation } from 'react-router-dom';
import './App.css';
import AppRoute from './pages/App';
import Home from './pages/Home';
import Login from './pages/Login';
import SiteWrapper from './templates/SiteWrapper';

export default function App() {
  const location = useLocation();

  return (
    <SiteWrapper>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path="/login" component={Login} />
          <Route path="/app" component={AppRoute} />
          <Route path="/" component={Home} />
        </Switch>
      </AnimatePresence>
    </SiteWrapper>
  );
}
