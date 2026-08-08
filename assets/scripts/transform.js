const transformArea = document.querySelector(".tranform");
const transformBtn = transformArea.querySelector(".transform-btn");

const citiesStr = "Київ, Львів, Одеса, Харків";

function transformData(str) {
    const arr = str.split(", ");

    arr.push("Дніпро");

    return arr.join(" - ");
}

transformBtn.addEventListener("click", () => {
    const newCitiesStr = transformData(citiesStr);
    console.log("Початкові дані: ", citiesStr);
    console.log("Змінені дані: ", newCitiesStr);
});
