import React, { useState, useEffect } from 'react';
import './App.css';
import { useAuth0 } from "@auth0/auth0-react";
import Axios from 'axios';
import LoginButton from './views/login';
import Profile from './views/userProfile';

function App() {
  const { user } = useAuth0();

  const [botName, setBotName] = useState('')
  const [botDesc, setBotDesc] = useState('')
  const [botAvatar, setBotAvatar] = useState('')
  const [botLink, setBotLink] = useState('')

  const submitBot = () => {
    Axios.post('http://localhost:3001/api/insert', {
      uid: user.sub,
      username: user.name,
      bot_name: botName,
      bot_desc: botDesc,
      bot_avatar: botAvatar,
      bot_invit: botLink
    }).then(() => {
      alert('successful insert');
    });
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
    </div>
  );
}

export default App;
