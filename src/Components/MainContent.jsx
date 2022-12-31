import memesData from "../memeData";

const MainContent = () => {

    const getMeme = async e => {
        // let url = ``;

        e.preventDefault()
        let response = fetch(memesData);
        let data = response.json();
        console.log(data)
    }
    return (
        <section id="container" >
            <form id="form-container" onSubmit={getMeme}>
                <input type='text' placeholder="enter top text" />
                <input type='text' placeholder="enter bottom text" />
                <button id="form-btn">Get a new meme image</button>
            </form>
            <div id="meme-display"></div>
        </section>
     );
}
 
export default MainContent;