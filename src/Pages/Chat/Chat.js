import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Contacts from '../../Components/Contacts/Contacts';

const Chat = () => {
    const navigate = useNavigate();
    const [contacts, setContacts] = useState([]);
    const [currentChat, setCurrentChat] = useState(undefined);
    const [currentUser, setCurrentUser] = useState(undefined);

    useEffect(() => {
        async function userFind() {
            if (!localStorage.getItem("chat-app-user")) {
                navigate("/login");
            } else {
                setCurrentUser(
                    await JSON.parse(
                        localStorage.getItem("chat-app-user")
                    )
                );
            }
        }
        userFind();
    }, []);
    
    useEffect(() => {
         function getUsers() {
            if (currentUser) {
                if (currentUser.isAvatarImageSet) {
                    // const data = await axios.get(`http://localhost:5000/auth/allUsers/${currentUser._id}`);
                    // setContacts(data.data);
               fetch(`http://localhost:5000/auth/allUsers/${currentUser._id}`)
                    .then(res => res.json())
                    .then(data => setContacts(data))

                } else {
                    navigate("/setAvatar");
                }
            }
        }
        getUsers();
    }, [currentUser]);

    return (
        <div>
         <Contacts
         contacts = {contacts}
         currentUser = {currentUser}
         ></Contacts>
        </div>
    );
};

export default Chat;