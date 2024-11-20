 let post= {
    titel: '',
    text: ''
 };
 const postTitleInput = document.querySelector('.js-post-titel-input');
 const postTextInput = document.querySelector('.js-post-text-input');
 const publishButton = document.querySelector('.js-publish-button');
 const postsNode = document.querySelector('.js-posts');

 publishButton.addEventListener('click', function() {
    const postFromUser = getPostFromUser();

    setPost(postFromUser);

    renderPost();
 });

 function getPostFromUser() {
     const titel = postTitleInput.value;
     const text = postTextInput.value;

     return {
         titel: titel,
         text: text
     };
 }

 function setPost(newPost) {
     post = newPost;
 }

 function getPost() {
     return post;
 }
 function renderPost() {
     const post = getPost();
    const postHtml = `
    <div class='post'>
    <p class='post__titel'>${post.titel}</p>
    <p class='post__text'>${post.text}</p>
 
    </div>
    `;    
    postsNode.innerHTML = postHtml; 

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