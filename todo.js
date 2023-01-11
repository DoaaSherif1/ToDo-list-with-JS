let myList = document.getElementsByTagName("LI");

for (let i = 0; i < myList.length; i++) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myList[i].appendChild(span);
}

// Click on a close button to hide the current list item

let closeBtn = document.getElementsByClassName("close");

for (let i = 0; i < closeBtn.length; i++) {
    closeBtn[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
    }
}

// Add a "checked" symbol when clicking on a list item
let list = document.querySelector('ul');
list.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
    }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
    let liElm= document.createElement("li");
    let inputValue = document.getElementById("myInput").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
    alert("You must write something!");
    } else {
    document.getElementById("myUL").appendChild(liElm);
    }
    document.getElementById("myInput").value = "";

    let spanObj = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    spanObj.className = "close";
    spanObj.appendChild(txt);
    li.appendChild(spanObj);

    for (i = 0; i < closeBtn.length; i++) {
    closeBtn[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
    }
    }
}