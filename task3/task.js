console.log(document.URL)
console.log(document.title)
console.log(document.head)
console.log(document.all[10])

// document.all[10].textContent = "Hello";


console.log(document.getElementById("header-title").textContent)
console.log(document.getElementById("header-title").innerText)

var title =  document.getElementById("header-title")
title.style.color = "green"
// title.innerHTML = "New Title"
title.style.border = "solid black 2px"

var title = document.getElementsByClassName("title");
title[0].style.fontWeight = "bold";
title[0].style.color = "green";

var item = document.getElementsByClassName("list-group-item");
item[1].style.fontWeight = "bold";
