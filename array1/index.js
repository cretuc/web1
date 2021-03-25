const array = [1,3,6,9,11,23,4,55,99,10];
let item = 0;

// for
for (let item = 0; item < array.length; item++) {
    console.log(array[item]);
}

// for in
for (let item in array) {
    console.log(array[item]);
}

// for of      
for (let item of array) {
    console.log(item);
}

// while
while (item < array.length) {
    console.log(array[item]);
    item++;
}

// do while
item = 0;
do {
    console.log(array[item]);
    item++;
} while (item < array.length);

// forEach
array.forEach((item) => {
    console.log(item);
});

// map
array.map((item) => {
    console.log(item);
});

