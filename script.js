const albums = document.getElementById("albums");

fetch("https://jsonplaceholder.typicode.com/albums")
  .then((response) => response.json())
  .then((data) => {
    for (object in data) {
      const albumTitle = data[object].title;
      const li = document.createElement("li");

      li.innerHTML = albumTitle;
      li.className = "album_title";
      albums.append(li);

      let button = document.createElement("button");

      button.innerHTML = "delete";
      button.className = "delete";
      li.append(button);
    }
  })
  .catch((error) => console.log(error));

albums.onclick = (event) => {
  const target = event.target;
  const isButton = target.className === "delete";

  if (isButton) {
    const liBlock = target.closest(".album_title");
    liBlock.remove();
  }
};
