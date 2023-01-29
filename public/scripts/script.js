const postsElementId = document.getElementById("posts");

document.addEventListener("DOMContentLoaded", () => {
  updatePosts();
});

function updatePosts() {
  fetch("http://localhost:4444/api/posts")
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      let postElements = "";

      let posts = json;
      posts.forEach((element) => {
        postElements += `
        <div class="card my-4 shadow-sm" id=${element.id}>
          <div class="card-header">
            <div class="card-title">${element.title}</div>
          </div>
          <div class="card-body">
            <div class="card-text">${element.description}</div>
          </div>
        </div>
        `;
      });
      postsElementId.innerHTML = postElements;
    });
}

function newPost() {
  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;
  let postDatas = { title, description };

  let newPostProps = {
    method: "POST",
    //headers: { "content-type ": "aplication/json" },
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postDatas),
  };
  console.log("Post Data", JSON.stringify(newPostProps));

  fetch("http://localhost:4444/api/posts", newPostProps).then(
    (res) => console.log("resposta", res),
    updatePosts()
  );
  console.log(title, description);
}
