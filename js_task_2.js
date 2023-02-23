
var num = prompt("Enter the number to check")
//Perfect number
function perfectnum() {
    let add = 0;
    for (var i = 1; i < num; i++) {

        if (num % i == 0) {
            add += i;
        }
    }
    if (add == num) {
        alert(num + " " + " IS A PERFECT NUMBER")
    } else {
        alert(num + "" + " IS NOT A PERFECT NUMBER")
    }


}
//Factorial program
function factorialnum() {
    var facto = 1;
    var e = 1;
    do {

        facto *= e;
        e++;


    } while (num >= e);
    {
        alert("The factorial of " + num + " is : " + facto);
    }

}
//Fibonacci program
function fibonaccinum() {
    var first = 0;
    var second = 1;
    var third;
    while (num >= first) {
        alert("The febonacci series of " + num + " is : " + first + "\n" + " click multiple times to get the febonacci series of " + num);
        third = first + second;
        first = second;
        second = third;
    }
}



