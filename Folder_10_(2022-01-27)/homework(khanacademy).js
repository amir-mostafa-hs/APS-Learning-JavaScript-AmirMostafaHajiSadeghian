// khanacademy.org secion DOM events

/*
 ----------------- addEventListener -----------------
 In the addEventListener argument we should not use parentheses for the pass the function, because it call the function .
*/

const buttonEl = document.createElement("button");
buttonEl.id = "btnClick";
buttonEl.textContent = "click me!";

document.body.appendChild(buttonEl);

const onClick = () => (buttonEl.textContent = "Hello");

buttonEl.addEventListener("click", onClick);