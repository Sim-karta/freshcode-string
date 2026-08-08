const citiesStr = "Київ, Львів, Одеса, Харків";

const citiesArr = citiesStr.split(", ");

citiesArr.push("Дніпро");

const newCitiesStr = citiesArr.join(" - ");

console.dir(newCitiesStr);
