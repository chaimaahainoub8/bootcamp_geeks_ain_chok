let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

const displayGroceries = () => {
    groceries.fruits.forEach(fruit => {
        console.log(fruit);
    });
}

const cloneGroceries = () => {
    let user = client;
    client = "Betty";
    console.log(`The original client is now: ${client}`);
    console.log(`The copied user is still: ${user}`);

    let shopping = groceries;
    shopping.totalPrice = "35$";
    shopping.other.paid = false;

    console.log(`The shopping total price is: ${shopping.totalPrice}`);
    console.log(`The original groceries total price is now: ${groceries.totalPrice}`);
    console.log(`Are the original groceries paid? ${groceries.other.paid}`);
}

displayGroceries();
cloneGroceries();