/*
To DO
* Create a JavaScript array to store your 3 favorite dish.
* List each of them in the console on their own separate line.
* Display the count of your favorite dishes.
* Add a 4th dish to the array.
* Display the count once more within a sentence such as "I have x favorite dishes."
* Remove the 2nd one!
* Sort them in alphabetical order.
* Display them once more but this time as an array in the console.
* Display the count again!
*/
var favDishes = ["Tartare de saumon", "Gallo Pinto", "Souris d'Agneau"];
console.log("My " + favDishes.length + " favorite dishes are: ");

for (let i = 0; i < favDishes.length; i++) {
    console.log(favDishes[i]);
  } 

favDishes.push("Carré d'agneau");
console.log("In fact, I have " + favDishes.length + " favorite dishes, which are the following ones: ");
console.log(favDishes);

favDishes.splice(1, 1);
favDishes.sort();
console.log("At the end, I have " + favDishes.length + " favorite dishes, which are, in alphabetical order: ");
console.log(favDishes);
