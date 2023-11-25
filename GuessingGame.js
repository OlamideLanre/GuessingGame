let TextDisplayDiv = document.querySelector(".TextDisplay");
let Inputfield = document.querySelector(".InputField");
let Message = document.querySelector(".warningMessage");
let gameButton = document.querySelector(".submitBtn");
const correct_Num = Math.floor(Math.random() * 11);
let guess_count = 3;

gameButton.addEventListener("click", GuessTheNumber);

function GuessTheNumber() {
  let inputValue = Inputfield.value;
  if (inputValue === "") {
    Message.innerHTML = "input field cannot be blank";
    setTimeout(() => {
      Message.innerHTML = "";
    }, 2000);
    console.log("working");
  } else if (inputValue != "") {
    while (guess_count > 0) {
      guess_count--;

      if (parseInt(inputValue) === correct_Num) {
        TextDisplayDiv.innerHTML = correct_Num;
        Message.innerHTML = "YOU WIN! YAY!";
        Message.style.color = "rgb(110, 243, 110)";
        Message.style.fontweight = "bold";
        setTimeout(() => {
          location.reload();
        }, 5000);
        break;
      } else if (guess_count > 0) {
        Message.innerHTML = "Oops! try again";
        setTimeout(() => {
          Message.innerHTML = "Guess count left: " + guess_count;
        }, 1000);
        hint();
        break;
      } else {
        Message.innerHTML = "GAME OVER";
        setTimeout(() => {
          Message.innerHTML = "heres the correct number :)";
          TextDisplayDiv.innerHTML = correct_Num;
        }, 2000);

        setTimeout(() => {
          location.reload();
        }, 5000);
      }
    }
  }
  function hint() {
    if (guess_count === 1) {
      if (inputValue > correct_Num) {
        Message.innerHTML = "HINT: Guess lower";
      } else if (inputValue < correct_Num) {
        Message.innerHTML = "HINT: Guess higher";
      }
    }
  }

  Inputfield.value = "";
}
