import React, { useEffect, useState } from "react";
import axios from "axios";
import { Buffer } from "buffer";
import loader from "../../Images/loading.gif";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-hot-toast';
import './SetAvatar.css'

const SetAvatar = () => {
    const api = `https://api.multiavatar.com/4645646`;
    const navigate = useNavigate();
    const [avatars, setAvatars] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedAvatar, setSelectedAvatar] = useState(undefined);

    useEffect(() => {
        if (!localStorage.getItem("chat-app-user")) {
            navigate("/login");
        }
    }, []);

    const setProfilePicture = async () => {
        if (selectedAvatar === undefined) {
            toast.error("Please select an avatar");
        } else {
            const user = await JSON.parse(
                localStorage.getItem("chat-app-user")
            );

            const { data } = await axios.post(`http://localhost:5000/auth/setAvatar/${user._id}`, {
                image: avatars[selectedAvatar],
            });
            if (data.isSet) {
                user.isAvatarImageSet = true;
                user.avatarImage = data.image;
                localStorage.setItem(
                    "chat-app-user",
                    JSON.stringify(user)
                );
                navigate("/");
            } else {
                toast.error("Error setting avatar. Please try again.");
            }
        }
    };

    useEffect(() => {
        async function fetchData() {
            const data = [];
            for (let i = 0; i < 5; i++) {
                const image = await axios.get(
                    `${api}/${Math.round(Math.random() * 1000)}`
                );
                console.log(image.data)
                const buffer = new Buffer(image.data);
                data.push(buffer.toString("base64"));
            }
            setAvatars(data);
            setIsLoading(false);
        }
        fetchData();
    }, []);


    return (
        <div style={{ height: '100vh', backgroundColor: '#131324' }} className="flex justify-center items-center flex-col">
            {isLoading ? (
                <div className="flex justify-center">
                    <img src={loader} alt="loader" className="loader" />
                </div>
            ) :
                <div className="">
                    <div className="title-container text-white">
                        <h1 className="text-center text-3xl font-bold mb-5">Pick an Avatar as your profile picture</h1>
                    </div>
                    <div className="flex gap-8">
                        {avatars.map((avatar, index) => {
                            return (
                                <div
                                    className={`avatar ${selectedAvatar === index ? "selected" : ""
                                        }`}
                                >
                                    <img
                                        src={`data:image/svg+xml;base64,${avatar}`}
                                        alt="avatar"
                                        key={avatar}
                                        onClick={() => setSelectedAvatar(index)}
                                    />
                                </div>
                            );
                        })}
                    </div>
                    <div className="flex justify-center">
                        <button onClick={setProfilePicture} className="submit-btn mt-5">
                            Set as Profile Picture
                        </button>
                    </div>
                </div>
            }
        </div>
    );
};

export default SetAvatar;