export const randomWord = async () => {
    const word = await fetch(`https://random-word-api.herokuapp.com/word?lang=es`);
    return word.json();
};