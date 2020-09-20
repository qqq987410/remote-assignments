/*================================================
                        第1題
=================================================*/
//Complete the function below to find the ​max number​ of the passing array of numbers.
//Reminder:​ you ​cannot​ use built-in Math.max() or sort() to complete this assignment.


function max(numbers) {
    // your code here, for-loop method preferred
    let maxNum= numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > maxNum) {
            maxNum = numbers[i];
        }
    }
    console.log("Max Number is : ", maxNum);
    return maxNum;
}
max([1, 2, 4, 5]);// result to 5
max([5, 2, 7, 1, 6])// result to 7
max([-1, 3, 2, 0])// result to 3
max([-1, -13, -120, -99])// result to 3


/*================================================
                        第2題
=================================================*/

//In JavaScript, there are many different sets of syntax for creating objects. 
//In the code below,function parameters are encapsulated into an object, 
//try using at least ​two ways​ to create aproper object as a parameter of the calculate function.

function calculate(args) {
    let result;
    if (args.op === "+") {
        result = args.n1 + args.n2;
    } else if (args.op === "-") {
        result = args.n1 - args.n2;
    } else {
        result = "Not supported";
    } return result;
}// Try to call calculate function correctly

/*------------------------------------------------
                        Way One
------------------------------------------------- */
function goal(parameter) {
    let object = {
        op: parameter,
        n1: 3,
        n2: 1
    }
    return object;
}

console.log( "goal('+')=", calculate( goal("+")) );
console.log( "goal('-')=", calculate( goal("-")) );
console.log( "goal(   )=", calculate( goal()) );
/*------------------------------------------------
                        Way Two
------------------------------------------------- */
class Target {
    constructor(op, n1, n2) {
        this.op = op;
        this.n1 = n1;
        this.n2 = n2;
    }
}
let test_1 = new Target("+", 30, 10);
let test_2 = new Target("-", 30, 10);
let test_3 = new Target("", 30, 10);
console.log("test_1=", calculate(test_1));
console.log("test_2=", calculate(test_2));
console.log("test_3=", calculate(test_3));

/*  
    For example, if we have an add function like this:

    function add(args){
        return args.n1+args.n2;
    }

    We can call it by passing an object created by JSON literal:
        add({n1:3, n2:4}); // your first way.

    You should apply constructor or class as another way to create a proper object.

    add(用類別或建構式產生的物件);  // your another way
*/

/*================================================
                        第3題
=================================================*/
//Complete the function below to calculate the average price of all the products

function avg(data) {
    // your code here
    let sum = 0;
    let averagePrice;
    for (let i = 0; i < data.size; i++) {
        sum += data.products[i].price;
    }
    averagePrice = sum / data.size;
    console.log("Average Price=", averagePrice);
    return averagePrice;

}
avg({
    size: 3,
    products: [
        {
            name: "Product 1",
            price: 100
        },
        {
            name: "Product 2",
            price: 700
        },
        {
            name: "Product 3",
            price: 250
        }
    ]
});// show the average price of all products

/*================================================
                        第4題 (Oprional)
=================================================*/
//Given an array of integers, return indices of the two numbers such that they add up to aspecific target. 
//You may assume that each input would have exactly one solution, and you may not use the same element twice.

function twoSum(nums, target){
    // your code here
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            if(nums[i]+nums[j] === target){
                return console.log(`[${i}, ${j}]`);
            }
        }
    }
}
twoSum([2, 7, 11, 15], 9);
twoSum([2, 7, 11, 15], 13);
twoSum([2, 7, 11, 15], 17);
twoSum([2, 7, 11, 15], 18);
twoSum([2, 7, 11, 15], 22);
twoSum([2, 7, 11, 15], 26);
    /*
    
    For example:
        twoSum([2, 7, 11, 15], 9);
    Should returns:
        [0, 1]
    Because:
        nums[0]+nums[1] is 9
    
    */