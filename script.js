const postContainer = document.getElementById("post-container");
const latestPostContainer = document.getElementById("latest-post-container");



const loadPosts = async () => {
    try {
        const response = await fetch("https://openapi.programming-hero.com/api/retro-forum/posts");
        const data = await response.json();
        displayPosts(data.posts);
        console.log(data.posts);
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
};
const displayPosts = (posts) => {
    postContainer.innerHTML = "";
    posts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.innerHTML = `
    <div class="w-full lg:w-[760px] flex bg-[#f2f2ff] p-4 rounded-lg mb-4">
              <div
                class="w-16 h-16 bg-gray-300 rounded-lg mr-6 overflow-hidden"
              >
                <img src="" alt="" />
              </div>
              <div>
                <div class="flex gap-6">
                  <p>#music</p>
                  <p>Author : Awlad Hossain</p>
                </div>
                <h1 class="text-xl font-bold">
                  10 Kids Unaware of Their Halloween Costume
                </h1>
                <p class="mt-4">
                  It’s one thing to subject yourself to ha Halloween costume
                  mishap because,<br />
                  hey that’s your prerogative
                </p>
                <hr class="my-5 border-dotted border-t" />
                <div class="flex justify-between">
                  <div class="flex gap-5">
                    <div>
                      <p><i class="fa-regular fa-message"></i> 560</p>
                    </div>
                    <div>
                      <p><i class="fa-regular fa-eye"></i>1,568</p>
                    </div>
                    <div>
                      <p><i class="fa-regular fa-clock"></i>5 min</p>
                    </div>
                  </div>
                  <button>
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
    try {
        const response = await fetch("https://openapi.programming-hero.com/api/retro-forum/latest-posts");
        const data = await response.json();
        displayLatestPosts(data);
        console.log(data);
    }
    catch (error) {
        console.error("Error fetching latest posts:", error);
    }
}
const displayLatestPosts = (data) => {
    data.forEach(post => {
        const latestPostElement = document.createElement("div");
        latestPostElement.innerHTML = `
        <div class="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div class="card-body">
              <div>
                <p class="text-sm text-gray-500">
                  <i class="fa-regular fa-calendar"></i> Date and time
                </p>
              </div>
              <h2 class="card-title font-bold">
                What will a mars habitat force that impact in our daily life!!!
              </h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div class="card-actions mt-4 items-center gap-4">
                <div class="w-14 h-14 bg-slate-600 rounded-full">
                  <img src="" alt="user avatar" />
                </div>
                <div>
                  <p class="font-semibold">Awlad Hossain</p>
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