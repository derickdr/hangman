import {selectWord} from './selectWord.js';

const wordArray = selectWord.split('');

function generateUnderline {
    for( let i = 0; i < wordArray.length(); i++ ) {
        let wordLetter = document.createElement('h2');
        wordLetter.setAttribute('class', 'word-letter');
    };
}

// i need to generate an h2 with a class of word-letter in word-row for every letter in word
// i need to select every letter in array and insert it into aforementioned h2
// "hang", h pressed, display h
// if the key matches any of the words in array