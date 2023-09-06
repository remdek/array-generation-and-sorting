import { getRandomNumber } from '@/utils/get-random-number';

export const  generateRandomWord = () => {
    const alphabet: string = "abcdefghijklmnopqrstuvwxyz";
    const wordLength: number = getRandomNumber(2, 10); // Длина слова от 2 до 10 символов


    return Array.from({ length: wordLength }, () => {
        const randomIndex: number = Math.floor(Math.random() * alphabet.length);
        return alphabet[randomIndex];
    }).join("");
}