import React, {useState, useEffect} from 'react' 
import WordList from '../components/WordList'
import './WordContainer.css'

const WordContainer = () => {
    const [word, setWord] = useState([]);
    const [userInput, setInput] = useState("placeholder");

    useEffect(() => {
        if(word === []);
        getWord(userInput);
    }, []);
 
    const getWord = function(userInput) { 
        let fetchUrl = (`https://api.dictionaryapi.dev/api/v2/entries/en/${userInput}`)
        fetch(fetchUrl)
            // .then(res=>console.log(res))
            .then((res) => res.json())
            .then(wordData => setWord(wordData)) 
            // .catch(err => setWord([]));
            
  }

//   const getWord = function(userInput) { 
//     let fetchUrl = (`https://api.dictionaryapi.dev/api/v2/entries/en/${userInput}`)
//     fetch(fetchUrl)
//         // .then(res=>console.log(res))
//         .then((res) => {
//           if((res.ok)) return res.json()
//           else return("no such word")
//         .then(wordData => setWord(wordData)) 
//         // .catch(err => setWord([]));
        
// })

  const handleChange = (event) => {
    setInput({
      [event.target.name]: event.target.value.trim()
    });
  };
  
  const handleSubmit = (event) => { 
    event.preventDefault()
    console.log(userInput);
    const wordAsString = (JSON.stringify(userInput))
    console.log(wordAsString);
    const topTrimmedString = wordAsString.substr(18);
    console.log(topTrimmedString);
    const trimmedString = topTrimmedString.slice(0, -2 );
    console.log(trimmedString);
    getWord(trimmedString);
  };

    // const fetchFelt = function(){
    //     fetch("https://api.dictionaryapi.dev/api/v2/entries/en/felt")
    //     .then(res => res.json())
    //     .then(wordData => setWord(wordData))
    //     .catch(err => console.error);
    // } 
    
  

    return (
      <>
      <div class="search">
     <label>
  <span class="search-label">Search: </span>
  <input name="userInputWord" onChange={handleChange} />
</label>
<button onClick={handleSubmit}>Go</button>
</div>
    {/* <button onClick={fetchFelt}>Look up the word 'felt'!</button> */}
    <div class="word-list">
      <WordList word={word}/>
      </div>
      </>
  )}
    
export default WordContainer