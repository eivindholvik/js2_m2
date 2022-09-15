# Extra tasks for reduce

## Reduce 1

A boat has a fuel tank of 340 liters. Every liter spent on a trip is logged in an array (litersSpent[]). The boat has to refill its tank when the tank is below 20% capacitiy.

Make a function that accepts the array litersSpent[], maxCapasity and percentEmptyThreshold and returns a boolean if the boat has to refill its tank.

Hint: Use the reduce method.

Test arrays:

const litersSpent = [100, 100, 100];
//Expect true

const litersSpent = [10, 14 , 24, 12, 54, 102, 43];
//Expect false

const litersSpent = [200, 0];
//Expect false

## Reduce 2

Given a list of objects, where the objects contains a schoolClass and information about its size and number of teachers. The school is going on a camping trip, but each class decided for themselves if they are going or not, shown in the property isCamping. The schoolClass objects also contains the property numTeachersCamping.

Extra task: If numTeachersCamping === 0, the class should not be able to join.

Use the recude method on the schoolClasses array, and find out how many students and teachers are going camping.

const schoolClasses = [
{numberOfStudents: 23,
numberOfTeachers: 2,
isCamping: true,
numTeachersCamping: 0},
{numberOfStudents: 17,
numberOfTeachers: 1,
isCamping: true,
numTeachersCamping: 1},
{numberOfStudents: 33,
numberOfTeachers: 4,
isCamping: false,
numTeachersCamping: 0},
{numberOfStudents: 25,
numberOfTeachers: 3,
isCamping: true,
numTeachersCamping: 2},
{numberOfStudents: 19,
numberOfTeachers: 1,
isCamping: true,
numTeachersCamping: 1},
]
