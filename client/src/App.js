import React from 'react';
import Nav from './views/Nav';
import About from './pages/About';
import Bot from './pages/Bot';
import List from './pages/List';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
   return (
      <Router>
         <div className="App font-averta">
            <Nav />
            <Switch>
               <Route path="/" exact component={Home} />
               <Route path="/list" component={List} />
               <Route path="/about" component={About} />
               <Route path="/bot" component={Bot} />
            </Switch>
         </div>
      </Router>
   );
}

const Home = () => (
   <div>
      <h1>Home Page</h1>
   </div>
)

export default App;
