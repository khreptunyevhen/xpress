function createArticles(body, path) {
  const articles = [
    {
      title: 'Foog Parfume',
      description: 'I too believe that shopping is relaxing is thing as whenever I get too stressed or tensed. I often go for shopping.',
      img: 'blog-1.png',
      date: 'Jul 17 2020',
      srcMore: '#!'
    },
    {
      title: 'White Musk Lotion',
      description: 'I too I often go for shopping.',
      img: 'blog-2.png',
      date: 'Oct 17 2021',
      srcMore: '#!'
    },
    {
      title: 'Cosmatics Products',
      description: 'I too I often relaxing is thing as whenever go for shopping.',
      img: 'blog-3.png',
      date: 'Dec 09 2021',
      srcMore: '#!'
    },
    {
      title: 'Cosmatics Products',
      description: 'I too I often relaxing is thing as whenever go for shopping.',
      img: 'blog-3.png',
      date: 'Dec 09 2021',
      srcMore: '#!'
    }
  ];
  const blogBody = document.querySelector(`.${body}`);

  if (articles.length < 1) {
    blogBody.style.display = 'none';
  } else {
    for (let i = 0; i < articles.length; i++) {
      blogBody.innerHTML += `
      <li class="blog__item">
        <article class="blog__item-post blog-post">
          <a href="${articles[i].srcMore}">
            <img src="./img/${path}/${articles[i].img}" alt="${articles[i].title}" class="blog-post__img">
          </a>
          <div class="blog-post__description">
            <h3 class="blog-post__title">${articles[i].title}</h3>
            <div class="blog-post__text">
              <p>${articles[i].description}</p>
            </div>
          </div>
          <div class="blog-post__bottom">
            <a href="${articles[i].srcMore}" class="blog-post__bottom-see">SEE MORE</a>
            <span class="blog-post__bottom-date">${articles[i].date}</span>
          </div>
        </article>
      </li>`;
    }
  }
}

createArticles('blog__list', 'blog');
