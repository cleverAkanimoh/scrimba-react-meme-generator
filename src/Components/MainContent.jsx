import { useState } from 'react';

import defaultmemeImage from "../defaultMemeImage.jpg";
import memesData from "../memeData";

const MainContent = () => {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: defaultmemeImage
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
            <picture>
                <img id="meme-display" src={meme.randomImage} alt="meme-image" />
            </picture>
        </section>
    );
}

export default MainContent;