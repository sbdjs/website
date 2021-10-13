import React, { useState } from "react";

const AddBot = () => {
    const [user, setUser] = useState({
        bot_name: "",
        bot_description: "",
        bot_avatar: "",
        bot_invit: ""
    });

    const { bot_name, bot_description, bot_avatar, bot_invit} = user;
    const onEntryChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value});
    };

    const onSubmit = async e => {
        e.preventDefault();
        console.log(user.bot_name);
    }
    
    return(
        <div className="my-12">
            <form onSubmit={e => onSubmit(e)}>
                <div class="w-full max-w-sm mx-auto flex flex-col items-center mb-6">
                    <label className="font-semibold" for="">Nom du Bot:</label>
                    <input
                        className class="entry w-full rounded-lg border-2 p-2 m-2 outline-none focus-within:border-blue-700 ease-out transition-all"
                        type="text" 
                        name="bot_name" 
                        placeholder="Entrer un nom..."
                        value={bot_name}
                        onChange={e => onEntryChange(e)}
                    />
                </div>
                <div class="w-full max-w-sm mx-auto flex flex-col items-center mb-6">
                    <label className="font-semibold" for="">Description du Bot:</label>
                    <input
                        className class="entry w-full rounded-lg border-2 p-2 m-2 outline-none focus-within:border-blue-700 ease-in-out transition-all"
                        type="text" 
                        name="bot_description" 
                        placeholder="Entrer une description..."
                        value={bot_description}
                        onChange={e => onEntryChange(e)}
                    />
                </div>
                <div class="w-full max-w-sm mx-auto flex flex-col items-center mb-6">
                    <label className="font-semibold" for="">Avatar du Bot:</label>
                    <input
                        className class="entry w-full rounded-lg border-2 p-2 m-2 outline-none focus-within:border-blue-700 ease-out transition-all"
                        type="text" 
                        name="bot_avatar" 
                        placeholder="Entrer un avatar..."
                        value={bot_avatar}
                        onChange={e => onEntryChange(e)}
                    />
                </div>
                <div class="w-full max-w-sm mx-auto flex flex-col items-center mb-6">
                    <label className="ml-0 font-semibold" for="">Invitation du Bot:</label>
                    <input
                        className class="entry w-full rounded-lg border-2 p-2 m-2 outline-none focus-within:border-blue-700 ease-out transition-all"
                        type="text" 
                        name="bot_invit" 
                        placeholder="Entrer une invitation..."
                        value={bot_invit}
                        onChange={e => onEntryChange(e)}
                    />
                </div>
                <button className="rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2.5 px-6 ease-out transition-all">Envoyer</button>
            </form>
        </div>
    );
}

export default AddBot;