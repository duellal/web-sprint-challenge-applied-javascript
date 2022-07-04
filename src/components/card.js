import axios from 'axios';

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  const divCard = document.createElement('div');
  const divHeadline = document.createElement('div');
  const divAuthor = document.createElement('div');
  const divImgCont = document.createElement('div');
  const image = document.createElement('img');
  const spanName = document.createElement('span');

  divCard.classList.add('card');
  divHeadline.classList.add('headline');
  divAuthor.classList.add('author');
  divImgCont.classList.add('img-container');

  divHeadline.textContent = article.headline;
  image.src = article.authorPhoto;
  spanName.textContent = article.authorName;

  divCard.appendChild(divHeadline);
  divCard.appendChild(divAuthor);
  divAuthor.appendChild(divImgCont);
  divAuthor.appendChild(spanName);
  divImgCont.appendChild(image);

  divCard.addEventListener('click', event => {
    console.log(event.target.divHeadline);
  })

  return divCard
}


const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  const select = document.querySelector(selector);

  axios
    .get(`http://localhost:5001/api/articles`)
    .then(res => {
      const articlesObj = res.data.articles;

      const bootArr = Array.from(articlesObj.bootstrap)
      const jsArr = Array.from(articlesObj.javascript)
      const techArr = Array.from(articlesObj.technology)
      const jqArr = Array.from(articlesObj.jquery)
      const nodeArr = Array.from(articlesObj.node)

      jsArr.forEach(element => {
        const cards = Card(element);
        select.appendChild(cards);
      })

      bootArr.forEach(element => {
        const cards = Card(element);
        select.appendChild(cards);
      })

      techArr.forEach(element => {
        const cards = Card(element);
        select.appendChild(cards);
      })

      jqArr.forEach(element => {
        const cards = Card(element);
        select.appendChild(cards);
      })

      nodeArr.forEach(element => {
        const cards = Card(element);
        select.appendChild(cards);
      })
    })
    .catch(error => {
      console.log(error);
    })
}

export { Card, cardAppender }
