import React, {useState, useEffect} from 'react' 
import WordList from '../components/WordList'

const WordContainer = () => {
    const [word, setWord] = useState([]);

    useEffect(() => {
        getWord();
    }, []);
 
    const getWord = function() { 
        fetch("https://api.dictionaryapi.dev/api/v2/entries/en/placeholder")
            .then(res => res.json())
            // .then(wordsData => console.log(wordsData))
            .then(wordsData => setWord(wordsData)) 
  }


    const handleSubmit = function(){
        fetch("https://api.dictionaryapi.dev/api/v2/entries/en/click")
        .then(res => res.json())
        .then(wordsData => setWord(wordsData))
    }


    const fetchFelt = function(){
        fetch("https://api.dictionaryapi.dev/api/v2/entries/en/felt")
        .then(res => res.json())
        .then(wordsData => setWord(wordsData))
    }
    
  

  return (
      <>
      <h2>Searchable Dictionary</h2> 
      <form id="form">
      <label>Word:</label>
      <input type="text" id="chosenWord"></input>
      <button type="submit" value="newWord" onClick={handleSubmit}>Go</button>
    </form> 
    <button onClick={fetchFelt}>Look up the word 'felt'!</button>
      <WordList word={word}/>
      </>
  )
}

export default WordContainer;