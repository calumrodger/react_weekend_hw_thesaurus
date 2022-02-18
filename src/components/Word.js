import React from 'react';

function Word({word, meanings}) {

    const definitions = meanings.map((meaning) => {
        return(<li>{meaning.partOfSpeech[0]}, {meaning.definitions[0].definition}</li>)
    })


  return(
      <>
      <p>{word}</p>
      {definitions}
      </>
  )}

export default Word