// alert('Javascript Says Hello');
// console.log function
console.log(2+2);  // 2
console.log(2+'2'); // 22  
console.log('2'+2); // 22
console.log('2'+'2'); // 22
console.log(2 * 2);  // 4
console.log('2'* 2);  // 4
console.log(2 * '2');  // 4
console.log('2' * '2'); // 4

// console.error function
console.error('This is error function in console') // cross mark



// console.warn
console.warn('Javascript warns you -Developer message')  // Warning Symbol



// console.info
console.info('Information for the JS Developer that we have console.info')



// console.table 
// lets create the objects
const data = [
    {
        name: 'Rakshit',
        age:22
    },
    {
        name: 'Jyoti',
        age: 27
    },
    {
        name: 'Prakash',
        age: 25
    },
]

console.table(data)



// console.group
console.group();
console.log(2 * 2);  // 4
console.log('2'* 2);  // 4
console.log(2 * '2');  // 4
console.log('2' * '2'); // 4
console.groupEnd();


console.group();
console.log('A');  // 4
console.log('B');  // 4
console.log('C');  // 4
console.log('D'); // 4
console.groupEnd();




// console.count
console.count('counter')
console.count('counter')


// console.timer
console.time("'Timer'")
console.timeEnd("'Timer'")


function A()
{
    console.trace("Im trying to trace a function")
}

A()

console.clear();


// Assert
const val=5;
console.assert(val===5,'Value is 5');


// adding styles to the console
const styles="background-color:white; color:black; padding:20px;"
console.log("%cHello world",styles)
