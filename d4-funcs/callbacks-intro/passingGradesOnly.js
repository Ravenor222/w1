const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];



const cbFunction = function(numbers) {
    return(numbers >= 70);
}

const passingMarks = grades.filter(cbFunction);


console.log(cbFunction(passingMarks));
console.log("these marks are that are passing are "+ passingMarks)



