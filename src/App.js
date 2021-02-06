import React, { useState } from "react";
import "./styles.css";
import "./emo.png";

//  step 4 is creating database dictionary
const emojiDictionary = {
  "👍": "Thumbs Up",
  "😀": "Grinning Face",
  "😶": "Speechless Face",
  "🙁": "Sad Face",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "😋": "Face Savoring Food",
  "🤫": "Shushing Face",
  "😐": "Neutral Face",
  "😏": " Smirking Face",
  "🤩": "Star-Struck"
};

// // step 8, converting the object dictionary into an array,
// // so that it can be displayed in console all togther
// console.log(Object.keys(emojiDictionary));

// step 9, same as step 8, but we want to display emojis on screen
// for that we cannot display objects directly
//i.e we cannot use map() function on objects, it can only be
// used on arrays and lists, so we convert it into an array
const emojiesWeKnow = Object.keys(emojiDictionary);

export default function App() {
  // step 5, so that things can be updated on screen with every change
  let [meaning, setMeaning] = useState("");

  // step 2 is creating the function
  function emojiInputHandler(event) {
    // step 3
    // console.log(event.target.value);

    // step 6
    const userInput = event.target.value;
    meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      // console.log("Not in DB")
      setMeaning("Not present in our database");
    } else {
      // console.log("present in DB", meaning)
      setMeaning(meaning);
    }
  }

  //  method 2 to write emojiInputHandler() function

  // function emojiInputHandler(event){
  //   const meaning = event.target.value;

  //   if(meaning in emojiDictionary) {
  //     setMeaning(emojiDictionary[meaning]);
  //   } else {
  //     setMeaning("Not present in the DB")
  //   }
  // }

  // step 11
  function emojiClickHandler(emojies) {
    // console.log(emojies);

    //again you need to do setMeaning to set the output on the same place
    // where is was being displayed after entering an emoji as input
    meaning = emojiDictionary[emojies];
    setMeaning(meaning);
  }

  return (
    <div>
      <h1 class="header">🤩 Emoji sentiment analyzer 🤩</h1>

      {/* step 1 */}
      <h3>
        Enter an Emoji :
        <input onChange={emojiInputHandler} />
      </h3>

      {/* step 7 */}
      <h2 id="output"> {meaning} </h2>

      {/* step 10, displaying all the emojies on screen */}
      <h3> Select an emoji </h3>
      {emojiesWeKnow.map((emojies) => {
        return (
          <span
            onClick={() => emojiClickHandler(emojies)}
            style={{
              fontSize: "2rem",
              paddingTop: "0.5rem",
              cursor: "pointer"
            }}
          >
            {emojies}
          </span>
        );
      })}
      <div class="footer">
        Where words alone are not used to express feelings, there emoji's are
        used.
      </div>
    </div>
  );
}
