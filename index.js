let posts = [];
const postTitleInput = document.querySelector(".js-post-titel-input");
const postTextInput = document.querySelector(".js-post-text-input");
const publishButton = document.querySelector(".js-publish-button");
const postsNode = document.querySelector(".js-posts");

// Обработчик кнопки публикации
publishButton.addEventListener("click", function () {
  const postFromUser = getPostFromUser(); // Получить данные из полей ввода
  addPost(postFromUser); // Добавить пост в массив
  renderPosts(); // Отобразить все посты
});

// Получение данных от пользователя
function getPostFromUser() {
  const title = postTitleInput.value;
  const text = postTextInput.value;

  return {
    title: title,
    text: text,
  };
}

// Добавление поста в массив
function addPost(post) {
  posts.push(post);
}

// Получение всех постов
function getPosts() {
  return posts;
}

// Отображение всех постов
function renderPosts() {
  const posts = getPosts(); // Получить все посты
  let postsHtml = "";

  posts.forEach((post) => {
    postsHtml += `
      <div class="post">
        <p class="post__title">${post.title}</p>
        <p class="post__text">${post.text}</p>
      </div>
    `;
  });

  postsNode.innerHTML = postsHtml; // Добавить HTML в контейнер
}
// // // получить данные из поля ввода

// // // сохранить пост

// // // отобразить пост

////////////////////////////////////////////////////////////////////
// let postTitle = '';
// const titleInput = document.querySelector('.js-titel-input');
// const publishButton = document.querySelector('.js-publish-button');
// const postsNode = document.querySelector('.js-posts');

// // Получить данные из поля ввода
// const getInputValue = () => titleInput.value;

// // Сохранить пост
// const savePost = (title) => {
//   postTitle = title;
// };

// // Отобразить пост
// const renderPost = (title) => {
//   postsNode.innerText = title;
// };

// // Обработчик нажатия на кнопку
// const handlePublishClick = () => {
//   const title = getInputValue();
//   savePost(title);
//   renderPost(title);
// };

// publishButton.addEventListener('click', handlePublishClick);
