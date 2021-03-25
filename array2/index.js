const students = [
    {
        name: 'Cristina',
        marks: [8, 9, 5, 6, 10]
    },
    {
        name: 'Ion',
        marks: [5, 9, 5, 7, 8]
    },
    {
        name: 'Andrei',
        marks: [8, 7, 9, 6, 5]
    },
    {
        name: 'Maria',
        marks: [5, 6, 3, 6, 6]
    },
    {
        name: 'Ana',
        marks: [5, 4, 5, 5, 4]
    }
];

// numele si media 
let printMarks = (array) => {
    for (let item of array) {
        console.log(item.name + ': ' + item.average);
    }
}

// nota medie
let medieMark = (students) => {
    const marks = [];
    for (let i in students) {
        let sum = 0;
        for (let j in students[i].marks) {
            sum += students[i].marks[j];
        }
        const student = {};
        student.name = students[i].name;
        student.average = sum / students[i].marks.length;
        marks.push(student);
    }
    return marks;
}
printMarks(medieMark(students));

// media mai mica decit 5
let medieMark = (students) => {
    const studentsMarks = medieMark(students);
    const array = [];
    for (let item of studentsMarks) {
        if (item.average < 5) {
            array.push(item.name);
        }
    }
    return array;
}

console.log('Studentii cu nota medie mai mica decit 5:' + medieFive(students).map((value) => {
    return ' ' + value;
}));

// student cu nota minima si maxima
let Mark = (students) => {
    const studentsMarks = medieMark(students);
    let nameMin = '';
    let nameMax = '';
    let min = 0;
    let max = 0;
    for (let item of studentsMarks) {
        if (item.average > max) {
            max = item.average;
            nameMax = item.name;
        }
        if (item.average < max) {
            min = item.average;
            nameMin = item.name;
        }
    }
    console.log('Nota minima: ', min, 'a studentului', nameMin);
    console.log('Nota maxima: ', max, 'a studentului', nameMax);
}
Mark(students);
