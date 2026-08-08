const moderatorArea = document.querySelector(".moderator");
const moderationBtn = moderatorArea.querySelector(".moderation-btn");

function censorFirstLetter(text) {
    const wordsArray = text.split(" ");

    const moderatedText = wordsArray.map((word) => {
        return "*" + word.slice(1, word.length);
    });

    return moderatedText.join(" ");
}

moderationBtn.addEventListener("click", () => {
    let text = prompt(
        'Введіть текст, який хочете відправити модератору\n(Або натисніть "відміна" для використання тексту за замовченням)',
    );

    text = text
        ? text
        : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, ullam!";

    console.log(censorFirstLetter(text));
});
