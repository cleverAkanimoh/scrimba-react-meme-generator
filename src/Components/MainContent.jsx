import { useState } from 'react';

import memesData from "../memeData";

const MainContent = () => {

    const [meme, setMeme] = useState(memesData);

    const getMeme = async e => {

        const memesArray = meme.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        let url = memesArray[randomNumber].url
        console.log(memesArray)
    }
    return (
        <section id="container">
            <div id="form-container">
                <input type='text' placeholder="enter top text" />
                <input type='text' placeholder="enter bottom text" />
                <button id="form-btn" onClick={getMeme}>Get a new meme image</button>
            </div>
            <img id="meme-display" src='{url}' alt="meme-image" />
        </section>
     );
}
 
export default MainContent;