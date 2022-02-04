function createDivElemForTest() {
  const div = document.createElement("div");
  const randomColor = () => Math.floor(Math.random() * 256);
  div.style.backgroundColor = `rgb(${randomColor()},${randomColor()},${randomColor()})`;
}
