import { useState } from 'react';
import defaultmemeImage from "../defaultMemeImage.jpg";
import memesData from "../memeData";

const MainContent = () => {

    const [meme, setMeme] = useState({
        topText: "top text will go here",
        bottomText: "bottom text will go here",
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

    const topTextValueUpdate = () => setMeme(prevMeme => ({
        ...prevMeme,
        topText: 'top text value'
    }))

    const bottomTextValueUpdate = () => setMeme(prevMeme => ({
        ...prevMeme,
        bottomText: 'bottom text value'
    }))

    return (
        <section id="container">
            <div id="form-container">
                <input type='text' onInput={topTextValueUpdate} placeholder="enter top text" />
                <input type='text' onInput={bottomTextValueUpdate} placeholder="enter bottom text" />
                <button id="form-btn" onClick={getMemeUrl}>Get a new meme image</button>
            </div>
            <picture>
                <p id="topText">{ meme.topText }</p>
                <p id="bottomText">{ meme.bottomText }</p>
                <img id="meme-display" src={ meme.randomImage } alt="meme-image" />
            </picture>
        </section>
    );
}

export default MainContent;