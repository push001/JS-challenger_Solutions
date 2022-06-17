const input = document.getElementById("input");
input.addEventListener("input", () => {
  // type in your code here
  let inputText = input.value;
  let pattern = new RegExp(inputText);

  let listItems = document.querySelectorAll("#list li");

  for (let i = 0; i < listItems.length; ++i) {
    let listItem = listItems[i];

    if (pattern.test(listItem.innerText)) {
      listItem.removeAttribute("hidden", "");
    } else {
      listItem.setAttribute("hidden", "");
    }
  }
});
