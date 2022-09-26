// MAINTENANCE PAGE

const catContainer = document.querySelector('.chat');
fetch('https://api.thecatapi.com/v1/images/search')
  .then(function (res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function (chatResponse) {
    const chatImg = chatResponse[0].url;
    console.log(chatImg);
    const img = document.createElement('img');
    img.src = chatImg;
    img.classList.add('chat-img');
    catContainer.appendChild(img);
  });
