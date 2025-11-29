console.log('code works')

/*
Exercise 1: Define an empty array

1) Create an empty array and assign it to a variable called `foods`.

Exercise 1 has been completed for you:
*/

const foods = [];

console.log('Exercise 1 result:', foods);


/*
Exercise 2: Add strings to the array

1) Add 'pizza' and 'cheeseburger' to the `foods` array. 

Note: 'pizza' should be the first item in the array, followed by 'cheeseburger'.

Complete Exercise 2 in the space below:
*/

console.log('Exercise 2 result:', foods);

foods.unshift('pizza', 'cheeseburger');

console.log(foods);


/*
Exercise 3: Insert at the beginning

1) Insert the string 'taco' at the beginning of the `foods` array.

Complete Exercise 3 in the space below:
*/

foods.unshift('taco')

console.log('Exercise 3 result:', foods);


/*
Exercise 4: Access an array element

1) Retrieve the 'pizza' string from the array based on its position (index) in
   the array.  

2) Assign it to a variable called `favFood`.

Complete Exercise 4 in the space below:
*/

let favFood = foods[1];

console.log('Exercise 4 result:', favFood);

// splice(start, deleteCount)
// splice(start, deleteCount, item0)
// splice(start, deleteCount, item0, item1)

// Example 1 — Remove one item
let testFoods1 = ['apple', 'banana', 'cookie', 'donut'];

testFoods1.splice(2, 1); // remove 'cookie'

console.log(testFoods1);

// Example 2 — Add an item without deleting
let testFoods2 = ['apple', 'banana', 'cookie', 'donut'];

testFoods2.splice(1, 0, 'grapes'); // insert 'grapes' at index 1

console.log(testFoods2);

// Example 3 — Replace an item

let testFoods3 = ['apple', 'banana', 'cookie', 'donut'];

testFoods3.splice(3, 1, 'muffin'); // replace 'donut' with 'muffin'

console.log(testFoods3);


/*
Exercise 5: Insert an element between two others

1) Insert the string 'tofu' between 'pizza' and 'cheeseburger' in the array.

Complete Exercise 5 in the space below:
*/
console.log('foods array:', foods)

// foods array: ['taco', 'pizza', 'cheeseburger']

foods.splice(2, 0, 'tofu')

console.log('Exercise 5 result:', foods);

// Exercise 5 result: ['taco', 'pizza', 'tofu', 'cheeseburger']


/*
Exercise 6: Replace elements

1) Replace 'pizza' in the `foods` array with 'sushi' and 'cupcake'.

Complete Exercise 6 in the space below:
*/

foods.splice(1, 1, 'sushi', 'cupcake')

console.log('Exercise 6 result:', foods);

// Exercise 6 result: ['taco', 'sushi', 'cupcake', 'tofu', 'cheeseburger']


