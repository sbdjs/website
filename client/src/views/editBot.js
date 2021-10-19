import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Moment from 'moment';

function Edit() {

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

  const deleteBot = (id) => {
      Axios.delete(`http://localhost:3001/api/delete/${id}`);
  }

  const updateBot = (id) => {
    Axios.put(`http://localhost:3001/api/update/${id}`, {
      bot_name: botName,
      bot_desc: botDesc,
      bot_avatar: botAvatar,
      bot_invit: botLink
    });
  }

  return (
    <div className="App flex flex-wrap justify-center">
      {botList.map((bot) => {
        return(
          <div className="rounded-lg bg-gray-700 border-2 border-gray-400 w-full max-w-sm m-4 overflow-hidden">
            <div className="w-full h-48 overflow-hidden">
            <img src={bot.bot_avatar} className="w-full h-full 48 object-cover filter blur-sm" alt="logo bot" />
            </div>
            <div className="p-4 relative">
            <input className="" alt="logo bot" placeholder={bot.bot_avatar} onChange={(e) => { setBotAvatar(e.target.value)}} />
            <div className="flex items-center mt-10 mb-2">
              <input className="" value={bot.bot_name} onChange={(e) => { setBotName(e.target.value)}} />
            </div>
            <div className="flex flex-col my-2">
              <textarea className="resize-none h-36 outline-none p-2" placeholder={bot.bot_desc} onChange={(e) => { setBotDesc(e.target.value)}} />
            </div>
            <div className="flex items-center text-white my-2">
              <h3 className="font-bold mr-4">En ligne depuis le :</h3>
              <span className="opacity-75 font-medium">{Moment(bot.createAt).format('d MMM YYYY hh:mm')}</span>
            </div>
            <div className="flex items-center justify-between mt-8">
              <input className="w-full" placeholder={bot.bot_invit} onChange={(e) => { setBotLink(e.target.value)}} />
            </div>
            <div className="flex items-center justify-between text-white mt-2">
              <button onClick={() => {updateBot(bot.id)}} className="bg-green-500 py-3 w-full text-center rounded-lg font-bold mr-1">Modifier</button>
              <button onClick={() => {deleteBot(bot.id)}} className="bg-red-500 py-3 w-full text-center rounded-lg font-bold ml-1">Supprimer</button>
            </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Edit;
