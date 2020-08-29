fetch("https://jsonplaceholder.typicode.com/todos")
.then(response => response. json())
.then (data => createPost(data));


function createPost(array) {
    let listElement = document. getElementById("list");
    for(let i = 0; i < array. length; i++){
        let listItem = document .createElement("li");
        listItem.innerHTML = array[i]["title"];
        listElement.appendChild(listItem);
    }
} 