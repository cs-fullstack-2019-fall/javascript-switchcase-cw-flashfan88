// Problem 1:
// Put the start of your program in a main function.
// Ask the user to enter a number to print.
// Create a switch case that prints 1 if you enter 1, 2 if you enter 2, 3 if you enter 3, 4 if you enter 4, and 5 if you enter 5.

// let userInput = prompt("Enter a number");
// {
//     switch (userInput)
//     {
//         case "1":
//             alert("1");
//             break;
//         case "2":
//             alert("2");
//             break;
//         case "3":
//             alert("3");
//             break;
//         case "4":
//             alert("4");
//             break;
//         case "5":
//             alert("5");
//             break;
//     }
// }

// Problem 2:
// Put the start of your program in a main function.
// Ask the user to enter a 3 digit binary number.
// Create a switch case that prints 1 if you enter 1, 2 if you enter 10, 3 if you enter 11, 4 if you enter 100, and 5 if you enter 101.


var q;
let userinput2 = prompt("Enter any number 1-5");
while (userinput2 !== q)
{
    userinput2 = prompt("Enter a 1-5 Number");
    switch (userinput2)
    {
        case "1":
            alert("1");
            break;
        case "2":
            alert("10");
            break;
        case "3":
            alert("11");
            break;
        case "4":
            alert("100");
            break;
        case "5":
            alert("101");
            break;
        default:
            alert("Not Valid");
    }
}


