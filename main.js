const contentDiv = document.getElementById("content");

async function fetchText() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(json => contentDiv.innerHTML = json.body)
    .catch(err => console.log(err))
}

fetchText();


