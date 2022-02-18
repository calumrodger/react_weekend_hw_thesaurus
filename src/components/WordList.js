import React from 'react';
import Word from './Word';

const WordList = ({words}) => {

    const wordItems = words.map((word, index) => {
      return <Word word={word} key={index}/>
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