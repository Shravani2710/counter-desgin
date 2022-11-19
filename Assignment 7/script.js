const counter = document.querySelector("#counter");
const buttons = document.querySelectorAll(".button");

let count = 0;

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;

    if (styles.contains("increase")) {
      count++;
      counter.classList.add("up");

      setTimeout(() => {
        counter.classList.remove("up");
      }, 10);
    } 
    
    else if (styles.contains("decrease")) {
      count--;
      counter.classList.add("down");

      setTimeout(() => {
        counter.classList.remove("down");
      }, 10);
    } 
    
    else {
      count = 0;
    }

    if (count > 0) {
      counter.style.color = "green";
    }

    if (count < 0) {
      counter.style.color = "red";
    }

    if (count === 0) {
      counter.style.color = "grey";
    }

    counter.textContent = count;
  });
});
