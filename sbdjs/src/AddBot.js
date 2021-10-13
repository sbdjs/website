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
        <div>
            <form onSubmit={e => onSubmit(e)}>
                <div class="entry border-2 p-2 m-4">
                    <label for="">Nom du Bot:</label>
                    <input 
                        type="text" 
                        name="bot_name" 
                        placeholder="Entrer un nom..."
                        value={bot_name}
                        onChange={e => onEntryChange(e)}
                    />
                </div>
                <div class="entry border-2 p-2 m-4">
                    <label for="">Description du Bot:</label>
                    <input 
                        type="text" 
                        name="bot_description" 
                        placeholder="Entrer une description..."
                        value={bot_description}
                        onChange={e => onEntryChange(e)}
                    />
                </div>
                <div class="entry border-2 p-2 m-4">
                    <label for="">Avatar du Bot:</label>
                    <input 
                        type="text" 
                        name="bot_avatar" 
                        placeholder="Entrer un avatar..."
                        value={bot_avatar}
                        onChange={e => onEntryChange(e)}
                    />
                </div>
                <div class="entry border-2 p-2 m-4">
                    <label for="">Invitation du Bot:</label>
                    <input 
                        type="text" 
                        name="bot_invit" 
                        placeholder="Entrer une invitation..."
                        value={bot_invit}
                        onChange={e => onEntryChange(e)}
                    />
                </div>
                <button className="bg-blue-700 text-white py-2 px-4">Envoyer</button>
            </form>
        </div>
    );
}

export default AddBot;