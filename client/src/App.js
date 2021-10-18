import React, { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import Axios from 'axios';
import LoginButton from './views/login';
import Profile from './views/userProfile';
import Moment from 'moment';

function App() {
  const { user } = useAuth0();

  const [botName, setBotName] = useState('')
  const [botDesc, setBotDesc] = useState('')
  const [botAvatar, setBotAvatar] = useState('')
  const [botLink, setBotLink] = useState('')

  const [botList, setBotList] = useState([])

  useEffect(() => {
    Axios.get('http://localhost:3001/api/get').then((response) => {
      setBotList(response.data);
    })
  }, [])

  const submitBot = () => {
    Axios.post('http://localhost:3001/api/insert', {
      uid: user.sub,
      username: user.name,
      bot_name: botName,
      bot_desc: botDesc,
      bot_avatar: botAvatar,
      bot_invit: botLink
    });
    
    setBotList([...botList,
      {
        uid: user.sub,
        username: user.name,
        bot_name: botName,
        bot_desc: botDesc,
        bot_avatar: botAvatar,
        bot_invit: botLink
      },
    ]);
  };

  return (
    <div className="App">
      <h1>Form Sender</h1>
      <div className="form">
        <div className="entry">
          <label>Bot Name:</label>
          <input type="text" name="botName" onChange={(e) => { setBotName(e.target.value)}} />
        </div>
        <div className="entry">
          <label>Bot Description:</label>
          <input type="text" name="botDesc" onChange={(e) => { setBotDesc(e.target.value)}} />
        </div>
        <div className="entry">
          <label>Bot Avatar:</label>
          <input type="text" name="botAvatar" onChange={(e) => { setBotAvatar(e.target.value)}} />
        </div>
        <div className="entry">
          <label>Bot Invitation Link:</label>
          <input type="text" name="botInvit" onChange={(e) => { setBotLink(e.target.value)}} />
        </div>
        <button type="submit" className="btn" onClick={submitBot}>Submit</button>
      </div>
      <LoginButton />
      <Profile />
      {botList.map((bot) => {
        return(
          <div className="rounded-lg bg-gray-700 border-2 border-gray-400 w-full max-w-sm m-4 overflow-hidden">
            <div className="w-full h-48 overflow-hidden">
            <img src={bot.bot_avatar} className="w-full h-full 48 object-cover filter blur-sm" alt="logo bot" />
            </div>
            <div className="p-4 relative">
            <img src={bot.bot_avatar} className="absolute -top-16 w-28 h-28 object-cover rounded-lg" alt="logo bot" />
            <div className="flex items-center text-white mt-10 mb-2">
              <span className="text-2xl text-blue-500 font-bold">{bot.bot_name}</span>
            </div>
            <div className="flex flex-col text-white my-2">
              <div className="w-full font-normal bg-white bg-opacity-10 rounded-lg overflow-y-scroll text-white resize-none h-36 outline-none p-2">{bot.bot_desc}</div>
            </div>
            <div className="flex items-center text-white my-2">
              <h3 className="font-bold mr-4">En ligne depuis le :</h3>
              <span className="opacity-75 font-medium">{Moment(bot.createAt).format('d MMM YYYY hh:mm')}</span>
            </div>
            <div className="flex items-center justify-between text-white mt-8">
              <a href={bot.bot_invit} className="bg-blue-700 py-3 w-full text-center rounded-lg font-bold">Ajouter</a>
            </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
