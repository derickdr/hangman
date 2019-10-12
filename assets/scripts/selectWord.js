import {words} from './words.js';

export const selectWord = () => {
    const wordArrayLength = words.length() - 1,
        wordIndex = Math.floor(Math.random() * (wordArrayLength - 0)) + 0;
    return words[wordIndex];
}