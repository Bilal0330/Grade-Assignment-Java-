

var userName = prompt("Insert you name :");
var rollNo = prompt("Insert you Roll No :");
var accounting = +prompt("Insert you English Marks :");
var economic = +prompt("Insert you Urdu Marks :");
var bmathematics  = +prompt("Insert you Physics Marks :");
var pst = +prompt("Insert you chemistry Marks :");
var english = +prompt("Insert you Mathematics Marks :");


var total = accounting + economic + bmathematics + pst + english;
var percentage = (total / 500) * 100;


var grade;
if (percentage >= 90 && percentage < 100) {
    grade = 'A+';
}

else if (percentage >= 80 && percentage < 90) {
    grade = 'A';
}

else if (percentage >= 70 && percentage < 80) {
    grade = 'B';
}

else if (percentage >= 60 && percentage < 70) {
    grade = 'C';
}

else if (percentage >= 50 && percentage < 60) {
    grade = 'D';
}
else if (percentage < 50) {
    grade = 'Fail';
}

else {
    grade = ("please type correct marks");
}


alert("Your Name : " + userName + " \nTotal Marks : " + total + " \nPercentage : " + percentage + " \nGrade : " + grade);