import React, {useState, useEffect} from 'react' 
import WordList from '../components/WordList'

const WordContainer = () => {
    const [word, setWord] = useState([]);
    const [userInput, setInput] = useState("");

    useEffect(() => {
        if(word === []);
        getWord();
    }, []);
 
    const getWord = function(userInput) { 
        let fetchUrl = (`https://api.dictionaryapi.dev/api/v2/entries/en/${userInput}`)
        fetch(fetchUrl)
            .then(res => res.json())
            // .then(wordsData => console.log(wordsData))
            .then(wordData => setWord(wordData)) 
  }

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

//   const setInputWord = function(input) {
//       setInput(input)
//       console.log(userInput)
//   }


//     const handleSubmit = event => {
//         setInputWord(event.target.value);
//     }


    // const handleSubmit = (event) => {

    //     // console.log(event.target.newWord.value)
    //     fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${userInput}`)
    //     .then(res => res.json())
    //     .then(wordData => setWord(wordData))
    // }


    const fetchFelt = function(){
        fetch("https://api.dictionaryapi.dev/api/v2/entries/en/felt")
        .then(res => res.json())
        .then(wordData => setWord(wordData))
    }
    
  

    return (
      <>
      <h2>Searchable Dictionary</h2> 
     <label>
  Search
  <input name="userInputWord" onChange={handleChange} />
</label>
<button onClick={handleSubmit}>Submit</button>
    <button onClick={fetchFelt}>Look up the word 'felt'!</button>
      <WordList word={word}/>
      </>
  )}


export default WordContainer