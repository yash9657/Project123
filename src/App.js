
import './App.css';
import Intropage from './Intropage';
import Mainpage from './Mainpage';
import Shop from './Shop';
import Sell from './Sell';
import Profile from './Profile';
import About from './About';
import Contact from './Contact';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Intropage />
      <BrowserRouter>
        <Mainpage />
        <Switch>
          <Route exact path='/' component={Shop} />
          <Route exact path='/sell' component={Sell} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/about' component={About} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
