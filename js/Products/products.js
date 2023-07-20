const productPage = () => {
  const productPageCards = document.querySelector(".product__page__cards");
  
  getProduct("http://localhost:3000/items")
  .then((data) => createProduct(data))
  .catch((err) => console.log(err));

  async function getProduct(url) {
    const response = await fetch(`${url}`);

    try {
      return await response.json();
    } catch (err) {
      console.log(err);
    }

  }

  function createProduct(data) {
    
    return data.forEach(el => {
      let card = document.createElement('div')

      card.classList.add('product__page__cards__content');

      card.innerHTML = `
        <img src="${el.photo}" alt="" class="product__page__cards__content__photo">
        <div class="product__page__cards__content__description">
          <div class="name">${el.name}</div>
          <div class="price">${el.price}</div>
        </div>
      `;
      productPageCards.appendChild(card);
    });
  }
  
};

export default productPage;