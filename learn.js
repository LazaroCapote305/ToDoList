fetch("https://jsonplaceholder.typicode.com/todos")
.then(response => response. json())
.then (data => createPost(data));


function createPost(postarray) {
    let listElement = document. getElementById("list");
    for(let i = 0; i < postarray. length; i++){
        let listItem = document .createElement("li");
        listItem.innerHTML = postarray[i]["title"];
        listElement.appendChild(listItem);
    }
} 