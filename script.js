// var pTags = document.querySelectorAll("p");
// var divTags = document.querySelectorAll("div");
// var aTags = document.querySelectorAll("a");
// var imgEl = document.querySelectorAll("img");
// var changeP = document.querySelector("#change2");

// console.log(pTags);

// pTags[0].setAttribute("style", "font-size: 65px;");
// changeP.setAttribute("style", "color:blue; border:2px solid black;");
// aTags[0].setAttribute("href", "https://github.com");
// imgEl[0].setAttribute("src", "images/image_1.jpg");
// imgEl[0].setAttribute("style", "width:500px; height:200px;");

// for (var i = 0; i < divTags.length; i++) {
//   divTags[i].setAttribute("style", "text-decoration:underline; color:red;");
// }

//access all p tags in the document
var pTags = document.querySelectorAll("p");
// access all the div tags in the document
var divTags = document.querySelectorAll("div");
//access all the a tags in the document
var aTags = document.querySelectorAll("a");
//access all the images in the document
var imgTags = document.querySelector("img");
//to access the id in a document you need the # to say that it is a id.
// var idTags = document.querySelectorAll("#paragraph")

var changeP = document.querySelector("#change2");

console.log(pTags);
console.log(divTags);
console.log(aTags);
console.log(imgTags);

//setAttribute adds attributes to the first <p> tag in the document.
//change the tags style and changing the font-size of the p tag.
pTags[0].setAttribute("style","font-size: 65px");

changeP.setAttribute("style","color:blue; border: 2px dashed black;")
//we are accessing the first item in the document that is a a tag
//we want to change the href of a tag so we add the href in the setAttribute
aTags[0].setAttribute("href", "https://github.com");

imgTags.setAttribute("src","./images/image_1.jpg");
imgTags.setAttribute("style", "width: 300px; height: 300px");

for(var i = 0; i < pTags.length;i++)
{
    pTags[i].setAttribute("style", "color:red; text-decoration: underline; border: 5px dashed black");
}

for(var i = 0; i < divTags.length;i++)
{
    divTags[i].setAttribute("style", "color:blue; text-decoration: underline; border: 5px dashed black");
}