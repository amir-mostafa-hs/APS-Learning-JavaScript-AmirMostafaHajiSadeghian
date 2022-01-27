/*
 !# JS and the DOM :

 * script tag:
    We use (tag script) to access JavaScript code in HTML file.
    We write (script tag) in the end line (body) to execute other HTML tags for create the 
    document and elements so that we can then access the document elements with JavaScript code.
 
 * DOM (Document Object Model): 
    The browser converts web pages (HTML and CSS) into a DOM. DOM is a tool provided by the browser to manage, 
    edit or create web pages. The DOM looks like a JavaScript object. The DOM contains all the HTML tags and CSS styles we need.

    We use the global variable document to access the DOM in JavaScript.
    After writing the document, we can use the methods in it to access HTML elements and CSS styles.
    The DOM is not our main web page and is just an emulator of it. 
    The browser monitors the DOM and applies the changes to the homepage as soon as it changes.

    Example of working with a document:
*/

document.body.innerHTML = "Hello world";
// this change the body innerHTML

const selectElementById = document.getElementById("TestId");
// select this element with document.getElementById and assign it to the variable

selectElementById.innerHTML = "chenge innerHTML text";
// this innerHTML modifies the element with id (TestId)

const testGetElementsByTagName = document.getElementsByTagName("span");
// selects this all span elements and assign it to the variab

const testGetElementsByClassName = document.getElementsByClassName("ClassTest");
// selects this all element with class (ClassTest) and assign it to the variab

/*
 When we select several elements, the browser gives us the HTMLCollection containing them. 
 HTMLCollection is like an array and we can use some array features for them.
*/

const testQuerySelector = document.querySelector("#TestId");
// Selects the element with Id (#TestId) and assigns it to the variable

const testQuerySelectorAll = document.querySelectorAll(".ClassTest");
// Selects all elements with a class (.ClassTest) and assigns them to a variable

/*
 When we use querySelectorAll, the NodeList browser gives us the selected elements.
 NodeList is like an array and we can use some array features for them.
*/

const selectAllImgElement = document.querySelectorAll("img");
for (let index = 0; index < selectAllImgElement.length; index++) {
  selectAllImgElement[index].height = "100";
  selectAllImgElement[index].width = "100";
  selectAllImgElement[index].title = selectAllImgElement[index].alt;
}

/*
 ----------------- Style ----------------- 
 To style in JavaScript, we use camel case instead of (-).
*/

const selectFirstDivElement = document.querySelector("div");
selectFirstDivElement.style.width = "70vw";
selectFirstDivElement.style.height = "50vh";
selectFirstDivElement.style.backgroundColor = "tomato";
selectFirstDivElement.style.border = "2px dashed green";

/*
 ----------------- add class to HTML element ----------------- 
 for add class to HTML element , we can use className or classList
*/

const selectParagraph = document.querySelector("p");
selectParagraph.className = "color";
// If used in this way, the previous class deletes the element and replaces it with a new value.

selectParagraph.className += " fontSize";

selectParagraph.classList.add("fontFamily");
// classList may not work in some browsers

/*
 ----------------- textContent -----------------
 We can use textContent instead of innerHTML to change the text of the elements.
 innerHTML allows us to use HTML tags within JavaScript.
*/

const changeTextOfElement = document.querySelector("p");

changeTextOfElement.innerHTML = "Hello";
// Not good just to change the text of the element.
changeTextOfElement.innerHTML = "<em>Hello</em>";
// innerHTML can be used this way

changeTextOfElement.textContent = "this is a paragraph";

/*
 ----------------- Creating elements -----------------
 We create the element with the createElement method. 
 After creating the element, we add it to the body with appendChild.

 The appendChild() is a method of the Node interface. The appendChild() method allows you to add 
 a node to the end of the list of child nodes of a specified parent node.

 The appendChild() returns the appended child.

 If the childNode is a reference to an existing node in the document, the appendChild() method moves 
 the childNode from its current position to the new position.
*/
const createImage = document.createElement("img");
createImage.src =
  "https://www.kasandbox.org/programming-images/animals/cat.png";
createImage.alt = "Cat Photo";

document.body.appendChild(createImage);

const createParagraph = document.createElement("p");
const sampleText = document.createTextNode("this is a Cat");
// we can create text with createTextNode
createParagraph.appendChild(sampleText);
document.body.appendChild(createParagraph);

/*
 * I did the khanacademy homework today and the above are the important points of its educational clips
 */
