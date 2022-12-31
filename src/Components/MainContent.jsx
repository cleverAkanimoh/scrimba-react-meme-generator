import { useState } from 'react';

import memesData from "../memeData";

const MainContent = () => {

    const [url, setUrl] = useState(memesData);

    const getMeme = e => {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        let url = memesArray[randomNumber].url
    }
    const displayMeme = memesArray.map(
        meme => <img key={id} id="meme-display" src={url} alt="meme-image" />
    )

    return (
        <section id="container">
            <div id="form-container">
                <input type='text' placeholder="enter top text" />
                <input type='text' placeholder="enter bottom text" />
                <button id="form-btn" onClick={getMeme}>Get a new meme image</button>
            </div>
            {displayMeme}
        </section>
    );
}

export default MainContent;