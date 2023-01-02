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

    const TextValueUpdate = e => {
        const {name, value} = e.target
        setMeme(prevMeme => ({
        ...prevMeme,
        [name]: value
    }))
}

    return (
        <section id="container">
            <div id="form-container">
                <input 
                    type='text'
                    name='topText' 
                    onInput={TextValueUpdate} 
                    placeholder="enter top text"
                    value={meme.topText}
                />
                <input 
                    type='text' 
                    name='bottomText'
                    onInput={TextValueUpdate} 
                    placeholder="enter bottom text"
                    value={meme.bottomText}
                />
                <button id="form-btn" onClick={getMemeUrl}>Get a new meme image</button>
            </div>
            <picture>
                <p id="topText">{meme.topText}</p>
                <p id="bottomText">{meme.bottomText}</p>
                <img id="meme-display" src={meme.randomImage} alt="meme-image" />
            </picture>
        </section>
    );
}

export default MainContent;