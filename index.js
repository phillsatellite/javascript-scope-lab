const burgers = ["Hamburger", "Cheeseburger"];

let featuredDrink = "Strawberry Milkshake";

//function creates a variable and assigns it the FlatBurger Value
function addBurger(){
    const newBurger = "Flatburger";
    burgers.push(newBurger); //Adds Flatburger to the burgers array

    if(true){
        const anotherNewBurger = "Maple Bacon Burger"; //creates a block-scoped variable and assigns its value "Maple Bacon Burger"
        burgers.push(anotherNewBurger); //Adds Maple Bacon Burger to the burgers array
    }
}

//Changes the value of featuredDrink to "The JavaShake"
function changeFeaturedDrink(){
    featuredDrink = "The JavaShake";
}