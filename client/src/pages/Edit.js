import React, { useState, useEffect } from 'react';
import Edit from '../views/editBot';
import Axios from 'axios';
import LoginButton from '../views/login';
import { useAuth0 } from "@auth0/auth0-react";


function Bot() {
   const { isAuthenticated, user, isLoading } = useAuth0();
   const [userBot, setUserBot] = useState([]);

      useEffect(() => {
         if(isAuthenticated) {
            const uid = user.sub;
            Axios.get(`http://localhost:3001/api/get/verfification/${uid}`)
            .then((response) => {
               setUserBot(response.data);
               console.log(response.data);
            })
            .catch((error) => {
               console.log(error);
            })
         }
      }, []);

      if (isLoading) {
         return(
            <div>Chargement...</div>
         );
   }
   console.log(setUserBot.json);




   if (isAuthenticated) {
         return (
            <div className="Bot">
               <h1 className="text-center text-3xl font-extrabold mt-8 mb-16">Envie d'ajouter votre bot ? N'attendez plus !</h1>
               <Edit />
            </div>
         );
   } else {
      return (
         <div className="Bot">
            <h1 className="text-center text-3xl font-extrabold mt-8 mb-16">Envie d'ajouter votre bot ? N'attendez plus !</h1>
            <div className="flex justify-center">
               <LoginButton />
            </div>
         </div> 
      );
   }
}
//
export default Bot;
