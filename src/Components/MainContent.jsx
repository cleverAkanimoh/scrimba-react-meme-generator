import { useState } from 'react';

import memesData from "../memeData";

const MainContent = () => {

    const [memeUrl, setMemeUrl] = useState("");

    const getMemeUrl = () => {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeUrl(memesArray[randomNumber].url)
    }

    return (
        <section id="container">
            <div id="form-container">
                <input type='text' placeholder="enter top text" />
                <input type='text' placeholder="enter bottom text" />
                <button id="form-btn" onClick={getMemeUrl}>Get a new meme image</button>
            </div>
            <img id="meme-display" src={memeUrl} alt="meme-image" />
        </section>
    );
}

export default MainContent;