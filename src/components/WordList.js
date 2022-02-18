import React from 'react';
import Word from './Word';

const WordList = ({word}) => {

    const wordItems = word.map((word, index) => {
      return<Word word={word.word} partOfSpeech={word.meanings.partOfSpeech} meanings={word.meanings} key={index}/>
    //   console.log(<Word word={word.word} partOfSpeech={word.partOfSpeech} meanings={word.meanings} key={index}/>)
    })
    
  return (
    <div>
    <ul>
      {wordItems}
    </ul>
  </div>
  )
}

export default WordList;  