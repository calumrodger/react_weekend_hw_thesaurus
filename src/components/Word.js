import React from 'react';
import './Word.css'

function Word({word, meanings}) {

    const definitions = meanings.map((meaning) => {
        return(<li>{meaning.partOfSpeech[0]}, {meaning.definitions[0].definition}</li>)
    })


  return(
      <>
      <p class="word">{word}</p>
      <p class="definitions">{definitions}</p>
      </>
  )}

export default Word