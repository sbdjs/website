import React from 'react';
import Nav from './views/Nav';
import About from './pages/About';
import Bot from './pages/Bot';
import List from './pages/List';
import logo from './asset/logo2.svg';
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
      <div>
         <div className="w-full bg-gray-950 p-16">
            <img src={logo} alt="logo sbdjs" />
         </div>
      </div>
      <div className="m-8">
      <div className="mb-12">
         <h1 className="text-green-450 font-extrabold text-5xl max-w-3xl text-left mb-4">Tu aimerais mettre en avant ton bot pour passer la certification discord ?</h1>
         <span className="font-bold text-2xl">Pas de soucis on est la pour t'aider !</span>
      </div>
      <div className="float-right bg-gray-950 p-8 rounded-lg">
         <span className="bg-green-450 text-white py-2 px-4 rounded-lg font-bold text-xl">Tout d'abord voici quelques étapes à faire avant</span>
         <ul className="mt-8 text-white text-opacity-75 list-disc list-inside">
            <li className="mb-2">
               <span>Vérifie que ton bot est prêt à l'utlisation</span>
            </li>
            <li className="my-2">
               <span>Prends le temps de lire les <a href="https://discord.com/tos">TOS</a> de Discord</span>
            </li>
            <li className="mt-2">
               <span>Regarde ton éligibilité à la certification dans ton portail développeur</span>
            </li>
         </ul>
      </div>
      </div>
   </div>
)

export default App;
