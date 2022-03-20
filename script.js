let name = prompt("What is your name?");
let minigolf = prompt ("Hi "+ name + "! Would you like to play 3 or 6 holes today?");
let par = 0
for (let i = 1; i <= minigolf; i++) {
    let threeholes = Number( prompt("How many putts for hole "+i+"? (Par is 3?) " ) );
    par = par + threeholes 
    par = par - 3  
  }
  if (par === 0) {
    console.log ("Good game, "+ name + ". Your total par was: 0.");
    } 
    else if (par > 0) {
      console.log ("Nice try, "+ name + "... Your total par was: +" + par + ".");
    } else if (par < 0) {
      console.log ("Great job, "+ name + "! Your total par was: " + par +".");
    }  

console.log (name);


