let arr = [1,2,4,5];
console.log(arr.length);
arr.push(6);
console.log(arr);
arr.unshift(0);
console.log(arr);
arr.splice(4,1,3);
console.log(arr);
arr.pop();
console.log(arr);
arr.shift();
console.log(arr);

let sum =0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    
}
console.log(`the sum of the elemnts is ${sum}`);

// Reverse the array element (using loop, don’t use reverse function).
let reverseArr=[];
for (let i = arr.length-1; i >=0  ; i--){
    reverseArr.push(arr[i]);
}
console.log(` the reverse array is ${reverseArr}`);


//Display the even numbers on the screen

console.log(arr.slice(1,3));

//Merge the array with the following array [5,7,5].
console.log(arr.concat(5,7,5));

//Count how many elements in the array (don’t use “length” property).
let arr2=[1, 2, 4, 3, 5, 7, 5];
let counter=0;
while (arr2[counter] !==undefined) {
    counter++
}
console.log(counter);

//  Count how many times the number 5 is repeated.
let counter2=0;
for (let i = 0; i < arr2.length; i++) {
    if(arr2[i] == 5){
        counter2++; 
}
}
console.log(`number 5 repeated ${counter2} times`);
    
// Find the minimum number in the array.
let minNumber=arr2[0];
for (let i = 1; i < arr2.length; i++) {
    if (arr2[i]<minNumber) {
        minNumber= arr2[i];
    }
}
    console.log(minNumber);



    // Find the max number in the array.
let maxNumber=arr2[0];
for (let i = 1; i < arr2.length; i++) {
    if (arr2[i] > maxNumber) {
        maxNumber= arr2[i];
    }
}
    console.log(maxNumber);
    
