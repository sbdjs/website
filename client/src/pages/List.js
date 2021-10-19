import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Moment from 'moment';
import logo from '../asset/logo.svg';

function List() {

   const [botList, setBotList] = useState([])

   useEffect(() => {
      Axios.get('http://localhost:3001/api/get').then((response) => {
         setBotList(response.data);
      })
   }, [])

   return (
      <div className="App">
      <div className="flex items-center m-4">
         <img className="w-auto h-20 rounded-lg" src={logo} alt="Logo sbdjs" />
         <h1 className="ml-4 text-2xl font-extrabold">Découvre tous les Bots propulsés par SBDjs</h1>
      </div>
      <div className="flex flex-wrap justify-center xl:justify-start">
         {botList.map((bot) => {
            return(
               <div className="rounded-lg bg-gray-950 border-2 border-gray-400 w-full max-w-sm m-4 overflow-hidden">
                  <div className="w-full h-48 overflow-hidden">
                     <img src={bot.bot_avatar} className="w-full h-full 48 object-cover filter blur-sm" alt="logo bot" />
                  </div>
                  <div className="p-4 relative">
                     <img src={bot.bot_avatar} className="absolute -top-16 w-28 h-28 object-cover rounded-lg" alt="logo bot" />
                     <div className="flex items-center text-white mt-10 mb-2">
                        <span className="text-3xl text-green-450 font-extrabold overflow-hidden overflow-ellipsis whitespace-nowrap">{bot.bot_name}</span>
                     </div>
                     <div className="flex flex-col text-white my-2">
                        <div className="w-full font-normal bg-white bg-opacity-10 rounded-lg overflow-y-scroll text-white resize-none h-36 outline-none p-2">{bot.bot_desc}</div>
                     </div>
                     <div className="flex items-center text-white my-2">
                        <h3 className="font-bold mr-4">En ligne depuis le :</h3>
                        <span className="opacity-75 font-medium">{Moment(bot.createAt).format('d MMM YYYY')}</span>
                     </div>
                     <div className="flex items-center justify-between text-white mt-8">
                        <a href={bot.bot_invit} className="bg-green-450 py-3 w-full text-center rounded-lg font-bold">Ajouter</a>
                     </div>
                  </div>
               </div>
            );
         })}
      </div>
      </div>
   );
}

export default List;


