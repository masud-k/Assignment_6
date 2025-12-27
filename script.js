const postContainer = document.getElementById("post-container");
console.log(postContainer);
const loadPosts = () => {
  fetch("https://openapi.programming-hero.com/api/retro-forum/posts")
    .then((res) => res.json())
    .then((data) => {
      const forumLists = data.posts;
      forumLists.forEach((forumList) => {
        console.log(forumList);
        const postDiv = document.createElement("div");
        postDiv.innerHTML =`
        
        `;
      });
    });
};

loadPosts();
