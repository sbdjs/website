import './App.css';
//import { useAuth0 } from '@auth0/auth0-react';
import Navbar from './Navbar/Navbar';
import List from './Pages/List';
import About from './Pages/About';
import Add from './Pages/Add';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
   /*
  const {
    user, 
    isAuthenticated
  } = useAuth0();
  */
  
   return (
      <Router>
         <div className="App">
            <Navbar />
            <Switch>
               <Route path="/" exact component={Home} />
               <Route path="/liste" component={List} />
               <Route path="/about" component={About} />
               <Route path="/ajouter" component={Add} />
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
