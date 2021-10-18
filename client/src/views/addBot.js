import React, { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import Axios from 'axios';
import LoginButton from '../views/login';

function Add() {
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
      });
   };

   return (
      <div className="App text-center">
         <div className="form relative p-4 bg-gray-100 rounded-lg w-full max-w-sm my-8 mx-auto">
            <h1 className="absolute -top-6 font-extrabold text-2xl text-white bg-blue-700 inline-flex py-1.5 px-4 rounded-lg">Form Sender</h1>
            <div className="entry text-left my-4">
               <label className="ml-4">Bot Name:</label>
               <input className="w-full bg-gray-300 rounded-lg py-2 px-3 outline-none" type="text" name="botName" onChange={(e) => { setBotName(e.target.value)}} />
            </div>
            <div className="entry text-left my-4">
               <label className="ml-4">Bot Description:</label>
               <textarea className="w-full bg-gray-300 rounded-lg py-2 px-3 h-48 resize-none outline-none" type="text" name="botDesc" onChange={(e) => { setBotDesc(e.target.value)}} />
            </div>
            <div className="entry text-left my-4">
               <label className="ml-4">Bot Avatar:</label>
               <input className="w-full bg-gray-300 rounded-lg py-2 px-3 outline-none" type="text" name="botAvatar" onChange={(e) => { setBotAvatar(e.target.value)}} />
            </div>
            <div className="entry text-left my-4">
               <label className="ml-4">Bot Invitation Link:</label>
               <input className="w-full bg-gray-300 rounded-lg py-2 px-3 outline-none" type="text" name="botInvit" onChange={(e) => { setBotLink(e.target.value)}} />
            </div>
            <button type="submit" className="btn bg-blue-700 text-white font-bold rounded-lg py-2 w-full mt-8 hover:bg-blue-800 hover:text-gray-100 transition-all ease-in-out" onClick={submitBot}>Submit</button>
         </div>
      </div>
   );
}

export default Add;