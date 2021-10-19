import React from 'react';
import Nav from './views/Nav';
import About from './pages/About';
import Bot from './pages/Bot';
import List from './pages/List';
import Edit from './pages/Edit';
import logof from './asset/logo.svg';
import logo from './asset/logo2.svg';
import { useAuth0 } from '@auth0/auth0-react';
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
               <Route path="/edit" component={Edit} />
            </Switch>
         </div>
      </Router>
   );
}

const Home = () => (
   
   <div>
      <div>
         <div className="w-full bg-gray-950 py-28">
            <img src={logo} className="max-h-60 mx-auto animate-bounce" alt="logo sbdjs" />
         </div>
      </div>
      <div className="m-8 flow-root">
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
      <footer className="footer bg-gray-950 relative mt-32 pt-1 border-b-2 border-green-450">
         <div className="container mx-auto px-6">

            <div className="sm:flex sm:mt-8">
                  <div>
                     <div className="flex items-center">
                        <img src={logof} className="w-20 h-20 rounded-lg mr-4" />
                        <h1 className="text-white text-2xl font-extrabold">SBDJS</h1>
                     </div>
                     <p className="text-white text-opacity-75">SBDJS est un projet de cours réalisé dans le cadre d'un tp en javascript et il a pour but de mettre en avant les bots créé durant ce projet.</p>
                  </div>
                  <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-end">
                     <div className="flex flex-col mx-8">
                        <span className="font-bold text-gray-700 uppercase mb-2">Navigation</span>
                        <span className="my-2"><a href="/" className="text-green-450  text-md hover:text-green-500 transition-all ease-in-out">Accueil</a></span>
                        <span className="my-2"><a href="/list" className="text-green-450  text-md hover:text-green-500 transition-all ease-in-out">Liste</a></span>
                        <span className="my-2"><a href="/about" className="text-green-450  text-md hover:text-green-500 transition-all ease-in-out">Flexance</a></span>
                        <span className="my-2"><a href="/bot" className="text-green-450 text-md hover:text-green-500 transition-all ease-in-out">Bot</a></span>
                     </div>
                     <div className="flex flex-col mx-8">
                        <span className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">Liens</span>
                        <span className="my-2"><a href="https://github.com/sbdjs/website" className="text-green-450  text-md hover:text-green-500 transition-all ease-in-out">Github</a></span>
                        <span className="my-2"><a href="https://discord.gg/NE38Nyj3" className="text-green-450  text-md hover:text-green-500 transition-all ease-in-out">Discord</a></span>
                        <span className="my-2"><a href="https://discord.gg/NE38Nyj3" className="text-green-450  text-md hover:text-green-500 transition-all ease-in-out">Groupe</a></span>
                     </div>
                  </div>
            </div>
         </div>
         <div className="container mx-auto px-6">
            <div className="mt-16 border-t border-gray-300 border-opacity-10 flex flex-col items-center">
                  <div className="sm:w-2/3 text-center py-6">
                     <p className="text-sm text-green-450 font-bold mb-2">
                      Tout droits réservés © 2021 par SBDJS
                     </p>
                  </div>
            </div>
         </div>
      </footer>
   </div>
)

export default App;
