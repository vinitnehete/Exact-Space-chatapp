// import React, { useState } from "react";
// import Picker from "emoji-picker-react";

// const App1 = () => {
//   const [chosenEmoji, setChosenEmoji] = useState(null);

//   const onEmojiClick = (event, emojiObject) => {
//     setChosenEmoji(emojiObject);
//   };

//   // console.log(chosenEmoji.srcElement);

//   return (
//     <div>
     

//       <Picker onEmojiClick={onEmojiClick} />

      
//     </div>
//   );
// };

// export default App1;


import React, { useState } from "react";
import Picker from "emoji-picker-react";

const App1 = ({ onEmojiClick }) => {
  return (
    <div>
      <Picker onEmojiClick={onEmojiClick} />
    </div>
  );
};

export default App1;

