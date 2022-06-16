const button = document.querySelector("#button");

const removeRedCircle = () => {
  let redCircle = document.querySelector("#red");
  redCircle.remove();
};

button.addEventListener("click", removeRedCircle);
