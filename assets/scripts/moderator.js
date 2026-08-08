function censorFirstLetter(text) {
    const wordsArray = text.split(" ");

    const moderatedText = wordsArray.map((word) => {
        return "*" + word.slice(1, word.length);
    });

    return moderatedText.join(" ");
}

console.log(
    censorFirstLetter(
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, ullam!",
    ),
);
