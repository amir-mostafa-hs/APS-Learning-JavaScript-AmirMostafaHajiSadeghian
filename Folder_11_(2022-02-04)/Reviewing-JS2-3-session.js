document.body.style.margin = "0";
document.body.style.width = "100vw";
document.body.style.height = "100vh";
document.body.style.display = "grid";
document.body.style.gridTemplateColumns = "2fr 1fr";
document.body.style.background = "linear-gradient(to right, #232526, #414345)";

const getShowEvent = document.getElementById("showEvent");
getShowEvent.style.background = "linear-gradient(60deg, #ff6e7f, #bfe9ff)";
getShowEvent.style.display = "flex";
getShowEvent.style.justifyContent = "center";
getShowEvent.style.alignItems = "center";
getShowEvent.style.margin = "20px";
getShowEvent.style.padding = "10px";
getShowEvent.style.borderRadius = "10px";

const getAsideEvent = document.getElementById("event");
getAsideEvent.style.backgroundColor = "rgb(50,50,50,0.4)";
getAsideEvent.style.padding = "10px";
getAsideEvent.style.borderRadius = "5px";
getAsideEvent.style.fontSize = "1.5rem";

const getContent = document.getElementById("content");
getContent.style.background =
  "linear-gradient(45deg, rgba(174,238,227,1) 0%, rgba(230,191,181,1) 50%, rgba(188,148,233,1) 100%)";
getContent.style.margin = "20px";
getContent.style.padding = "10px";
getContent.style.display = "grid";
getContent.style.gap = "10px";
getContent.style.borderRadius = "10px";

function createAsideElemForTest(text) {
  const aside = document.createElement("aside");
  const randomColor = () => Math.floor(Math.random() * 256);
  aside.style.backgroundColor = `rgb(${randomColor()},${randomColor()},${randomColor()})`;
  aside.style.width = "100px";
  aside.style.height = "100px";
  aside.style.border = `solid rgb(${randomColor()},${randomColor()},${randomColor()})`;
  aside.style.borderRadius = "20px";
  aside.textContent = text;
  aside.style.fontSize = "1.2rem";
  aside.style.display = "flex";
  aside.style.justifyContent = "center";
  aside.style.alignItems = "center";
  aside.style.color = "white";
  return aside;
}

const asideForClickEvt = createAsideElemForTest("Click Event");
asideForClickEvt.onclick = function () {};
getContent.appendChild(asideForClickEvt);
