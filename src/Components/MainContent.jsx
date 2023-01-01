import { useState } from 'react';

import memesData from "../memeData";

const MainContent = () => {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemeImages, setAllMemeImages] = useState(memesData)

    const getMemeUrl = () => {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    return (
        <section id="container">
            <div id="form-container">
                <input type='text' placeholder="enter top text" />
                <input type='text' placeholder="enter bottom text" />
                <button id="form-btn" onClick={getMemeUrl}>Get a new meme image</button>
            </div>
            <img id="meme-display" src={meme.randomImage} alt="meme-image" />
        </section>
    );
}

export default MainContent;