function gradingMarks(marks) {
    const x = marks;
if (x < 0 || x > 100) {
    return "invalid marks"; //invalid marks if below 0 and above 100
} else if (x > 79) {
    return 'A';
} else if (x >= 60) {
    return 'B';
} else if (x >= 49) {
    return 'C';
} else if (x >= 40) {
    return 'D';
} else {
    return 'E';
}
}
let marks = prompt("Enter student marks (0-100);") //asks user to input marks
marks = Number(marks);
if (isNaN(marks)) {
    console.log("Invalid input, enter a numerical value.");
} else {
    console.log(gradingMarks(marks));
}