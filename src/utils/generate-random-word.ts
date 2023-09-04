export const  generateRandomWord = () => {
    const alphabet: string = "abcdefghijklmnopqrstuvwxyz";

    const wordLength: number = Math.floor(Math.random() * 9) + 2; // Длина слова от 2 до 10 символов

    return Array.from({ length: wordLength }, () => {
        const randomIndex: number = Math.floor(Math.random() * alphabet.length);
        return alphabet[randomIndex];
    }).join("");
}