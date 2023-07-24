import { useState } from "react";

import "./App.css";
import App1 from "./App1";
function App() {
  function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex];

    return item;
  }

  // const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  // const handleEmojiClick = (event, emojiObject) => {
  //   console.log(`<img src="${emojiObject.srcElement.src}"  />`)
  //   const emoji = `<img src="${emojiObject.srcElement.src}"  />`
  //   setMessageText((prevMessageText) => prevMessageText + emoji);
  // };

  // const handleToggleEmojiPicker = () => {
  //   setShowEmojiPicker((prevShowEmojiPicker) => !prevShowEmojiPicker);
  // };

  const array = ["Alan", "Bob", "Carol", "Dean", "Elin"];

  const [message, setMessage] = useState([]);

  const [messageText, setMessageText] = useState("");

  const handleChange = (e) => {
    setMessageText(e.target.value);
  };

  console.log(message);

  const handlSubmit = (e) => {
    e.preventDefault()
    if (messageText === "") return;

    const result = getRandomItem(array);
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes();

    const msg = { text: messageText, rand: result, date: time };
    console.log(msg);
    setMessage([...message, msg]);
    setMessageText("");
  };

  return (
    <div className="App">
      <div className="intro">Introduction</div>

      <div>
        {message.map((item, index) => {
          return (
            <div key={index}>
              <div>
                {" "}
                <span className="log">
                  {item.rand.charAt(0).toUpperCase() +
                    item.rand.charAt(item.rand.length - 1).toUpperCase()}
                </span>{" "}
                <span className="randomId">{item.rand}</span>{" "}
                <span className="date">{item.date}</span>{" "}
              </div>

              <div className="text">{item.text} </div>
            </div>
          );
        })}
      </div>


      <form onSubmit={handlSubmit}>
        <div style={{ position: "relative" }}>
          <input
            placeholder="Type Message"
            value={messageText}
            onChange={handleChange}
            
          ></input>
          {/* <button onClick={handleToggleEmojiPicker}>😊</button>
          {showEmojiPicker && (
            <div >
              <App1 onEmojiClick={handleEmojiClick} />
            </div>
          )} */}
        </div>
      </form>
     


        

    </div>

    
  );
}

export default App;
