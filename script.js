const postContainer = document.getElementById("post-container");
const latestPostContainer = document.getElementById("latest-post-container");
const readContainer = document.getElementById("read-container");
const readCountElement = document.getElementById("unread-count");
const loadingSpinner = document.getElementById("loading-spinner");
let readcount = [];

const loadPosts = async () => {
  try {
    const response = await fetch(
      "https://openapi.programming-hero.com/api/retro-forum/posts"
    );
    const data = await response.json();
    displayPosts(data.posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};
const displayPosts = (posts) => {
  postContainer.innerHTML = "";
  posts.forEach((post) => {
    console.log(post);
    const postElement = document.createElement("div");
    postElement.innerHTML = `
    <div class="w-full lg:w-[760px] flex bg-[#f2f2ff] p-4 rounded-lg mb-4">
              <div
                class="w-16 h-16 bg-gray-300 rounded-lg mr-6 overflow-hidden"
              >
                <img src="${post.image}" alt="author image" />
              </div>
              <div>
                <div class="flex gap-6">
                  <p># ${post.category}</p>
                  <p>Author : ${post.author.name}</p>
                </div>
                <h1 class="text-xl font-bold">
                  ${post.title}
                </h1>
                <p class="mt-4">
                    ${post.description}
                </p>
                <hr class="my-5 border-dotted border-t" />
                <div class="flex justify-between">
                  <div class="flex gap-5">
                    <div>
                      <p><i class="fa-regular fa-message"></i> ${post.comment_count}</p>
                    </div>
                    <div>
                      <p><i class="fa-regular fa-eye"></i>${post.view_count}</p>
                    </div>
                    <div>
                      <p><i class="fa-regular fa-clock"></i>${post.posted_time} min</p>
                    </div>
                  </div>
                  <button onclick="markAsRead('${post.id}', '${post.title}', '${post.view_count}')" class="btn btn-sm">
                    <i
                      class="bg-[#10B981] rounded-full p-2 fa-regular fa-envelope-open"
                    ></i>
                  </button>
                </div>
              </div>
            </div>
    `;
    postContainer.appendChild(postElement);
  });
};
loadPosts();

// latest posts

const loadLatestPosts = async () => {
  toggleSpinner(true);
  try {
    const response = await fetch(
      "https://openapi.programming-hero.com/api/retro-forum/latest-posts"
    );
    const data = await response.json();
    displayLatestPosts(data);
  } catch (error) {
    console.error("Error fetching latest posts:", error);
  }
};
const displayLatestPosts = (data) => {
  data.forEach((post) => {
    toggleSpinner(false);
    const latestPostElement = document.createElement("div");
    latestPostElement.innerHTML = `
        <div class="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img
                src="${post.cover_image}"
                alt="cover image"
              />
            </figure>
            <div class="card-body">
              <div>
                <p class="text-sm text-gray-500">
                  <i class="fa-regular fa-calendar"></i> ${post.author.posted_date}
                </p>
              </div>
              <h2 class="card-title font-bold">
                ${post.title}
              </h2>
              <p>
                ${post.description}
              </p>
              <div class="card-actions mt-4 items-center gap-4">
                <div class="w-14 h-14 bg-slate-600 rounded-full">
                  <img src="${post.profile_image}" alt="user avatar" />
                </div>
                <div>
                  <p class="font-semibold">${post.author.name}</p>
                  <p>Author</p>
                </div>
              </div>
            </div>
          </div>
  `;
    latestPostContainer.appendChild(latestPostElement);
  });
};
loadLatestPosts();

// Mark as read functionality

const markAsRead = (postId, postTitle, postViewCount) => {
  if (!readcount.includes(postId)) {
    readcount.push(postId);
    readCountElement.innerText = readcount.length;
    const readPostElement = document.createElement("div");
    readPostElement.innerHTML = `
    <div class="mt-4 flex justify-between items-center bg-white p-4 rounded-lg shadow-sm">
              <div>
                <h2 class="card-title font-bold">${postTitle}</h2>
              </div>
              <div>
                <p><i class="fa-regular fa-eye"></i>${postViewCount}</p>
              </div>
            </div>
    `;
    readContainer.appendChild(readPostElement);
  }
};
function toggleSpinner(isLoading) {
  if (isLoading) {
    loadingSpinner.classList.remove("hidden");
  } else {
    loadingSpinner.classList.add("hidden");
  }
};