//triangle//
for (let x = "#"; x.length <= 7; x += "#"){
    console.log(x); 
};

//FizzBuzz//
function fizzbuzz() {
    for (let number = 1; number <= 100; number++) {
        if (number % 3 == 0 && number % 5 == 0) {
            console.log("FizzBuzz");
        }
        else if (number % 3 == 0) {
            console.log("Fizz");
        }
        else if (number % 5 == 0) {
            console.log("Buzz");
        }
         else {
            console.log(number);
        }
    }
}
fizzbuzz();

//chessboard//

/*i started trying to create it this way but realised it wouldn't 
work and couldnt thing of another way.*/

function chessboard() {
    for (let line = 0; line.length <= 8; line++) {
       if (line % 2 == 0) {
           {for (let black = "#"; black.length <= 4;)
       console.log(black);}
       } 
       else { 
           {for (let white = " "; white.length <= 4;)
       console.log(white);}

       }
    }
}

/*this is the correct answer. Reading throught it I understand how it works and it is 
very smart and quite simple. i love the way of thinking i just couldnt get there this time*/
let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x+y)  % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);

