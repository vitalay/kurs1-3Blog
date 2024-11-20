let posts = [];
const postTitleInput = document.querySelector(".js-post-titel-input");
const postTextInput = document.querySelector(".js-post-text-input");
const publishButton = document.querySelector(".js-publish-button");
const postsNode = document.querySelector(".js-posts");
const errorMessageNode = document.querySelector(".js-error-message");

// Обработчик кнопки публикации
publishButton.addEventListener("click", function () {
  const postFromUser = getPostFromUser(); // Получить данные из полей ввода
  if (!postFromUser) return; // Если проверка не пройдена, выходим из функции
  addPost(postFromUser); // Добавить пост в массив
  renderPosts(); // Отобразить все посты
  clearInputs(); // Очистить поля ввода
});

// Получение данных от пользователя
function getPostFromUser() {
  const title = postTitleInput.value.trim(); // Удаляем лишние пробелы
  const text = postTextInput.value.trim(); // Удаляем лишние пробелы

  // Проверка длины заголовка
  if (title.length > 100) {
    showErrorMessage("Заголовок не может быть длиннее 100 символов!");
    return null; // Возвращаем null, чтобы пропустить добавление поста
  }

  if (title === "") {
    showErrorMessage("Заголовок не может быть пустым!");
    return null; // Возвращаем null, если заголовок пуст
  }

  // Проверка длины текста поста
  if (text.length > 200) {
    showErrorMessage("Текст поста не может быть длиннее 200 символов!");
    return null; // Возвращаем null, чтобы пропустить добавление поста
  }

  if (text === "") {
    showErrorMessage("Текст поста не может быть пустым!");
    return null; // Возвращаем null, если текст пуст
  }

  hideErrorMessage(); // Убираем сообщение об ошибке, если всё в порядке

  const date = new Date().toLocaleString(); // Получить текущую дату и время

  return {
    title: title,
    text: text,
    date: date,
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
        <p class="post__date">${post.date}</p>
      </div>
    `;
  });

  postsNode.innerHTML = postsHtml; // Добавить HTML в контейнер
}

// Показать сообщение об ошибке
function showErrorMessage(message) {
  errorMessageNode.textContent = message;
  errorMessageNode.style.display = "block"; // Сделать сообщение видимым
}

// Скрыть сообщение об ошибке
function hideErrorMessage() {
  errorMessageNode.textContent = "";
  errorMessageNode.style.display = "none"; // Скрыть сообщение
}

// Очистить поля ввода
function clearInputs() {
  postTitleInput.value = "";
  postTextInput.value = "";
}