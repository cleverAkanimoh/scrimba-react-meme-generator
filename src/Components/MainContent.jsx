const MainContent = () => {
    return ( 
        <section id="container" >
            <form id="form-container">
                <input type='text' placeholder="enter top text" />
                <input type='text' placeholder="enter bottom text" />
                <button id="form-btn" >Get a new meme image</button>
            </form>
            <div id="meme-display"></div>
        </section>
     );
}
 
export default MainContent;