import React, {useState, useEffect} from 'react' 
import WordList from '../components/WordList'

const WordContainer = () => {
    const [words, setWords] = useState([]);

    useEffect(() => {
        getWords();
    }, []);
 
    const getWords = function() { 
        fetch("https://random-word-api.herokuapp.com/word?number=10") 
            .then(res => res.json())
            // .then(wordsData => console.log(wordsData))
            .then(wordsData => setWords(wordsData)) 
  }

  return (
      <>
      <h2>Some Random Words</h2>  
      <WordList words={words}/>
      </>
  )
}

export default WordContainer;