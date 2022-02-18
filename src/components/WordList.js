import React from 'react';
import Word from './Word';

const WordList = ({words}) => {

    const wordItems = words.map((word, index) => {
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